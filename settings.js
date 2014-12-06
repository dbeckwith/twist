function saveText() {
    var knowledge = document.getElementById("knowledgeTextArea").value;
    chrome.storage.sync.set({
        knowledgeText: knowledge
    }, function() {
        alert("options saved");
        document.getElementById("saveStatus").innerHTML = "Options Saved!";
        setTimeout(function() { document.getElementById("saveStatus").innerHTML = ""; }, 1000);
    });
}

function loadText() {
    chrome.storage.sync.get({
        knowledgeText: "[none]"
    }, function(data) {
        alert("options loaded: " + data.knowledgeText);
        document.getElementById("saveStatus").innerHTML = data.knowledgeText;
    });
}

window.onload = function() {
    document.getElementById("submitButton").onclick = saveText;
    document.getElementById("loadButton").onclick = loadText;
}
