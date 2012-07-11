chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
	if(/http:\/\/www\.google\.com.*/.test(details.url)){
		httpsUrl=details.url.replace(/http/,'https');
		chrome.tabs.update({url:httpsUrl});
	}	
});
chrome.webNavigation.onCompleted.addListener(function(details) {
	chrome.pageAction.show(details.tabId);
});
