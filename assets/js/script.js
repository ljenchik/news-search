const apiKey = 'yHlL3BnAnm05Y3qa3ROr4iaSSxRxY7qF';

const searchButton = $("#search-button");
const clearhButton = $("#clear-button");

searchButton.on('click', function(event) {
    let searchTermsEl = $("#search-terms").val().trim();
    console.log(searchTermsEl);
    
    let numberOfRecordsEl = $("#number-of-records").val().trim();
    let startEl = $("#start-year").val().trim();
    let endEl = $("#end-year").val().trim();

    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermsEl}&api-key=${apiKey}`;

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response.response.docs);
    });
})