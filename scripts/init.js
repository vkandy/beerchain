$(".btnVerify").click(function(e) {
	Scan('verify')
});

$(".btnClaim").click(function(e) {
	Scan('claim')
});

var thisPage = location.hash;
            if (thisPage != '') {
                location.href=""
            }
	  
function Scan(codeType){
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

	let scanner = new Instascan.Scanner({video: document.getElementById('camera')});
	scanner.addListener('scan', function(assetId) {
		$.getJSON("https://network.ambrosus.com/assets/find/BeerCode:" + assetId)
		.done(function(data) {
			console.log(data[0]);
			if(!data[0])alert('No data[0]')
			if(!data[0].content.data)alert('No data[0].content.data')
			var data = data[0].content.data
			if(codeType=="verify"){
				Verify(data)
			}else if(codeType=="claim"){
				Claim(data)
			}
		
		
			scanner.stop();
		});
	});
}	

function Claim(data){
	
		for(var i in data){
				if(i=="identifiers")continue
				$('#BeerInfo').append('<li class="ui-field-contain">'+
            '<label>'+i+'</label>'+
            '<span>'+data[i]+'</span>'+        
            '</li>')
			}
			
			
			$.mobile.changePage("#asset", {transition: "slide"});
	
}  

function Verify(data){
	
		for(var i in data){
				if(i=="identifiers")continue
				$('#BeerInfo').append('<li class="ui-field-contain">'+
            '<label>'+i+'</label>'+
            '<span>'+data[i]+'</span>'+        
            '</li>')
			}
			
			
			$.mobile.changePage("#asset", {transition: "slide"});
	
}