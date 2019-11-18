/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');
import $ from 'jquery';

/**
 * require style imports
 */
// const {getMovies, postMovie} = require('./api.js');
import {getMovies, postMovie, putMovie, renderMovieList} from './api'

$(document).ready(() => {

  $("main").html("loading...");

  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    $("main").html("Here are all the movies:");
    $("main").append(`<div id="accordion">`);
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      $("#accordion").append(renderMovieList(title, rating, id));
    });
    $("main").append(`</div>`);
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });

  $('#addButton').click(() => {
    $('#modalLabel').html('Add Movie');
  });

  $('#editButton').click(() => {
    $('#modalLabel').html('Edit Movie');
  });

  $("#saveInput").click(function () {
    console.log($("#modalLabel").html());
    if ($("#modalLabel").html() === "Add Movie") {
      console.log($("#titleInput").val());
      let something = {
        "title": $("#titleInput").val(),
        "rating": $("#ratingInput").val()
      };

      postMovie(something)
          .then(getMovies)
          .then((movies) => {
            console.log('Here are all the movies:');
            $("main").html("Here are all the movies:");
            movies.forEach(({title, rating, id}) => {
              console.log(`id#${id} - ${title} - rating: ${rating}`);
              $("main").append(`${title} - rating: ${rating}`);
            });
          }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
      });
    } else {
      let something = {
        "title": $("#titleInput").val(),
        "rating": $("#ratingInput").val()
      };
      putMovie(something)
          .then(getMovies)
          .then((movies) => {
            console.log('Here are all the movies:');
            $("main").html("Here are all the movies:");
            movies.forEach(({title, rating, id}) => {
              console.log(`id#${id} - ${title} - rating: ${rating}`);
              $("main").append(`${title} - rating: ${rating}`);
            });
          }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
      });
    }
  });
});