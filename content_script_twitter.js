console.log("Running TWIST on twitter");

var tweets = document.getElementsByClassName("ProfileTweet-text");

for (var i = 0; i < tweets.length; i++) {
    tweets[i].innerText = getTextSample(3);
}
