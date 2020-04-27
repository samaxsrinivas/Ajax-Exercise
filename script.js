const app = {

    nyTimesArticles: [],

    initialize: function() {
        $('.listPopularArticles').click(function() {
            app.fetchPopularArticles();
        });

    },

    makeHTML: function() {
        var theHTML = '';
        for (var i = 0; i < app.nyTimesArticles.length; i++) {
            theHTML += "<div class='popularArticles'>";
            theHTML += "<h3>" + app.nyTimesArticles[i].title + "</h3>";
            theHTML += "<h5>" + app.nyTimesArticles[i].byline + "</h5>";
            theHTML += "<p>" + app.nyTimesArticles[i].abstract + "</p>";
            theHTML += "<a href=" + app.nyTimesArticles[i].url + ">" + "</a>";
            theHTML += "<p class='links'>" + app.nyTimesArticles[i].url + "</p>";
            theHTML += "</div>";
        }
        $('.container').html(theHTML);
    },
    fetchPopularArticles: function() {
        var yourKey = 'your API Key';
        var NYTarticle = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key='
        var url = NYTarticle + yourKey;
        // console.log(url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            error: function(err) {
                console.log("Uh oh...");
                console.log(err);
            },
            success: function(data) {
                // console.log(data);
                app.nyTimesArticles = data.results;
                app.makeHTML(data);
            }
        })
    },

}