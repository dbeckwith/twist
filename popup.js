window.onload = function() {

    chrome.storage.sync.get("study_chance",function(value){
    	if(isNaN(value.study_chance)){
    		value.study_chance = 0.25;
    	}
    	document.getElementById("study_slider").value = Math.floor(value.study_chance*100);
        updateLabelAndImage();
    });

    document.getElementById("study_slider").addEventListener("change", saveSliderValue, false);
    document.getElementById("study_slider").addEventListener("input", updateLabelAndImage, false);
}

function saveSliderValue() {
    var value = document.getElementById("study_slider").value;
    chrome.storage.sync.set({"study_chance":value/100},null);
}

function updateLabelAndImage() {
    var value = document.getElementById("study_slider").value;
    document.getElementById("percent_label").innerHTML = value+"%";
    value = 100-value;
    if(value == 100)value = 99;
    document.getElementById("logo-img").src = "img/logo/logo" + value + ".jpg";
}
