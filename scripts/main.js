var deck = bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true
});


var start = function() {
  deck.next();
  startInterval();
}

var startInterval = function() {

  setInterval(function(){
    deck.next();
    document.getElementById('timer').innerHTML = -1;
  }, 1000 * 20)

  var counter = setInterval(function(){
    document.getElementById('timer').innerHTML = parseInt(document.getElementById('timer').innerHTML) + 1
  }, 1000)
}


if(window.location.hash != '#1') {
  startInterval();
}



// (function preloadBackgroundImages() {

//   var matches, image,
//     forEach = function(arrayLike, fn) {
//       [].slice.call(arrayLike, 0).forEach(fn);
//     };

//   forEach(document.styleSheets, function(sheet) {
//     forEach(sheet.rules, function(rule) {
//       if (rule.style && rule.style.backgroundImage) {
//         matches = rule.style.backgroundImage.match(/url\((.*)\)/);
//         if (matches) {
//           image = new Image();
//           image.src = matches[1];
//         }
//       }
//     });
//   });

// }());
