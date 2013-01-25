// ==UserScript==
// @name		Auburn Link Fixer
// @version		0.2
// @description	Automatically uses https:// on all fp.auburn.edu sites. Toggles cws/www at 404s.
// @match		*://*auburn.edu*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @copyright	Clay Miller (clay@smockle.com)
// ==/UserScript==
if (~location.href.indexOf("http://fp.auburn.edu")) window.location = "https://" + window.location.hostname + window.location.pathname;
$(document).ready(function() {
    $.ajax({
        url: location.href,
        statusCode: {
            404: function() {
            	if (~location.href.indexOf("cws.auburn.edu")) window.location = window.location.protocol + "//www.auburn.edu" + window.location.pathname;
                else window.location = window.location.protocol + "//cws.auburn.edu" + window.location.pathname;
            }
        }
    });
});