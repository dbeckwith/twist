function saveText() {
    var knowledge = document.getElementById("knowledgeTextArea").value;
    alert("asdkhfaskdjfh");
    chrome.storage.sync.set({
        "knowledgeText": knowledge
    }, function() {
        alert("hello");
        document.getElementById("saveStatus").innerHTML = "Options Saved!";
        setTimeout(function() { document.getElementById("saveStatus").innerHTML = ""; }, 1000);
    });
}

window.onload = function() {
    document.getElementById("submitButton").onclick = saveText;
}
