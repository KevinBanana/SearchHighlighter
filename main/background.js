// Default settings values
let allMatchesHighlightColor = "#fdfd01"
let focusedMatchHighlightColor = "#fd9533"
let opacity = 33

chrome.runtime.onInstalled.addListener(() => {
    saveSettings(allMatchesHighlightColor, focusedMatchHighlightColor, opacity)
});

function saveSettings(allMatchesHighlightColor, focusedMatchHighlightColor, opacity) {
    chrome.storage.sync.set({"allMatchesColor": allMatchesHighlightColor}, function() {
        console.log('All matches highlight color is set to ' + allMatchesHighlightColor);
    });
    chrome.storage.sync.set({"focusedMatchColor": focusedMatchHighlightColor}, function() {
        console.log('Focused match highlight color is set to ' + focusedMatchHighlightColor);
    });
    chrome.storage.sync.set({"opacity": opacity}, function() {
        console.log('Opacity is set to ' + opacity);
    });
}

function loadSettings() {
    chrome.storage.sync.get(['allMatchesColor', 'focusedMatchColor', 'opacity'], function(result) {
        allMatchesInput.value = result.allMatchesColor
        focusedMatchInput.value = result.focusedMatchColor
        opacityInput.value = result.opacity
        console.log(`Loaded settings: highlightColor: ${result.highlightColor}, opacity: ${result.opacity}`)
    });
}