// ==UserScript==
// @name           Always Smile
// @namespace      github.com/tobeannouncd
// @author         tobeannouncd
// @version        0.1
// @description    Automatically redirects valid Amazon URLs to their Amazon Smile equivalent.
// @match          http*://www.amazon.tld/*
// @exclude-match  http*://www.amazon.jobs/*
// @homepageURL    https://github.com/tobeannouncd/userscripts
// @downloadURL    https://github.com/tobeannouncd/userscripts/raw/main/AlwaysSmile.user.js
// @run-at         document-start
// ==/UserScript==


var new_host = window.location.host.replace(/^www\./, 'smile.');
var new_url = window.location.protocol + '//' + new_host + window.location.pathname + window.location.search + window.location.hash;
window.location.replace(new_url);