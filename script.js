

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
  }
};

document.getElementById('btn_fetch').addEventListener('click', function () {

  const movieList = document.querySelector(".movie-list")
  movieList.innerHTML = ""

  let moviSearch = document.getElementById('moviSearch').value




  fetch(`https://api.themoviedb.org/3/search/movie?query=${moviSearch}&include_adult=false&language=fr-FR&page=1`, options)
    .then(response => response.json())
    .then(data => {



      let index = 0
      data.results.forEach(function (movie) {

        const card = document.createElement('div')
        card.classList.add('card', 'col-lg-3', 'col-10', 'm-3')
        card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="affiches films">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.release_date}</p>
          <a href="movie.html?id=${movie.id}" class="btn btn-secondary view-more">Voir Plus</a>
        </div>
      `

        movieList.appendChild(card)
        index++
      })
    })

})


// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGEyZTA0MTVmODZkZGQ4MDI2NGViNDM3YzA0NDU5MyIsInN1YiI6IjY1NDBhZDdiNDU1N2EwMDBjNmI0NzYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSe8XF_F4iGTunYZS6mtnr3oyIk5brpibSgT2g2tIWc'
//   }
// };

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (const movie of data.results) {

      document.getElementById('nowPlaying').innerHTML += `
      
      <div id="nowPlaying">
        ${movie.title}
      </div>
      <div id="movie_image">
          
      </div>
    
      <div id="popular">
        <img src = "https://image.tmdb.org/t/p/original/${movie.poster_path}">
       
      </div>
      
      `


    }
  })


