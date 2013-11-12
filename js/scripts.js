// JavaScript Document
   
	
	
$(document).ready(function(){
	
	

	
	
	
	
$('.photoset-grid').photosetGrid({
    layout: '33',
    width: '100%',
    gutter: '0px',
    highresLinks: true,
    lowresWidth: 300,
    rel: 'gallery-01',

    onInit: function(){},
    onComplete: function(){

        $('.photoset-grid').css({
            'visiblity': 'visible'
        });

    }
});
$('.photoset-grid2').photosetGrid({
    layout: '111',
    width: '100%',
    gutter: '0px',
    highresLinks: true,
    lowresWidth: 300,
    rel: 'gallery-01',

    onInit: function(){},
    onComplete: function(){

        $('.photoset-grid').css({
            'visiblity': 'visible'
        });

    }
});


$('.photoset-grid3').photosetGrid({
    layout: '1',
    width: '100%',
    gutter: '0px',
    highresLinks: true,
    lowresWidth: 300,
    rel: 'gallery-01',

    onInit: function(){},
    onComplete: function(){

        $('.photoset-grid').css({
            'visiblity': 'visible'
        });

    }
});

$('.photoset-grid4').photosetGrid({
    layout: '11',
    width: '100%',
    gutter: '0px',
    highresLinks: true,
    lowresWidth: 300,
    rel: 'gallery-01',

    onInit: function(){},
    onComplete: function(){

        $('.photoset-grid').css({
            'visiblity': 'visible'
        });

    }
});


//lightbox
 $('#imageBoxes').pinbox().hide(0).fadeIn(1000);

});