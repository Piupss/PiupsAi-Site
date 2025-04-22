document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel();
    
    // Resize observer (opcional, substitui o window.resize)
    const resizeObserver = new ResizeObserver(() => {
        carousel.carousel.style.height = window.innerWidth < 768 ? 'auto' : '625px';
    });
    resizeObserver.observe(document.body);
});

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
if (isIOS) {
    document.body.style.height = `${window.innerHeight}px`;
    window.addEventListener('resize', () => {
        document.body.style.height = `${window.innerHeight}px`;
    });
}

class Carousel {
    constructor() {
        this.handleProgressClick = (index) => () => this.goToSlide(index);

        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);

        this.carousel = document.querySelector('.hero-banner');
        if (!this.checkElements()) return;
        
        this.animationFrameId = null;
        this.slides = this.carousel.querySelectorAll('.slide');
        this.progressItems = this.carousel.querySelectorAll('.progress-item');
        this.progressBars = this.carousel.querySelectorAll('.progress-bar');
        this.pauseBtn = this.carousel.querySelector('.carousel-pause-btn');
        this.currentIndex = 0;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.autoPlayInterval = null;
        this.swipeThreshold = 50;
        this.slideInterval = 5000;
        this.isPaused = false;

        this.preloadImages();
        this.init();
    }

    checkElements() {
        if (!this.carousel) {
            console.error('Elemento do carrossel não encontrado');
            return false;
        }
        return true;
    }

    preloadImages() {
        this.slides.forEach(slide => {
            const img = new Image();
            img.src = slide.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/)[1];
          });
    }

    // Método para inicializar o carrossel
    init() {
        this.addEventListeners();
        this.showSlide(this.currentIndex);
        this.startAutoPlay();
    }

    addEventListeners() {
        if (!this.carousel) return;
        
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.pauseAutoPlay = this.pauseAutoPlay.bind(this);
        this.startAutoPlay = this.startAutoPlay.bind(this);
        
        this.carousel.addEventListener('touchstart', this.handleTouchStart, { passive: true, capture: true });
        this.carousel.addEventListener('touchend', this.handleTouchEnd, { passive: true });
        document.addEventListener('keydown', this.handleKeyDown);
        this.carousel.addEventListener('mouseenter', this.pauseAutoPlay);
        this.carousel.addEventListener('mouseleave', this.startAutoPlay);
        
        if (this.progressItems) {
            this.progressItems.forEach((item, index) => {
                item.addEventListener('click', () => this.goToSlide(index))
            });
        }

        if (this.pauseBtn) {
            this.pauseBtn.addEventListener('click', () => this.togglePause());
        }
    }

    // Novo método para alternar pausa
    togglePause() {
        this.isPaused = !this.isPaused;
        this.pauseBtn.setAttribute('aria-pressed', this.isPaused);

        // Alternar ícones
        const pauseIcon = this.pauseBtn.querySelector('.pause-icon');
        const playIcon = this.pauseBtn.querySelector('.play-icon');

        if (this.isPaused) {
            this.pauseAutoPlay();
            pauseIcon.classList.remove('active');
            playIcon.classList.add('active');
        } else {
            this.startAutoPlay();
            playIcon.classList.remove('active');
            pauseIcon.classList.add('active');
        }
    }

    handleTouchMove(e) {
        if (!this.touchStartX) return;
        const deltaX = e.touches[0].clientX - this.touchStartX;
        this.carousel.style.transform = `translateX(${deltaX}px)`;
    }

    handleTouchEnd(e) {
        const deltaX = e.changedTouches[0].clientX - this.touchStartX;
        if (Math.abs(deltaX) > this.swipeThreshold) {
          deltaX > 0 ? this.prevSlide() : this.nextSlide();
        }
        this.carousel.style.transform = '';
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowLeft') this.prevSlide();
        else if (e.key === 'ArrowRight') this.nextSlide();
    }

    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        if (Math.abs(deltaX) > this.swipeThreshold) {
            deltaX > 0 ? this.prevSlide() : this.nextSlide();
        }
    }

    handleResize() {
        cancelAnimationFrame(this.resizeTimeout);
    this.resizeTimeout = requestAnimationFrame(() => {
        this.carousel.style.height = window.innerWidth < 768 ? 'auto' : '625px';
    });
    }

    showSlide(index) {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.currentIndex = (index + this.slides.length) % this.slides.length;
        
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            slide.setAttribute('aria-hidden', 'true');
            
            if (i === this.currentIndex) {
                slide.classList.add('active');
                slide.setAttribute('aria-live', 'polite');
                slide.setAttribute('aria-hidden', 'false');
            } else if (i === (this.currentIndex - 1 + this.slides.length) % this.slides.length) {
                slide.classList.add('prev');
            }
        });

        this.updateProgressBar();
    }

    updateProgressBar() {
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        const progressBar = this.progressBars[this.currentIndex];
        progressBar.style.width = '0%';
        let start = null;

        const animate = (timestamp) => {
        if (!start) start = timestamp;
        if (this.isPaused) return; // Pausa a animação
        const progress = (timestamp - start) / this.slideInterval;
        progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
        if (progress < 1 && !this.isPaused) {
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
    this.animationFrameId = requestAnimationFrame(animate);
    }

    animateSlide(direction) {
        const nextIndex = (this.currentIndex + direction + this.slides.length) % this.slides.length;
        const animations = [
          { transform: `translateX(${direction * 100}%)`, opacity: 0 },
          { transform: 'translateX(0)', opacity: 1 }
        ];
        
        this.slides[nextIndex].animate(animations, {
          duration: 600,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
      }

    goToSlide(index) {
        this.showSlide(index);
        this.restartAutoPlay();
    }

    nextSlide() {
        this.showSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.showSlide(this.currentIndex - 1);
    }

    focusSlideContent() {
        const activeSlide = this.slides[this.currentIndex];
        const focusable = activeSlide.querySelector('button, [href], [tabindex]');
        if (focusable) focusable.focus();
    }

    startAutoPlay() {
        document.addEventListener('visibilitychange', () => {
            document.hidden ? this.pauseAutoPlay() : this.startAutoPlay();
          });
    }

    pauseAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
    }

    restartAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
    }

    initAutoPlayObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isPaused) {
                    this.startAutoPlay();
                } else {
                    this.pauseAutoPlay();
                }
            });
        }, { threshold: 0.5 });
    
        this.observer.observe(this.carousel);
    }

    destroy() {
        window.removeEventListener('resize', this.handleResize);
        this.pauseAutoPlay();
        document.removeEventListener('keydown', this.handleKeyDown);
        this.carousel.removeEventListener('touchstart', this.handleTouchStart);
        this.carousel.removeEventListener('touchend', this.handleTouchEnd);
        this.carousel.removeEventListener('mouseenter', this.pauseAutoPlay);
        this.carousel.removeEventListener('mouseleave', this.startAutoPlay);
        
        this.progressItems.forEach((item, index) => {
            item.removeEventListener('click', this.handleProgressClick(index));
        });
    }
}