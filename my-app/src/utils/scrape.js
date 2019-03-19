var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function() {
  
  return axios.get("https://www.privatelabelextensions.com/natural-hair-tips/").then(function(response) {
    var $ = cheerio.load(response.data);
    console.log("scraping");
  
    var hairTips = [];
    
    $(".vc_col-sm-12").each(function(i, element) {
    
      var tip = $(this)
        .find('h3')
        .text()
        .trim();
        

      // Grab the URL of the article
      var summary = $(this)
        .find("p")
        .text()
        .trim();
       


        var hairCareTips = {
          tips: tip,
          summary: summary,
        };

        hairTips.push(hairCareTips);
      })
      
      
      return hairTips;
      
    });
    
};


module.exports = scrape;