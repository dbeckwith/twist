function subRedditReplacement() {
	var childrenList = document.getElementById("siteTable").children;

	for (var i = 0; i < childrenList.length; i++) {
		var childList = childrenList[i].children;
		for (var j = 0; j < childList.length; j++) {
			if ((/(^|\s)entry($|\s)/).test(childList[j].className)) {
				var aChildList = childList[j].getElementsByTagName("a");
				for (var k = 0; k < aChildList.length; k++) {
					if ((/(^|\s)title($|\s)/).test(aChildList[k].className)) {
						if (isUserReadyToBeEducated()) {
							aChildList[k].innerText = getTextSample(1);
						}
					}
				}
			}
		}
	}
}

function commentReplacement() {
	var childrenList = document.getElementsByTagName("div");

	for (var i = 0; i < childrenList.length; i++) {
		if ((/(^|\s)entry($|\s)/).test(childrenList[i].className)) {
			var childList = childrenList[i].getElementsByClassName("md");
			for (var j = 0; j < childList.length; j++) {
				if (isUserReadyToBeEducated()) {
					childList[j].innerText = getTextSample(3);
				}
			}
		}
	}
}

function makeEducational(){
	if ((/http:\/\/www\.reddit\.com\/r\/.+?\/comments\/.+\//).test(document.URL)) {
		commentReplacement();
	} else {
		subRedditReplacement();
	}
}
