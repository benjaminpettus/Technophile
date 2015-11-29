var Watch = require("./Watch.js");
var extend = require("./Watch.js");
var Tablet = require("./Tablet.js");

module.exports = SmartWatch;

function SmartWatch(){
  
}
  Watch.call(SmartWatch.prototype, "Smartwatch");
  Tablet.call(SmartWatch.prototype, "SmartWatch"); 