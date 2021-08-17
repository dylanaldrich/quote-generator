async function getQuote(query = "") {
    let quote = "";
    let author = "";
    let url = query.length ? `https://api.quotable.io/random?tags=${query}` : "https://api.quotable.io/random";
    
    await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.statusCode === 404) {
                quote = "Sorry, no matches on that tag."
                author = "The Management"
            } else {
                quote = data.content;
                author = data.author;
            }
        });

    document.getElementById("quote-box").innerHTML = quote + "<br /> -" + author;
    document.getElementById("search").value = "";
}

function getQuery() {
    let query = document.getElementById("search").value;
    query.length ? getQuote(query) : alert("Can't search for nothing.");
}