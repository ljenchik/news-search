
const searchButton = $("#search-button");
const clearhButton = $("#clear-button");

searchButton.on('click', function(event) {
    let searchTermsEl = $("#search-terms").val().trim().toString();
    console.log(searchTermsEl);
    let numberOfRecordsEl = $("#number-of-records").val().trim();
    let startEl = $("#start-year").val().trim();
    let endEl = $("#end-year").val().trim();

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTermsEl +
    + "&api_key=DtRjFGARJtsY8PTXWLRt0AUqlNkHqzD0";


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        let results = response.data;
        console.log(results)
    });
})