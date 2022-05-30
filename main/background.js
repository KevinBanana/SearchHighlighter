let highlightColor = "#e66465"
let opacity = 25

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ highlightColor });
    chrome.storage.sync.set({ opacity });
    console.log(`SearchHighlighter::Highlight color set to ${highlightColor}`);
    console.log(`SearchHighlighter::Gray-out opacity set to ${opacity}`);
});