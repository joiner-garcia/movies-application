module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json());
  },
  postMovie: (movie) => {
    return fetch('api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  putMovie: (movie, id) => {
    return fetch(`api/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  renderMovieList: (title, rating, id) => {
    let content = `<div class="card">`;
    content += `<div class="card-header" id="heading${id}">`;
    // content += `<div class="card-header" id="heading` + id + ">";
    content += `<h5 class="mb-0">`;
    content += `<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">`;
// <!--          Collapsible Group Item #1-->
    content += `${title} - rating: ${rating}`;
    content += `</button>`;
    content += `</h5>`;
    content += `</div>`;
//
    content += `<div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#accordian">`;
    content += `<div class="movie-content-container card-body">`;
    content += `<div class="movie-description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>`;
    content += `<button type="button" id="editButton${id}" class="edit-button btn btn-primary btn-sm" data-toggle="modal" data-target="#modal">
                    Edit
                </button>`;
    content += `<button type="button" id="deleteButton${id}" class="delete-button btn btn-danger btn-sm" data-toggle="modal" data-target="#modal">
                    Delete
                </button>`;
    content += `</div>`;
    content += `</div>`;
    content += `</div>`;
    return content
  }

};