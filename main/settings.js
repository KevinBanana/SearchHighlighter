let highlightColor = document.getElementById("highlight")
let opacity = document.getElementById("gray-opacity")

chrome.storage.sync.set({ highlightColor });
chrome.storage.sync.set({ opacity });
console.log(`SearchHighlighter::Highlight color set to ${highlightColor}`);
console.log(`SearchHighlighter::Gray-out opacity set to ${opacity}`);