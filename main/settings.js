let allMatchesInput = document.getElementById("allMatchesHighlight")
let focusedMatchInput = document.getElementById("focusedMatchHighlight")
let opacityInput = document.getElementById("gray-opacity")

loadSettings()

document.getElementById("apply").addEventListener("click", async() => {
    allMatchesHighlightColor = allMatchesInput.value
    focusedMatchHighlightColor = focusedMatchInput.value
    opacity = opacityInput.value

    saveSettings(allMatchesHighlightColor, focusedMatchHighlightColor, opacity)
});

document.getElementById("cancel").addEventListener("click", async() => { loadSettings() });