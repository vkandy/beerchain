$("#btnVerify").click(function(e) {
	let scanner = new Instascan.Scanner({video: document.getElementById('preview')});
	scanner.addListener('scan', function(assetId) {
		$.getJSON("https://network.ambrosus.com/assets/find/BeerCode:" + assetId)
		.done(function(data) {
			console.log(data[0].content);
			$.mobile.pagecontainer("change", "#asset", {transition: "slide"});
		});
	});

	Instascan.Camera.getCameras().then(function(cameras) {
		if(cameras.length > 0) {
			scanner.start(cameras[0]);
		} else {
			swal({
				position: 'top-end',
				type: 'warning',
				title: 'No camera found'
			})
		}
	}).catch(function(e) {
		console.error(e);
	});

});
	  
	  