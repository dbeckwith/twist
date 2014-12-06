function makeEducational() {
    var posts = document.getElementsByClassName("userContent");

    for (var i = 0; i < posts.length; i++) {
        if (isUserReadyToBeEducated()) {
            posts[i].innerHTML = getTextSample(3);
        }
    }
}
