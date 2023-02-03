const apiKey = "yHlL3BnAnm05Y3qa3ROr4iaSSxRxY7qF";
let queryURL;

const searchButton = $("#search-button");
const clearhButton = $("#clear-button");

searchButton.on('click', function(event) {
    event.preventDefault();
    let searchTermsEl = $("#search-terms").val().trim();
    let numberOfRecordsEl = parseInt($("#number-of-records").val().trim());
    
    let startEl = $("#start-year").val().trim();

    if (startEl) {
        startEl = startEl + "0101";
    }
    else {
        startEl = "18500101"
    }
    
    let endEl = $("#end-year").val().trim();
    if (endEl) {
        endEl = endEl + "1231";
    }
    else {
        endEl = moment().format("YYYYMMDD");
    }
    console.log(startEl);
    console.log(endEl);

    if (searchTermsEl) {
        queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermsEl}&api-key=${apiKey}&begin_date=${startEl}&end_date=${endEl}`;
        console.log(queryURL);
    }
    else {
        alert("Enter search terms");
    }

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        //if (response.ok) {
            console.log(response.response.docs.slice(0, numberOfRecordsEl));
        //}
        
    });
})