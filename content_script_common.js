var sentenceRegex = /.+?[.?!](\s+|$)/igm;

var knowledgeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut porttitor turpis, at sodales lacus. Quisque laoreet hendrerit aliquet. Sed sodales sit amet ipsum id convallis. Nam id commodo purus. Nam sed tempor turpis. Proin blandit tellus sed arcu dictum pulvinar. Nulla congue ex vel elit dictum, quis lacinia quam sagittis. Phasellus volutpat aliquet odio sed viverra. Vestibulum eu nunc tortor. Suspendisse lacinia bibendum ligula, eget commodo dolor tincidunt a. Ut tristique eu mauris placerat iaculis. Donec efficitur, nisi ac iaculis dapibus, sem ex egestas tellus, eget efficitur justo ante a ante. Ut at diam sed sapien rutrum finibus accumsan nec ex.\n\nPellentesque et leo vel neque vulputate fermentum non sed odio. Aenean eget facilisis erat, sed feugiat leo. Nam vel convallis libero. Morbi consequat ac est sit amet porta. Proin gravida accumsan turpis sed cursus. Pellentesque nulla ante, imperdiet at augue a, viverra rutrum eros. In hac habitasse platea dictumst. Nullam eu velit id elit sollicitudin sodales. Praesent consequat diam ac gravida tincidunt. Mauris porta pretium nisl et imperdiet. Phasellus viverra ipsum a enim molestie vulputate. Nulla odio augue, sagittis at aliquam a, gravida sed nunc. Quisque mattis gravida eros sed scelerisque. Aliquam enim nisi, pulvinar finibus risus in, tincidunt semper risus. Suspendisse varius arcu nibh, at vehicula risus tempor vitae. Etiam finibus aliquet justo imperdiet commodo.\n\nMauris sagittis varius tincidunt. Nunc volutpat vitae urna vitae varius. Nunc at massa risus. Proin nec sapien quis dolor auctor semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque dolor urna, consectetur et fermentum non, cursus vitae ipsum. Sed pretium, mauris eget cursus mollis, lacus dolor rutrum felis, sit amet ornare mi elit vel orci. Ut vitae congue lacus. In tellus sem, pretium mattis urna in, iaculis dictum nulla.\n\nNunc mauris leo, euismod et porta eu, scelerisque vitae purus. Donec vitae iaculis est, at cursus risus. Sed non sem libero. Etiam pellentesque ex et dui sagittis blandit sit amet et sapien. Donec lobortis consectetur viverra. Aliquam sit amet ante ultricies, ultrices ligula ac, lacinia ante. Donec in nunc purus. Pellentesque accumsan sodales tristique. Aliquam ac dolor venenatis sapien vestibulum efficitur at eu dui. Sed eget lectus sit amet libero consectetur vehicula.\n\nFusce ultrices non metus iaculis aliquet. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla imperdiet, est vel ultricies varius, lacus sapien ultricies metus, a cursus sapien neque et quam. Maecenas dictum venenatis justo et porta. Duis vehicula ex est. Ut ultrices scelerisque ipsum, ac fringilla nisi. Vivamus et mauris ut justo dictum pulvinar non ut ex. Phasellus ultrices sapien erat, ac dapibus nibh hendrerit a. Maecenas leo mauris, venenatis in elit interdum, malesuada pellentesque risus. Donec cursus iaculis mauris, in eleifend felis malesuada at. Vivamus a finibus elit.";
var currentPos = 0;
var studyChance = 0.25;//default
function loadText() {
    chrome.storage.sync.get(
    {
        "knowledgeText": knowledgeText,
        "study_chance": studyChance,
        "currentPos": currentPos
    }, 
    function(data) {
        console.log(data);
        studyChance = data.study_chance;
        if (data.knowledgeText != null){
            knowledgeText = data.knowledgeText;
        }
        currentPos = data.currentPos;
        makeEducational();
    });
}

loadText();

function isUserReadyToBeEducated(){
    console.log("checking with "+studyChance);
    return Math.random() < studyChance;
}

function getTextSample(length) {
    var text = "";
    var matches = knowledgeText.substring(currentPos).match(sentenceRegex);

    if (matches == null)
        return null;

    for (var i = 0; i < matches.length && i < length; i++) {
        text += matches[i].trim() + " ";
        currentPos += matches[i].length;
    }
    if (currentPos >= knowledgeText.length) currentPos = 0;

    chrome.storage.sync.set({
        "currentPos": currentPos
    }, null);

    console.log("sample: "+text);
    return text;
}
