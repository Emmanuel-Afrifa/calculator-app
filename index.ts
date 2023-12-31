let calcHeading = document.querySelector('#calc-heading') as  HTMLHeadingElement;
let themeName = document.querySelector('#theme-name') as HTMLHeadingElement;
let themeLabel = document.querySelector('#theme-choice') as HTMLInputElement;
let choiceMarker = document.querySelector('#choice-marker') as HTMLLabelElement;
let slider = document.querySelector('input') as HTMLInputElement;
let resultDisplay = document.querySelector('#display-screen') as HTMLDivElement;
let inputButtons = document.querySelector('#input-buttons') as HTMLDivElement;
let numberOperators = document.querySelectorAll<HTMLButtonElement>('.number-operator');
let deleteButton = document.querySelector('#delete') as HTMLButtonElement;
let resetButton = document.querySelector('#reset') as HTMLButtonElement;
let equalButton = document.querySelector('#equal') as HTMLButtonElement;
let numberButtons = document.querySelectorAll<HTMLButtonElement>('.number');
let plusButton = document.querySelector('#plus') as HTMLButtonElement;
let minusButton = document.querySelector('#minus') as HTMLButtonElement;
let multiplictionButton = document.querySelector('#multiplication') as HTMLButtonElement;
let divisionButton = document.querySelector('#division') as HTMLButtonElement;

window.addEventListener('load', () => {
    slider.value = '1'
})

// Adding an event listener to the delete button 
deleteButton.addEventListener('click', () => {
    resultDisplay.innerText = resultDisplay.innerText.slice(0,-1);
})

// Adding an event listener to the reset button
resetButton.addEventListener('click', () => {
    resultDisplay.innerText = '';
})


// Adding an event listener to the numbers
numberOperators.forEach((element: HTMLButtonElement) => {
    element.addEventListener('click', (event: MouseEvent) => { 
        let specialCharacters = ['+', '-', '/', 'x'];   
        if (element.id === 'delete') { return }
        if ((element.id === 'plus' || element.id === 'minus' || element.id === 'division' || element.id === 'multiplication'
        ) && resultDisplay.innerText === '') { return }
        let previousEntry = resultDisplay.innerText;
        let previousEntryLength = previousEntry.length;
        let currentEntry: string;
        let currentValue = (<HTMLButtonElement>event.target).innerText
        
        for (let i=0; i<specialCharacters.length; i++){
            if (currentValue === '.' && previousEntry[previousEntryLength-1] === '.'){
                currentEntry = previousEntry;
                resultDisplay.innerText = currentEntry;
                return;
            }
            else if ((previousEntry[previousEntryLength-1] === specialCharacters[i] && currentValue === specialCharacters[i])) {
                currentEntry = previousEntry;
                resultDisplay.innerText = currentEntry;
                return;
            }   
            else if ((specialCharacters.includes(previousEntry[previousEntryLength-1]) && specialCharacters.includes(currentValue))
            && currentValue !== '-'){
                currentEntry = previousEntry;
                resultDisplay.innerText = currentEntry;
                return;
            } 
        }   
        currentEntry = previousEntry + (<HTMLButtonElement>event.target).innerText;
        resultDisplay.innerText = currentEntry;
    })
})

// Adding an event listener to the equal button
equalButton.addEventListener('click', () => {
    let operators = ['+', '-', '/', 'x'];
    let determiner: boolean = false;
    for (let i=0; i<operators.length; i++){
        if (resultDisplay.innerText.includes(operators[i])){
            determiner = true;
        }
    }

    if (determiner){
        if (resultDisplay.innerText === '') { return };
        let inputString = resultDisplay.innerText.split('');
        for (let j = 0;j < inputString.length; j++){
            if (inputString[j] === ','){
                inputString.splice(j,1);
            }
        }
        let newInputString = inputString.join('')
        let result = eval(newInputString.replace('x', '*'))
        let newResult = result.toString().split('');
        if (newResult.length > 3){
            if (newResult.includes('.')){
                let decimalIndex = newResult.indexOf('.');
                let wholeString = newResult.slice(0,decimalIndex);
                let decimalString = newResult.slice(decimalIndex + 1);
                wholeString = additionOfCommas(wholeString)
                wholeString.push('.')
                newResult = wholeString.concat(decimalString);
           }
           else {
                newResult =  additionOfCommas(newResult)
           }
        }
        resultDisplay.innerText = newResult.join('')
    }
    else {
        let newResult = resultDisplay.innerText.split('')
        if (resultDisplay.innerText.length > 3){
            if (newResult.length > 3){
               if (newResult.includes('.')){
                    let decimalIndex = newResult.indexOf('.');
                    let wholeString = newResult.slice(0,decimalIndex);
                    let decimalString = newResult.slice(decimalIndex + 1);
                    wholeString = additionOfCommas(wholeString)
                    wholeString.push('.')
                    newResult = wholeString.concat(decimalString);
               }
               else {
                    newResult =  additionOfCommas(newResult)
               }
            }
        }
        resultDisplay.innerText = newResult.join('')
    }
    
})

