// load in the libraries needed
const express = require("express");
const app = express();
const port = 3000;
const pageviews = require("pageviews");
const fs = require("fs");

app.get("/", (req, res) => res.send("Hello World!"));

// get the number of page views for an array of "articles"
// change the start and end date using the properties below
app.listen(port, () => {
  pageviews
    .getPerArticlePageviews({
      articles: [
        "Mark_Harper",
        "Boris_Johnson",
        "Andrea_Leadsom",
        "Esther_McVey",
        "Matt_Hancock",
        "Michael_Gove",
        "Jeremy_Hunt",
        "Sajid_Javid",
        "Rory_Stewart",
        "Dominic_Raab"
      ], // Plural
      project: "en.wikipedia",
      start: new Date(new Date() - 60 * 24 * 60 * 60 * 1000), // YYYYMMDD string or Date object
      end: new Date(new Date() - 1 * 24 * 60 * 60 * 1000) // YYYYMMDD string or Date object
    })
    .then(function(result) {
      // write the result to a json file
      fs.writeFileSync(
        "./wiki-pageviews.json",
        JSON.stringify(result, null, 2)
      );
    })
    .catch(function(error) {
      console.log(error);
    });
});
