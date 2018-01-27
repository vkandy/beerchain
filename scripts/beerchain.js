function retrieveAsset(assetId) {
	$.getJSON("https://network.ambrosus.com/assets/find/BeerCode:" + assetId)
	.done(function(data) {
		console.log(data)
	});
}