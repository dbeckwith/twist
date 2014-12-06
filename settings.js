function setStudyChance(value){
    chrome.storage.sync.set("study_chance", value,null);
}

function saveText() {
    var knowledge = document.getElementById("knowledgeTextArea").value;
    chrome.storage.sync.set({
        knowledgeText: knowledge
    }, function() {
        document.getElementById("saveStatus").innerHTML = "Options Saved!";
        setTimeout(function() { document.getElementById("saveStatus").innerHTML = ""; }, 1000);
    });
}

function loadText() {
    chrome.storage.sync.get({
        knowledgeText: "[none]"
    }, function(data) {
        document.getElementById("saveStatus").innerHTML = "Saved text: " + data.knowledgeText;
    });
}

window.onload = function() {
    document.getElementById("submitButton").onclick = saveText;
    document.getElementById("loadButton").onclick = loadText;
}
