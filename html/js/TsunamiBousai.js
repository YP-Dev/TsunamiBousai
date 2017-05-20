
(function (){
	var w = $(window).width();
	var h = $(window).height();

  var mapWidth=1000;
  var mapHeight=1000;

  document.write(
		'<div class="content" style="width:'+(w)+'px;height:'+(h-0)+'px;">'+
		'<div class="graph2016" style="width:'+mapWidth+'px;height:'+mapWidth+'px"><img src="./images/map1.jpg" style="width:'+mapWidth+'px;height:'+mapWidth+'px">'
	);
  document.write(
		'</div></div>'+
			'<div class="pre"></div>'+
			'<div class="after"></div>'
	);
/*  alert (((mapWidth-w)/2) + 'px');*/
  $(window).load(function(){
		$(".content").mCustomScrollbar({
			axis:"yx",
			scrollbarPosition:'inside',
			autoHideScrollbar:true,
			setLeft: ((mapWidth-w)/2) + 'px',
      setTop: '100px'
      ,
      callbacks:{
        onScroll:function(){
          console.log('Content scrolled...');
        }
      }


			/*setTop: ((mapHeight-h)/2) + 'px'*/
		});
	});
})();

/*
(function (){
	var w = $(window).width();
	var h = $(window).height();

	document.write(
		'<div class="hakoneResultsGraph" style="width:100%;height:'+(h-10)+'px;">'+
		'<div class="graph2016" style="width:630px">'
	);
	new HakoneResults({
		isSp : true,
		year: 2016,
		width: 450,
		mode : 'xml',
		PCprofPath : 'http://www.yomiuri.co.jp/sports/ekiden/2016/team/profile/',
		SPprofPath : 'http://sp.yomiuri.co.jp/sports/ekiden/2016/team/profile/',
		univLen : 21,
		univHStep : 27,
		univNameButtonW : 60,
		hideLatestTsusanTime : false
	});

	document.write(
		'</div></div>'
	);
	$(window).load(function(){
		$(".hakoneResultsGraph").mCustomScrollbar({
			axis:"yx",
			setLeft: (w - 590) + 'px',
			setTop: 0
		});
	});
})();
*/
