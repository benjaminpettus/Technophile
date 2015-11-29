var Phone = require("./Phone.js");
var Tablet = require("./Tablet.js");
var GameConsole = require("./GameConsole.js");
var WebBrowser = require("./WebBrowser.js");
var extend = require("./extend.js");

module.exports = SmartPhone;

function SmartPhone(){
  
}
  extend(SmartPhone.prototype, Phone.prototype);
  extend(SmartPhone.prototype, Tablet.prototype);
  extend(SmartPhone.prototype, GameConsole.prototype);
  extend(SmartPhone.prototype, WebBrowser.prototype);

  Phone.call(SmartPhone.prototype, "Smart Phone");
  Tablet.call(SmartPhone.prototype, "Smart Phone");
  GameConsole.call(SmartPhone.prototype, "Smart Phone");
  WebBrowser.call(SmartPhone.prototype, "Smart Phone");
