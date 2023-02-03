const apiKey = 'yHlL3BnAnm05Y3qa3ROr4iaSSxRxY7qF';
let queryURL;

const searchButton = $("#search-button");
const clearhButton = $("#clear-button");

searchButton.on('click', function(event) {
    let searchTermsEl = $("#search-terms").val().trim();
    let numberOfRecordsEl = parseInt($("#number-of-records").val().trim());
    let startEl = $("#start-year").val().trim();

    if (startEl)
    startEl = startEl+"0101"
    let endEl = $("#end-year").val().trim();
    endEl = endEl + "1231"

    if (searchTermsEl) {
        queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermsEl}&api-key=${apiKey}&begin_date=${startEl}&end_date=${endEl}`;
    }
    else {
        alert("Enter search terms");
    }

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        if (response.ok) {
            console.log(response.response.docs.slice(0, numberOfRecordsEl));
        }
        
    });
})