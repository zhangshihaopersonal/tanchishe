
$(function(){
for (var i = 0; i <20; i++) {
 for (var j = 0; j <20; j++) {
 	
 
$('<div>')
.addClass('block')
.appendTo('.box')
.attr('id',i+'-'+j)
.css('backgroundColor','rgba(0,0,0,0)')

};
};

var she=[
{x:0,y:0},
{x:0,y:1},
{x:0,y:2},
];

var shiwu={
	x:0,y:8
 };


var dict={
'0-0':true,
'0-1':true,
'0-2':true
}

var fangshiwu=function(){
  do{
    var x=Math.floor(Math.random()*20);
    var y=Math.floor(Math.random()*20);

  }while(dict[x+'-'+y]);
   zhaodian({x:x,y:y}).addClass('shiwu');
   return({x:x,y:y});
}


var zhaodian=function(dian){
  return $('#'+dian.x+'-'+dian.y);
}
var init=function(){
	for (var i = 0; i < she.length; i++) {
		zhaodian(she[i]).addClass('she')
	};
	    zhaodian(shiwu).addClass('shiwu')
}
init();


fangxiang="you";
move=function(){
	var jiutou=she[she.length-1];
	if(fangxiang==='you'){
     var xintou={x:jiutou.x,y:jiutou.y+1};
	}
	if(fangxiang==='zuo'){
		var xintou={x:jiutou.x,y:jiutou.y-1};
	}
	if(fangxiang==='shang'){
     var xintou={x:jiutou.x-1,y:jiutou.y};
	}
	if(fangxiang==='xia'){
		var xintou={x:jiutou.x+1,y:jiutou.y};
	}
    if(xintou.x > 19 || xintou.x < 0 || xintou.y > 19 || xintou .y < 0){
         $('.over').css({opacity:1})
         .animate({
          width:400,
          height:436
         })

      zanting();
      return;
    }
    if(dict[xintou.x+'-'+xintou.y]){
    	 $('.over').css({opacity:1})
         .animate({
          width:400,
          height:436
         })
    	zanting();
       return;
    }
    if(xintou.x===shiwu.x && xintou.y===shiwu.y){
    	zhaodian(shiwu).removeClass('shiwu');
    	shiwu=fangshiwu();
    }else{
      var weiba=she.shift();
      delete dict[weiba.x+'-'+weiba.y]
      zhaodian(weiba).removeClass('she');
    }
    she.push(xintou);
    dict[xintou.x+'-'+xintou.y]=true;
    zhaodian(xintou).addClass('she');

}

var timerId;
kaishi=function(){
  clearInterval(timerId)
  timerId=setInterval(move,100);
}
zanting=function(){
clearInterval(timerId);
}

$(document).on('click',kaishi);
$(document).on('keydown',function(e){
  e.preventDefault();
var biao={
  'zuo':37,
  'shang':38,
  'you':39,
  'xia':40
};
if(Math.abs(e.keyCode-biao[fangxiang])===2){
  return;
}
if(e.keyCode===37){
   fangxiang="zuo";
}
if(e.keyCode===38){
  fangxiang="shang";
}
if(e.keyCode===39){
  fangxiang="you";
}
if(e.keyCode===40){
  fangxiang="xia";
}


})



})