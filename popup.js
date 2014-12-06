window.onload = function() {

    chrome.storage.sync.get("study_chance",function(value){
    	if(isNaN(value.study_chance)){
    		value.study_chance = 0.25;
    	}
    	document.getElementById("study_slider").value = Math.floor(value.study_chance*100);
    	document.getElementById("percent_label").innerHTML = Math.floor(value.study_chance*100)+"%";
    });

    document.getElementById("study_slider").addEventListener("change", studySliderChanged, false);
    document.getElementById("study_slider").addEventListener("input", studySliderChanged, false);
}

function studySliderChanged(){
	var value = document.getElementById("study_slider").value;
	    chrome.storage.sync.set({"study_chance":value/100},null);
    document.getElementById("percent_label").innerHTML = value+"%";
}
