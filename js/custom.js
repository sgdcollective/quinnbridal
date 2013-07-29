$(document).ready(function() {
	checkURL();

	//attaching links 
    links = $('#nav a');
    
    links.click(function(e){
    	checkURL(this.hash);
        e.preventDefault();
    });

});

var contentDiv = $('#page');
var lasturl = "";

function checkURL(hash){
	if(!hash) hash=window.location.hash;	

    if(hash != lasturl)	 
    {
        lasturl=hash;	
        loadPage(hash);	
    }
}

function loadPage(url){
	url = url.replace('#','');
	filename = url + '.php';

	$('#loading').css('visibility','visible');
	window.location.hash = url;

    contentDiv.load(filename, function() {
    	if(url == "home"){
    		$('html').css('background', 'url("img/quinn-visual-01.jpg") no-repeat center center fixed');
    		$('html').css('background-size', 'cover');
    	}else{
    		$('html').css('background', 'none');
    	}
    });
}





    	
        