// Declaring a function that adds commas at the appropriate places
function additionOfCommas(inputArray: string[]): string[]{
    /**
     * @param inputArray: string[] -> array of strings which we wish to insert commas at the appropriate places
     * @returns string[] -> a new array of strings with commas inserted at the right places
     */
    let counter = 0;
    for (let i = inputArray.length - 1; i>=0 ; i-- ){
        counter += 1;
        if (counter % 3 === 0){
            if (inputArray[i-1] === ',' || inputArray[i] === ','){
                return inputArray;
            }
            inputArray.splice(i,0,',')

        }
    }
    if (inputArray[0] === ',') { inputArray.shift() }
    return inputArray;
}


/* Adding the mouseover event to the buttons depending on the theme chosen */
// TOGGLE 
slider.addEventListener('mouseenter', () => {
    if (Number(slider.value) === 1){
        slider.style.setProperty('--slider-thumb-bg-hover', 'hsl(6, 63%, 60%)');
    }
    if (Number(slider.value) === 2){
        slider.style.setProperty('--slider-thumb-bg-hover', 'hsla(25, 98%, 60%)');
    }
    if (Number(slider.value) === 3){
        slider.style.setProperty('--slider-thumb-bg-hover', 'hsla(176, 100%, 64%)');
    }
})

slider.addEventListener('mouseleave', () => {
    if (Number(slider.value) === 1){
        slider.style.setProperty('--slider-thumb-bg-hover', 'hsl(6, 63%, 50%)');
    }
    if (Number(slider.value) === 2){
        slider.style.setProperty('--slider-thumb-bg-hover', 'hsl(25, 98%, 40%)');
    }
    if (Number(slider.value) === 3){
        slider.style.setProperty('--slider-thumb-bg-hover', 'hsl(176, 100%, 44%)');
    }
})


// EQUAL BUTTON
equalButton.addEventListener('mouseenter', () => {
    hoverUpdateByTheme(equalButton, 'hsla(6, 63%, 60%)', 'hsla(25, 98%, 60%)', 'hsla(176, 100%, 64%)')
})

equalButton.addEventListener('mouseleave', () => {
    hoverUpdateByTheme(equalButton, 'hsl(6, 63%, 50%)', 'hsl(25, 98%, 40%)', 'hsl(176, 100%, 44%)')
})

// DELETE AND RESET BUTTONS
deleteButton.addEventListener('mouseenter', () => {
    hoverUpdateByTheme(deleteButton, 'hsl(225, 21%, 69%)', 'hsl(185, 42%, 57%)', 'hsl(281, 89%, 45%)')
})

deleteButton.addEventListener('mouseleave', () => {
    hoverUpdateByTheme(deleteButton, 'hsl(225, 21%, 49%)', 'hsl(185, 42%, 37%)', 'hsl(281, 89%, 26%)')
})

resetButton.addEventListener('mouseenter', () => {
    hoverUpdateByTheme(resetButton, 'hsl(225, 21%, 69%)', 'hsl(185, 42%, 57%)', 'hsl(281, 89%, 45%)')
})

resetButton.addEventListener('mouseleave', () => {
    hoverUpdateByTheme(resetButton, 'hsl(225, 21%, 49%)', 'hsl(185, 42%, 37%)', 'hsl(281, 89%, 26%)')
})

// NUMBER AND OPERATOR BUTTONS
numberOperators.forEach((element: HTMLButtonElement) => {
    element.addEventListener('mouseenter', () => { 
        if (element.id === 'delete'){
            return
        }
        if (Number(slider.value) === 1){
            element.style.backgroundColor = 'hsl(0, 0%, 100%)'
        }
        if (Number(slider.value) === 2){
            element.style.backgroundColor = 'hsl(0, 0%, 100%)'
        }
        if (Number(slider.value) === 3){
            element.style.backgroundColor = 'hsl(268, 47%, 51%)'
        }
    })

    element.addEventListener('mouseleave', () => { 
        if (element.id === 'delete'){
            return
        }
        if (Number(slider.value) === 1){
            element.style.backgroundColor = 'hsl(30, 25%, 89%)'
        }
        if (Number(slider.value) === 2){
            element.style.backgroundColor = 'hsl(45, 7%, 89%)'
        }
        if (Number(slider.value) === 3){
            element.style.backgroundColor = 'hsl(268, 47%, 21%)'
        }
    })
})


