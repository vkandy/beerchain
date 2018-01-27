  $("#btnVerify").click(function(e){
	/*   e.preventDefault(); */
	  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', function (content) {
		console.log(content)
		retrieveAsset(content)
      });
	 
      Instascan.Camera.getCameras().then(function (cameras) {
		   
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          swal({
			  position: 'top-end',
			  type: 'warning',
			  title: 'No camera found'
			})
        }
      }).catch(function (e) {
        console.error(e);
      });
	  
  })
	  
	  