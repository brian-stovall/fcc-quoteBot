document.addEventListener('DOMContentLoaded', function () {
	var grab = document.getElementById.bind(document);
	var getQuote = grab('getQuote');
	var quoteBox  = grab('quoteBox');
	var authBox = grab('authBox');
	var tweetQuote = grab('tweetQuote');
	/*we'll pre-shuffle a copy of our array of quotes so that we get
	randomized quotes but won't see the same quote twice until
	we've seen them all*/
	var quoteBank = shuffleArr(quotes.slice());

	getQuote.addEventListener('click', () => {
		//re-shuffle and make a new one if we're out
		if (!quoteBank.length) quoteBank=shuffleArr(quotes.slice());
		var currentQuote = quoteBank.pop();
		quoteBox.textContent = currentQuote.quote;
		authBox.textContent = currentQuote.author;
	});

	tweetQuote.addEventListener('click', () => {
		var windowFeatures = 'menubar=yes,location=yes,status=yes,height='+
			Math.floor(screen.height/2)+',width='+screen.wigth;
		var textIntent ='text=' + quoteBox.textContent + '%20-' + authBox.textContent;
		var targetHtml ='https://twitter.com/intent/tweet?url=http://hoppenmaus.github.io/fcc-quoteBot/'
			+textIntent;
		window.open(targetHtml, 'Tweet Window', windowFeatures);
	});
});

//Knuth shuffle for arrays
function shuffleArr(arr) {
	var curIdx = arr.length - 1;
	var swap;
	var randIdx;

	while (curIdx !== 0){
		randIdx = Math.floor(Math.random() * (curIdx + 1));
		swap = arr[curIdx];
		arr[curIdx] = arr[randIdx];
		arr[randIdx] = swap;
		curIdx--;
	}
		return arr;
};
