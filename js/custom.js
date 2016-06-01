(function($){
  $(function(){
    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

(function(window){
  'use strict';
    function define_dmLib(){
        var dmLib = {};
        dmLib.greet = function(){
            alert("Hello from dmLib.");
        }
        return dmLib;
    }

    if(typeof(dmLib) === 'undefined'){
        window.dmLib = define_dmLib();
    }
    else{
        console.log("Library dmLib already defined.");
    }
})(window);

function selectBackground(method, max, root, type){
  var hour = new Date().getHours();
  var num = max;
  var rnd = ("00"+ Math.floor(Math.random() * num)).slice(-2);

  var el = document.getElementById("index-banner");
  var pic = "url(" + root + rnd + "." + type + ")";
  return pic;

};

var currentTime = new Date().getHours();
var el = document.getElementById("index-banner");
//var pic = "url(" + "../img/tod/" + currentTime + ".jpg" + ")";
var rnd = Math.floor(Math.random() * 10);
console.log(rnd);
console.log(("00"+ Math.floor(Math.random() * 10)).slice(-2));
var pic = "url(" + "../img/rnd/0" + rnd + ".jpg" + ")";
pic = selectBackground("abc",5, "../img/rnd/", "jpg");
console.log(pic);
el.style.backgroundImage = pic;
dmLib.greet();
