function makeEducational(){
	var article = document.getElementById("article_body");
	if(article == null){
		article = document.getElementById("mainentrycontent");
	}
	var paragraphs = article.getElementsByTagName("p");
	for(var p = 0; p < paragraphs.length; p++){
		if(isUserReadyToBeEducated()){
			var sentenceCount = paragraphs[p].innerHTML.split(".").length- 1;	
			var sample = getTextSample(sentenceCount);
			paragraphs[p].innerHTML = sample;
			console.log("YAYAYAYAYAAYAYA" + sample);
		}
	}
}