

document.addEventListener('DOMContentLoaded', function () {
	initListener();
	
});


function switchTab(s) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
	//console.log(s);
    document.getElementById('div'+s.innerText).style.display = "block";  
}


function initListener()
{
	initTabPanel();	
	initBase64Panel();
	initHexPanel();
} 

function initTabPanel()
{
	var buttonList= document.getElementsByClassName("w3-bar-item w3-button");
	
	//console.log(buttonList);
	for (i = 0; i < buttonList.length; i++) { 
		var b = buttonList[i];
		 b.addEventListener('click', function() {
				switchTab(this);
			});
	}   	
}

function initBase64Panel()
{
	var  btnBase64Encode= document.getElementById('btnBase64Encode');
	var  btnBase64Decode= document.getElementById('btnBase64Decode');
	btnBase64Encode.addEventListener('click', function() {
				document.getElementById('txtDecode').value= Base64.encode(document.getElementById('txtEncode').value);
	});
	
	btnBase64Decode.addEventListener('click', function() {
				document.getElementById('txtEncode').value= Base64.decode(document.getElementById('txtDecode').value);
	});
}


function initHexPanel()
{
	var  btnDecCon= document.getElementById('btnDecCon');
	var  btnHexCon= document.getElementById('btnHexCon');
	btnDecCon.addEventListener('click', function() {
				document.getElementById('txtHex').value= parseInt(document.getElementById('txtDec').value).toString(16);
	});
	
	btnHexCon.addEventListener('click', function() {
				document.getElementById('txtDec').value= parseInt(document.getElementById('txtHex').value,16);
	}); 
}
 
 
