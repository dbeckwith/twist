var knowledgeText = "[none]";

function loadText() {
    chrome.storage.sync.get({
        knowledgeText: "[none]"
    }, function(data) {
        knowledgeText = data.knowledgeText;
    });
}

loadText();

function getTextSample(length) {
    // TODO: return some section of knowledgeText that is at most length long
    return knowledgeText;
}
