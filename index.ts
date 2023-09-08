let calcHeading = document.querySelector('#calc-heading') as  HTMLHeadingElement;
let themeName = document.querySelector('#theme-name') as HTMLHeadingElement;
let themeLabel = document.querySelector('#theme-choice') as HTMLLabelElement;
let slider = document.querySelector('input[type="range"]') as HTMLInputElement;
let resultDisplay = document.querySelector('#display-screen') as HTMLDivElement;


// A callback function that modifies the top section
function topSectionUpdate(nameColor: string, themeNameColor: string, labelColor: string, thumbColor: string, sliderColor: string):void {
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
function updateDisplayScreen(bgColor: string, textColor: string): void {
    /**
     * This function updates the background and foreground colors of the display screen
     * @param bgColor: string -> new background color
     * @param textColor: string -> new foreground color
     * @returns void
     */

    resultDisplay.style.backgroundColor = bgColor;
    resultDisplay.style.color = textColor;
}