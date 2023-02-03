const apiKey = "yHlL3BnAnm05Y3qa3ROr4iaSSxRxY7qF";
let queryURL;

const searchButton = $("#search-button");
const clearhButton = $("#clear-button");

searchButton.on("click", function (event) {
  event.preventDefault();
  let searchTermsEl = $("#search-terms").val().trim();
  let numberOfRecordsEl = parseInt($("#number-of-records").val().trim());

  let startEl = $("#start-year").val().trim();

  if (startEl) {
    startEl = startEl + "0101";
  } else {
    startEl = "18500101";
  }

  let endEl = $("#end-year").val().trim();
  if (endEl) {
    endEl = endEl + "1231";
  } else {
    endEl = moment().format("YYYYMMDD");
  }
  console.log(startEl);
  console.log(endEl);

  if (searchTermsEl) {
    queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTermsEl}&api-key=${apiKey}&begin_date=${startEl}&end_date=${endEl}`;
    console.log(queryURL);
  } else {
    alert("Enter search terms");
  }

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //if (response.ok) {
    const data = response.response.docs.slice(0, numberOfRecordsEl);
    console.log(response.response.docs.slice(0, numberOfRecordsEl));
    //}
    let displayList = $("#display-list");
    for (let i = 0; i < data.length; i++) {
      let listEl = $("<li>");


      let dateEl = moment(data[i].pub_date).format('LL');
      let yearEl = $("<p>").text(dateEl).addClass("p-2");

      let headlineEl = $("<h5>").text(data[i].headline.main).addClass("card-header");

      let pEl = $("<p>").text(data[i].abstract).addClass("p-2");
      let urlEl = $("<a>").attr('href', data[i].web_url).text(data[i].web_url).addClass("p-2");

      listEl.append(headlineEl);
      listEl.append(yearEl);
      listEl.append(pEl);
      listEl.append(urlEl).addClass("card");

      displayList.append(listEl);
    }
  });
});
