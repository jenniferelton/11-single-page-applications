'use strict';
var app = app || {};

(function (module) {
  const articleController = {};
  articleController.index = function () {
    // app.Article.fetchAll(app.articleView.initIndexPage);
    $('.tab-content').hide();
    $('#articles').show();

  }
  module.articleController = articleController;
})(app);
// DONE: TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
// code that used to be in index.html.
// Also be sure to hide all the main section elements, and reveal the #articles section:
