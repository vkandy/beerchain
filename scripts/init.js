$("#btnVerify").click(function(e) {
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
	})
	.catch(function(e) {
		console.error(e);
	});

	let scanner = new Instascan.Scanner({video: document.getElementById('cameraVerify')});
	scanner.addListener('scan', function(assetId) {
		$.getJSON("https://network.ambrosus.com/assets/find/BeerCode:" + assetId)
		.done(function(data) {
			console.log(data[0]);
			$('#name').html(name)
			$.mobile.changePage("#asset", {transition: "slide"});
			scanner.stop();
		});
	});
});

$("#btnClaim").click(function(e) {
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
	})
	.catch(function(e) {
		console.error(e);
	});

	let scanner = new Instascan.Scanner({video: document.getElementById('cameraClaim')});
	scanner.addListener('scan', function(assetId) {
		$.getJSON("https://network.ambrosus.com/assets/find/BeerCode:" + assetId)
		.done(function(data) {
			console.log(data[0]);
			/* $.mobile.changePage("#asset", {transition: "slide"}); */
			scanner.stop();
		});
	});
});
	  
	  