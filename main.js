var randomAddElement = function(element,searchElement,classname) {
  var news = $(element).find(searchElement);
  var random = getRandomInt(0,news.length-1);  
  news.eq(random).removeClass(classname);
};

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var demo = function(){
	var li = $('ul.wrapNew li');
	var length = li.length;

	for (var i =0; i<length; i++) {
		randomAddElement(li[i],'h6','hide');
	}
	randomAddElement('ul','li','hide-responsive');

};
demo();


// function demo(){
// 	var li = $('ul.wrapNew li');
// 	var length = li.length;

// 	for (var i =0; i<length; i++) {
// 		var x = $(li[i]).find('h6');
// 		var random = getRandomInt(0,(x.length)-1);
// 		$(x[random]).removeClass('hide');
// 	}

// }
// demo();




// for(var i=0; i<length; i++){
//     var u=li.eq(i);
//     var x=u.find('h6');
//     var random = Math.floor((Math.random() * x.length) + 1);
//     u.eq(random).removeClass('hide');
    // randomAddElement(u,x);
    // console.log(u.html());
    // console.log(x.length);
// }




// $('ul li').each(function(){
// 	// randomAddElement('li','h6');
	
// });

