let calcHeading = document.querySelector('#calc-heading') as  HTMLHeadingElement;
let themeName = document.querySelector('#theme-name') as HTMLHeadingElement;
let themeLabel = document.querySelector('#theme-choice') as HTMLInputElement;
let slider = document.querySelector('input[type="range"]') as HTMLInputElement;
let resultDisplay = document.querySelector('#display-screen') as HTMLDivElement;
let inputButtons = document.querySelector('#input-buttons') as HTMLDivElement;
let numberOperators = document.querySelectorAll<HTMLButtonElement>('.number-operator');
let deleteButton = document.querySelector('#delete') as HTMLButtonElement;
let resetButton = document.querySelector('#reset') as HTMLButtonElement;
let equalButton = document.querySelector('#equal') as HTMLButtonElement;

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

// A callback function that modifies the display screen
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

// A callbcak function that modifies the input buttons sections
function updateInputButtons(mainBGColor: string, numOperatorBG: string, numOperatorBorderBottom: string, delBG: string, delBorderBottom: string,
    equalBG: string, equalBorderBottom: string, numTextColor: string, delTextColor: string):void {
        /**
         * This function updates the colors of the various buttons
         * @param mainBGColor: string -> new background color for the main buttons container
         * @param numOperatorBG: string -> new background color for the number/operator buttons
         * @param numOperatorBorderBottom: string -> new border bottom color for the number/operator buttons
         * @param delBG: string -> new background color for the delete/reset buttons
         * @param delBorderBottom: string -> new border bottom color for the delete/reset buttons
         * @param equalBG: string -> new background color for the equal button
         * @param equalBorderBottom: string -> new color for the border bottom of the equal button
         * @param numTextColor: string -> new color for the text on the buttons
         * @param delTextColor: string -> new color for the text on the delete and reset buttons
         * @returns void
         */


        inputButtons.style.backgroundColor = mainBGColor;
        numberOperators.forEach((ele: HTMLButtonElement) => {
            ele.style.backgroundColor = numOperatorBG;
            ele.style.borderBottomColor = numOperatorBorderBottom;
            ele.style.color = numTextColor;
        })
        deleteButton.style.backgroundColor = delBG;
        deleteButton.style.borderBottomColor = delBorderBottom;
        deleteButton.style.color = delTextColor;
        resetButton.style.backgroundColor = delBG;
        resetButton.style.borderBottomColor = delBorderBottom;
        resetButton.style.color = delTextColor;
        equalButton.style.backgroundColor = equalBG;
        equalButton.style.borderBottomColor = equalBorderBottom;
    }