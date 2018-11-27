'use strict';

/*
 * COOKIE HANDLING
 */

// hide the cookie info bar
function hide(obj) {
    var el = document.getElementById(obj);
        el.style.display = 'none';
}

// set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

// handle the cookie bar
function handleCookie(i){
    document.getElementById(i).style.display = 'none';
    setCookie("cookieConsent", true, 100);
}

/*
 * MAILCHIMP HANDLING
 */
// send request to mailchimp
function toMailchimp(t){

    // hide buttons
    var buttons = document.getElementsByTagName('input');
    for (var i = 0; i < buttons.length; i++) {
        if(buttons[i].getAttribute("type")== "button"){
            buttons[i].style.display = "none";
        }
    }

    // send the data through
    function sendData(postData, callback) {

        $.ajax({
            type:       "POST",
            url:        "https://us-central1-semi-186012.cloudfunctions.net/mailchimp",
            data:       postData,
            dataType:   "json",
            cache:      false,
            success:    function(response) {
                console.log(response)
            }
          })
          .done(function(){
            callback()
          })
    }

    // get the value of ...
    function getVal(i){
        var elVal = document.getElementsByName(i)
        if(elVal.length === 0){
            return null
        } else {
            return elVal[0].value
        }
    }

    // return to url
    function returnTo(){
        var protocol = location.protocol;
        var slashes = protocol.concat("//");
        return slashes.concat(window.location.hostname + ":" + window.location.port);
    }

    // get all fields
    var formFields = {
        "EMAIL"     : getVal("EMAIL"),
        "NAME"      : getVal("NAME"),
        "PRODUCT"   : getVal("PRODUCT"),
        "MESSAGE"   : getVal("MESSAGE"),
        "TYPE"      : t,
        "RETURN"    : returnTo
    }

    sendData(formFields, function(){
        // sad but true, timeout to guarantee a success
        setTimeout(function(){
            window.location.href = "/thank-you/?response-type=" + t + "&product=" + getVal("PRODUCT");
        }, 1250);
        
    })

}

/*
 * SEARCH HANDLING
 */
// Set global search variables
var searchBox             = document.getElementsByClassName("searchBox")[0],
    articleSectionName        = "ol",
    noResultsElementClassName  = "jsNoSearchResults",
    GoogleApiKey              = "AIzaSyCV4SC6uTz7bzYu1TmM_3iq2smlvbJOVLg",
    GoogleSearchId            = "008702682383656025817:4lkjxykfngo";

// get the query param by name
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(window.location.href);
    if (!results){
        return null;
    }
    if (!results[2]){
        return "";
    }
    return decodeURIComponent(results[2].replace("/\+/g", " "));
}

// Load the results via Google API
function loadResults(i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // if status = 4 or 200 exec.
        if (this.readyState == 4 && this.status == 200) {
            // declare newbox and the result
            var newBox;
            // load JSON
            var items = JSON.parse(this.responseText).items;

            // when no results are present show no results div
            if ( JSON.parse(this.responseText).queries.request.totalResults === 0 ) {
                // find element by predefined classname
                var noResultsElement = document.getElementsByClassName(noResultsElementClassName)[0];
                // if element exists and if it has the display property set to none, show it
                if (noResultsElement && noResultsElement.style.display === 'none') {
                    noResultsElement.style.display = 'block';
                }
            // when results are present
            } else {
                // loop over items
                items.forEach(function (element) {
                    // clone the searchbox;
                    newBox = searchBox.cloneNode(true);
                    // remove display = none
                    newBox.style.display = "block";
                    // Set the title with URL
                    newBox
                        .getElementsByClassName("title")[0]
                        .innerHTML = "<a href=\"" + element.link + "\" target=\"_self\">" + element.htmlTitle + "</a>";
                    // set the inner HTML snippet
                    newBox.getElementsByClassName("resultHTML")[0]
                        .innerHTML = element.htmlSnippet;
                    // append the box to the article
                    document.getElementsByTagName(articleSectionName)[0].appendChild(newBox);
                });
            }
        }
    };
    // open the URL
    xhttp
        .open("GET", "https://www.googleapis.com/customsearch/v1?key=" + GoogleApiKey + "&cx= " + GoogleSearchId + "&q=" + i, true);
    // send the request
    xhttp
        .send();
}

/*
 * ONLOAD HANDLING
 */

// search
document
    .addEventListener('DOMContentLoaded', function(){
        // cookie
        if(getCookie("cookieConsent") === false){
            document.getElementById("cookie-notification").style.display = 'flex';
        }
        // search
        var queryString = getParameterByName("search");
        if(queryString != null && queryString != ""){
            // query is available in querystring so load the results
            loadResults(queryString);
            // if there is a searchbox, add the query
            var searchBox = document.getElementById('search-knowledgebase');
            if(searchBox.length !== -1){
                searchBox.value = decodeURIComponent((queryString+'').replace(/\+/g, '%20'))
            }
        }
        // set current link cursive
        var links = document.getElementById("toc");
        if(links != null){
            var links = links.getElementsByTagName("a");
            for(var i=0; i<links.length; i++) {
                if(links[i].href == window.location.href){
                    links[i].classList.add("current")
                }
            }
        }
        // set _blank for external links
        var links = document.getElementsByTagName("a");
        if(links != null){
            for(var i=0; i<links.length; i++) {
                // external set _blank
                if(links[i].hostname != window.location.hostname){
                    links[i].target = "_blank";
                }
            }
        }

        // rotate homepage text
        if(document.getElementById("cooltext")){
            var listOfTexts = ["train your AI models", "create new products", "enhance your data"];
            var listOfTextsCounter = 0;
            setInterval(function(){
              document.getElementById("cooltext").innerHTML = listOfTexts[listOfTextsCounter];
              listOfTextsCounter = listOfTextsCounter + 1;
              if(listOfTextsCounter == listOfTexts.length){
                listOfTextsCounter = 0;
              }
            }, 3000);
        }
    }, false);

/*
 * GOOGLE TAG MANAGER HANDLING
 */
// include Google Tagmanager
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K6DMN8N');


/*
 * SHOW/HIDE ELEMENT
 */
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}