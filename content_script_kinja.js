function makeEducational(){
	var post = document.getElementsByClassName("post-content")[0];
	var paragraphs = post.getElementsByTagName("p");
	var titles = post.getElementsByTagName("h3");
	console.log(paragraphs);
	var items = Array();
	for(var i = 0; i < paragraphs.length;i++){
		items.push(paragraphs[i]);
	}
	for(var i = 0; i < titles.length;i++){
		items.push(titles[i]);
	}
	for(var p = 0; p < items.length; p++){
		console.log("-> "+items[p]);
		if(items[p].hasAttribute("data-textannotation-id") && !items[p].classList.contains("has-media") && isUserReadyToBeEducated()){
			var sentenceCount = items[p].innerHTML.split(".").length- 1;
			if(sentenceCount < 1 || items[p].tagName == "H3"){
				sentenceCount = 1;
			}
			var sample = getTextSample(sentenceCount);
			items[p].innerHTML = sample;
		}
	}
}