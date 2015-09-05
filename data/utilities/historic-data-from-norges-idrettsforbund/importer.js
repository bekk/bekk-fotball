var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');

console.info("Things are about to get dirty...");

var BASE_URL = "http://wp.nif.no";

var inputData = {
  "orgId": 765744,
  "teamIds": [
    696999,
    723658,
    206867,
    211567
  ]
};

for (var i = 0; i < inputData.teamIds.length; i++) {
  var teamId = inputData.teamIds[i];
  var url = BASE_URL+"/PageCalendarTeamDetail.aspx?number=all&teamId="+teamId;

  request(url, function(error, response, html) {
    if(!error){
      var $ = cheerio.load(html);

      // Get all the rows in the result table
      $("#CalendarTeamDetail > div:nth-child(5) > table > tbody > tr > td:nth-child(3) > a").map(function(i,foo) {
          // Get the first URL address
          var matchUrl = BASE_URL + $(this).attr('href');

          request(matchUrl, function(error, response, html) {
            if(!error){
              var $$ = cheerio.load(html);

              var result = {
                'tournament':  $$('#ucMatchInformationDetail_linkTournament').text().trim(),
                'matchNumber':  $$('#ucMatchInformationDetail_hlMatchNumber').text().trim(),
                'matchDate':  $$('#ucMatchInformationDetail_lblDate').text().trim(),
                'matchTime':  $$('#ucMatchInformationDetail_lblTime').text().trim(),
                'referee':  $$('p:contains("Hoveddommer") > a').text().trim(),
                'round':  $$('#ucMatchInformationDetail_hlRoundName').text().trim(),
                'result':  $$('#ucMatchInformationDetail_lblResult').text().trim(),
                'arena':  $$('#ucMatchInformationDetail_hlArea').text().trim(),
                'homeTeam': $$('#ucMatchInformationDetail_hlHomeTeam').text().trim(),
                'awayTeam': $$('#ucMatchInformationDetail_hlAwayTeam').text().trim()
              };

               process.stdout.write(JSON.stringify(result, null, "\t")+",");
              //console.log(result);
            }
          });

      })
    }
  });
}

/*
request(url, function(error, response, html) {
  if(!error){
    var $ = cheerio.load(html);

    // Get all the rows in the result table
    $("div.wp_table_bg table.tablesorter tbody tr").map(function(i,foo) {
        // Get the first URL address
        matchUrlStream.write(
          $("a", this).first().attr("href")
        );
    })
  }
});


  osmosis
    .get(url)
    .find('#CalendarTeamDetail > div:nth-child(5) > table > tbody > tr > td:nth-child(3) a')
    .follow('@href')
    .set({
        'tournament':        '#ucMatchInformationDetail_linkTournament',
        'matchNumber':  '#ucMatchInformationDetail_hlMatchNumber',
        'matchDate':  '#ucMatchInformationDetail_lblDate',
        'matchTime':  '#ucMatchInformationDetail_lblTime',
        'referee':  'td:contains("Hoveddommer") > a',
        'round':  '#ucMatchInformationDetail_hlRoundName',
        'result':  '#ucMatchInformationDetail_lblResult',
        'arena':  '#ucMatchInformationDetail_hlArea',
        'homeTeam': '#ucMatchInformationDetail_hlHomeTeam',
        'awayTeam': '#ucMatchInformationDetail_hlAwayTeam'
    })
    .data(function(listing) {
        // do something with listing data
        console.log(listing);
    })

*/

/*
  696999, // Bekk B.I.L. - MEN 1 -- Charlie
  723658,	// Bekk B.I.L. - MEN.05 1 -- Leif, Charlie
  206867,	// Bekk 2.0 B.I.L. - MEN 2 -- Leif, Charlie
  211567, // Bekk B.I.L. - MEN.07 1 -- Charlie
*/
