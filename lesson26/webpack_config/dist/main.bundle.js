!function(){function n(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}console.log("hello word");var e=function(n){console.log("hello ".concat(n))};e("asdad"),e("Test"),document.querySelector("#app").innerHTML="Привет мир",new(function(){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.__name=n}var o,t;return o=e,(t=[{key:"printName",value:function(){console.log(this.__name)}}])&&n(o.prototype,t),e}())("John").printName()}();