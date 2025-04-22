package com.piupsai.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class Slide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDUID)
    private Long id;
    private String title;
    private String description;
    private String imageUrl;

    // Getters e Setters
}