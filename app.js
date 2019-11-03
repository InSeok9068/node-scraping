const cheerio = require("cheerio-httpcli");
const request = require("request");

const url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

cheerio.fetch(url, {}, function(err, $, res, body) {
  if (err) {
    console.log("Error:", err);
    return;
  }
  $(".list_ranking .title a").each(function(idx) {
    console.log(idx + 1 + " : " + $(this).attr("title"));
  });
});
