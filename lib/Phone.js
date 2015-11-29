module.exports = Phone;

function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  return this.phoneNumber + " calls " + phoneNumber;
};



