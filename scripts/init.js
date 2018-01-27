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
			if(!data[0])alert('No data[0]')
			if(!data[0].content.data)alert('No data[0].content.data')
			var ds = data[0].content.data
			for(var i in ds){
				if(i=="identifiers")continue
				$('#BeerInfo').append('<li class="ui-field-contain">'+
            '<label>'+i+'</label>'+
            '<span>'+ds[i]+'</span>'+        
            '</li>')
			}
			
			
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
	  
	  