function atLeastTwoChareacters(text){
    const letters = text.match(/[a-z]/gi)|| [];
    return letters.length >= 2;
}
function abscenceOfThreaConsecutiveCharacters(text){
    for(const character of text){
        const ocurrences = Array.from(text).filter(v => v== character).length;
        if(ocurrences >=3){
            return false;
        }
    }
    return true;
}


const checks = [atLeastTwoChareacters ,abscenceOfThreaConsecutiveCharacters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".leter-count");
const spaceCountElement = document.querySelector(".space-count");


textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[/s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    let wordCount = 0;

    outher:
    for (const text of splitted) {
        for (const check of checks) {
            if(! check (text)){
                continue outher;
            }
        }
        wordCount++;
    }
    
    wordCountElement.textContent=wordCount;
    letterCountElement.textContent=letterCount;
    spaceCountElement.textContent=spaceCount;

});