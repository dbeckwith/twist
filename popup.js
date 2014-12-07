window.onload = function() {

    chrome.storage.sync.get("study_chance",function(value){
    	if(isNaN(value.study_chance)){
    		value.study_chance = 0.25;
    	}
        value = Math.floor(value.study_chance*100);
    	document.getElementById("study_slider").value = value;
    	document.getElementById("percent_label").innerHTML = value+"%";
    	value = 100-value;
    	if(value == 100)value = 99; 
        document.getElementById("logo-img").src = "img/logo/logo" + value + ".jpg";
    });

    document.getElementById("study_slider").addEventListener("change", studySliderChanged, false);
    document.getElementById("study_slider").addEventListener("input", studySliderChanged, false);
}

function studySliderChanged() {
	var value = document.getElementById("study_slider").value;
    chrome.storage.sync.set({"study_chance":value/100},null);
    document.getElementById("percent_label").innerHTML = value+"%";
    value = 100-value;
    if(value == 100)value = 99;
    document.getElementById("logo-img").src = "img/logo/logo" + value + ".jpg";
}
