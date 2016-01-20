document.addEventListener('DOMContentLoaded', function () {
	var grab = document.getElementById.bind(document);
	var getQuote = grab('getQuote');
	var quoteBox  = grab('quoteBox');
	var authBox = grab('authBox');
	getQuote.addEventListener('click', () => {
		var entry = quotes[Math.floor(Math.random() * quotes.length)];
		quoteBox.textContent = entry.quote;
		authBox.textContent = entry.author;
	});
});
