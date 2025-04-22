package com.piupsai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import com.piupsai.model.Slide;
import com.piupsai.repository.SlideRepository;

public class SlideController {
    @Autowired
    private SlideRepository slideRepository;

    @GetMapping
    public List<Slide> getAllSlides() {
        return slideRepository.findAll();
    }
}
