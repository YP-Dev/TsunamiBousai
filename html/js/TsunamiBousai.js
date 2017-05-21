
(function (){
	var w = $(window).width();
	var h = $(window).height();

  var slideNum = 8;

  var mapWidth=1000;
  var mapHeight=1000;

  document.write(
		'<div class="content" style="width:'+(w)+'px;height:'+(h-0)+'px;">'+
		'<div class="contentInner" style="width:'+mapWidth+'px;height:'+mapWidth+'px"><img src="./images/map1.jpg" style="width:'+mapWidth+'px;height:'+mapWidth+'px">'
	);
  document.write(
		'</div></div>'+
			'<header></header>'+
			'<div class="plus"></div>'+
			'<div class="pre"><span>20110312</span></div>'+
			'<div class="after"><span>20170414</span></div>'+
			'<img src="./images/arw.png" class="arw">'
	);
/*  alert (((mapWidth-w)/2) + 'px');*/




  $(window).load(function(){
    $('.carousel,.carousel .viewport,.carousel a,.carousel .item')
      .css({width:w+'px'});

    $('.carousel .flipsnap')
        .css({width:(w * slideNum)+'px'});

    Flipsnap('.carousel .flipsnap', {
      /*distance: 230*/
    });

		$(".content").mCustomScrollbar({
			axis:"yx",
			scrollbarPosition:'inside',
			autoHideScrollbar:true,
			setLeft: ((mapWidth-w)/2) + 'px',
      setTop: ((mapHeight-h)/2) + 'px'
      ,
      callbacks:{
        whileScrolling:function(){
          /*console.log(this.mcs.top);*/

          var offset = {
            x : mapWidth/2 + this.mcs.left - w/2,
            y : mapHeight/2 + this.mcs.top - h/2
          }
          //console.log($('.content').find('.pre').length);
          $('.pre,.after')
            .css({
              'background-position-x': (-190 + offset.x*2 )+'px',
              'background-position-y': (-190 + offset.y*2 )+'px',
              'background-size': '500px'
            })
            ;






/*
          console.log('w:'+(mapWidth/2+this.mcs.left - w/2));
          console.log('h:'+(mapHeight/2+this.mcs.top - h/2));
          console.log('h:'+this.mcs.top+' '+mapHeight+' '+h + ' w:'+ this.mcs.left+' '+mapWidth+' '+w);
*/
          //h:0 1000 667 w:0 1000 375
          //h:-363 1000 667 w:-655 1000 375

        }
      }
			/*setTop: ((mapHeight-h)/2) + 'px'*/
		});
	});
})();
