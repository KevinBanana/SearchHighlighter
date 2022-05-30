let allMatchesInput = document.getElementById("allMatchesHighlight")
let focusedMatchInput = document.getElementById("focusedMatchHighlight")
let opacityInput = document.getElementById("gray-opacity")

loadSettings()

document.getElementById("apply").addEventListener("click", async() => {
    saveSettings(allMatchesInput.value, focusedMatchInput.value, opacityInput.value)
});

document.getElementById("cancel").addEventListener("click", async() => { window.close() });