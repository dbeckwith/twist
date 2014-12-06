console.log("Running TWIST on twitter");


if (/^https:\/\/twitter\.com\/(i\/discover)?$/.test(document.URL)) {
    var tweets = document.getElementsByClassName("js-tweet-text tweet-text");
}
else {
    var tweets = document.getElementsByClassName("ProfileTweet-text");
}

for (var i = 0; i < tweets.length; i++) {
    tweets[i].innerText = getTextSample(3);
}