// Adding an event handler function to the theme picker
slider.addEventListener('click', () => {
    // Theme 1
    if (Number(slider.value) === 1){
        document.querySelector('body')!.style.backgroundColor = 'hsl(222, 26%, 31%)';
        topSectionUpdate('hsl(0, 0%, 100%)', 'hsl(6, 63%, 50%)', 'hsl(223, 31%, 20%)');
        updateDisplayScreen('hsl(224, 36%, 15%)', 'hsl(0, 0%, 100%)');
        updateInputButtons('hsl(223, 31%, 20%)', 'hsl(30, 25%, 89%)', 'hsl(28, 16%, 65%)', 'hsl(225, 21%, 49%)',
        'hsl(224, 28%, 35%)', 'hsl(6, 63%, 50%)', 'hsl(6, 70%, 34%)', 'hsl(221, 14%, 31%)', 'hsl(0, 0%, 100%)');
        equalButton.style.color = 'hsl(0, 0%, 100%)'
    }

    if (Number(slider.value) === 2){
        document.querySelector('body')!.style.backgroundColor = 'hsl(0, 0%, 90%)';
        topSectionUpdate('hsl(60, 10%, 19%)', 'hsl(25, 98%, 40%)', 'hsl(0, 5%, 81%)');
        updateDisplayScreen('hsl(0, 0%, 93%)', 'hsl(60, 10%, 19%)');
        updateInputButtons('hsl(0, 5%, 81%)', 'hsl(45, 7%, 89%)', 'hsl(35, 11%, 61%)', 'hsl(185, 42%, 37%)', 'hsl(185, 58%, 25%)', 
        'hsl(25, 98%, 40%)', 'hsl(25, 99%, 27%)', 'hsl(60, 10%, 19%)', 'hsl(0, 0%, 100%)');
        equalButton.style.color = 'hsl(0, 0%, 100%)'
    }

    if (Number(slider.value) === 3){
        document.querySelector('body')!.style.backgroundColor = 'hsl(268, 75%, 9%)';
        topSectionUpdate('hsl(52, 100%, 62%)', 'hsl(176, 100%, 44%)', 'hsl(268, 71%, 12%)');
        updateDisplayScreen('hsl(268, 71%, 12%)', 'hsl(52, 100%, 62%)');
        updateInputButtons('hsl(268, 71%, 12%)', 'hsl(268, 47%, 21%)', 'hsl(290, 70%, 36%)', 'hsl(281, 89%, 26%)', 'hsl(285, 91%, 52%)', 
        'hsl(176, 100%, 44%)', 'hsl(177, 92%, 70%)', 'hsl(52, 100%, 62%)', 'hsl(0, 0%, 100%)')
        equalButton.style.color = 'hsl(198, 20%, 13%)'
    }
})


// A callback function that modifies the top section
function topSectionUpdate(nameColor: string, thumbColor: string, sliderColor: string):void {
    /**
     * This function updates the color or background color of the top-section.
     * @param nameColor: string -> new color for the main title
     * @param thumbColor: string -> new background color for the slider thumb
     * @param sliderColor: string -> new background color for the slider
     * @returns void
     */

    calcHeading.style.color = nameColor;
    themeName.style.color = nameColor;
    choiceMarker.style.color = nameColor;
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

// A callback function changes the background color of the specified element
function updateHoverStates(currentButton: HTMLButtonElement, bgColor: string):void {
    /**
     * A function that changes the background color of the current element
     * @param currentButton: HTMLButtonElement -> the button element whose background color we wish to change
     * @param bgColor: string -> the new background color to be applied
     */

    currentButton.style.backgroundColor = bgColor;
}


// A callback function for the hover states for the various themes
function hoverUpdateByTheme(currentButton: HTMLButtonElement, themeOneValue: string, themeTwoValue: string, themeThreeValue: string): void {
    /**
     * This function changes the hover states depending on the current theme
     * @param currentButton: HTMLButtonElement -> current element whose background we wish to change
     * @param themeOneValue: string -> color for theme one
     * @param themeTwoValue: string -> color for theme two
     * @param themeThreeValue: string -> color for theme three
     */

    if (Number(slider.value) === 1){
        // updateHoverStates(equalButton, 'hsla(6, 63%, 60%)');
        updateHoverStates(currentButton, themeOneValue);
    }

    if (Number(slider.value) === 2){
        // updateHoverStates(equalButton, 'hsla(25, 98%, 60%)');
        updateHoverStates(currentButton, themeTwoValue);
    }

    if (Number(slider.value) === 3){
        // updateHoverStates(equalButton, 'hsla(176, 100%, 64%)');
        updateHoverStates(currentButton, themeThreeValue);
    }
}