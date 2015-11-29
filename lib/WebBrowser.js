module.exports = WebBrowser;

function WebBrowser(){
  this.open = function(url){
    return "Browsing to " + url;
  };
}