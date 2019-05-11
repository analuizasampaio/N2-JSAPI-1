const movies = document.querySelector('.movies');
const botao = document.querySelector('.btn-search-movie');

botao.addEventListener('click', ()=>{
    event.preventDefault();
    console.log(movie.value);
    movies.innerHTML = '';


    fetch(`http://www.omdbapi.com/?s='${movie.value}'&apikey=7dfc7375`)

        .then((response)=>{
        return response.json();
        })
        .then((data)=>{
            console.log(data.Search);
            
            data.Search.forEach(filme => {

                const box = document.createElement('div');
                box.setAttribute('class', 'box');
                box.setAttribute('id', filme.imdbID);
                movies.appendChild(box);

                let imagem = document.createElement('img');
                imagem.src = filme.Poster;
                box.appendChild(imagem)

                const boxDivider = document.createElement('div');
                boxDivider.setAttribute('class', 'box-divider');
                box.appendChild(boxDivider);

                let texto = document.createElement('p');
                boxDivider.appendChild(texto);

                let nome = document.createElement('span');
                nome.innerHTML = filme.Title + ' ';
                texto.appendChild(nome);

                let ano = document.createElement('span');
                ano.innerHTML = `(${filme.Year})`;
                texto.appendChild(ano);

                let tipo = document.createElement('p');
                tipo.innerHTML = filme.Type;
                boxDivider.appendChild(tipo);





                
            });


        })
        .catch((erro)=>{
            console.log(erro);
        })
})