"use strict";
let calcHeading = document.querySelector('#calc-heading');
let themeName = document.querySelector('#theme-name');
let themeLabel = document.querySelector('#theme-choice');
let slider = document.querySelector('input[type="range"]');
let resultDisplay = document.querySelector('#display-screen');
slider.style.setProperty('--slider-thumb-bg-color', 'pink');
// A callback function that modifies the top section
function topSectionUpdate(nameColor, themeNameColor, labelColor, thumbColor, sliderColor) {
    /**
     * This function updates the color or background color of the top-section.
     * @param nameColor: string -> new color for the main title
     * @param themeNameColor: string -> new color for the theme name
     * @param labelColor: string -> new color for the theme picker label
     * @param thumbColor: string -> new background color for the slider thumb
     * @param sliderColor: string -> new background color for the slider
     * @returns void
     */
    calcHeading.style.color = nameColor;
    themeName.style.color = themeNameColor;
    themeLabel.style.color = labelColor;
    slider.style.backgroundColor = sliderColor;
    slider.style.setProperty('--slider-thumb-bg-color', thumbColor);
}
// A callback function the modifies the display screen
function updateDisplayScreen(bgColor, textColor) {
    /**
     * This function updates the background and foreground colors of the display screen
     * @param bgColor: string -> new background color
     * @param textColor: string -> new foreground color
     * @returns void
     */
    resultDisplay.style.backgroundColor = bgColor;
    resultDisplay.style.color = textColor;
}
