// RCL background.js
// Based on Google Sample

// Open RCL link to add to list
function genericOnClick(info, tab) {
if (info.linkUrl == null){ // Content has no source sending page URL
	//Push URL to RCL
	var frame = document.createElement('iframe');
	frame.sandbox = 'allow-scripts';
	//URL must be encoded BEFORE passing to RCL add.php
	frame.src = 'http://rightclicklist.com/add.php?url='+encodeURIComponent(tab.url);
	document.body.appendChild(frame);
}

else{ //Content has a URL
	//Push URL to RCL
	var frame = document.createElement('iframe');
	frame.sandbox = 'allow-scripts';
	frame.src = 'http://rightclicklist.com/add.php?url='+info.linkUrl;
	document.body.appendChild(frame);
}
  
}

// Menu Item Create - Taken from Chrome Sample menu item
var contexts = ["page","link","image","video","audio"]; //Sources to make menu item for
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Add this " + context +" to RCL";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": genericOnClick});
}
