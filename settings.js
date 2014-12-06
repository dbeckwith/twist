function setStudyChance(value){
    chrome.storage.sync.set("study_chance", value,null);
}

function saveText() {
    var knowledge = document.getElementById("knowledgeTextArea").value;
    if (knowledge.trim() == "") {
        document.getElementById("saveError").innerHTML = "Text cannot be blank!";
            setTimeout(function() { document.getElementById("saveError").innerHTML = ""; }, 2000);
    }
    else {
        chrome.storage.sync.set({
            knowledgeText: knowledge
        }, function() {
            document.getElementById("saveStatus").innerHTML = "Options Saved!";
            setTimeout(function() { document.getElementById("saveStatus").innerHTML = ""; }, 2000);
        });
    }
}

function loadText() {
    chrome.storage.sync.get({
        knowledgeText: "[none]"
    }, function(data) {
        document.getElementById("knowledgeTextArea").value = data.knowledgeText;
    });
}

window.onload = function() {
    document.getElementById("submitButton").onclick = saveText;
    document.getElementById("loadButton").onclick = loadText;
}
