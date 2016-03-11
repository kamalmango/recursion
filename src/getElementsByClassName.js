// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element){
  var results = [];
  element = element || document.body;

  for (var i = 0; i < element.classList.length; i++) {
    if (element.classList[i] === className) {
      results.push(element);
    }
  }
 
  for (var i = 0; i < element.children.length; i++) {
    results = results.concat(getElementsByClassName(className, element.children[i]));
  }
  
  return results;
};

