var GameConsole = require("./GameConsole.js");
var extend = require("./extend.js");
var WebBrowser = require("./WebBrowser.js");
module.exports = NintendoDS;


function NintendoDS(){

}
extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

GameConsole.call(NintendoDS.prototype, "Nintendo DS");
WebBrowser.call(NintendoDS.prototype, "Nintendo DS");

// function extend(NintendoDS, GameConsole){
//   for (var k in source){
//     if (source.hasOwnProperty(k)){
//       destination[k] = source[k];
//     }
//   }
//     return destination;
// }
