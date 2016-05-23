$(document).ready(function() {
    $('input[name=color]').change(function() {
		var value = $(this).val().toString();
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {'value': value}, function(response) {});
		});
	});
});
