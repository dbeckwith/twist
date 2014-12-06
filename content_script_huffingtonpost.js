function makeEducational(){
	var paragraphs = document.getElementById("mainentrycontent").getElementsByTagName("p");
	for(var p = 0; p < paragraphs.length; p++){
		if(isUserReadyToBeEducated()){
			var sentenceCount = paragraphs[p].innerHTML.split(".").length- 1;	
			var sample = getTextSample(sentenceCount);
			paragraphs[p].innerHTML = sample;
		}
	}
}