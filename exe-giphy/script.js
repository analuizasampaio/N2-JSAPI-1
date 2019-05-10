let stickers = document.querySelector('.stickers');
const botao = document.querySelector('.btn-search-sticker');

botao.addEventListener('click', ()=> {
    console.log(sticker.value);
    event.preventDefault();
    
    stickers.innerHTML = ' ';

   

    fetch('https://api.giphy.com/v1/stickers/search?q=' +sticker.value +'&api_key=OHpfArYpQwus3abcgBMbuvfBXGkR9iDM')
    

    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
        console.log(data.data)
        data.data.forEach(imagem => {
            
            const card = document.createElement('div');
            card.setAttribute('class', 'box');
            card.setAttribute('data-id', imagem.id)
            stickers.appendChild(card)

            let figurinha = document.createElement('img');
            figurinha.src = imagem.images.original.url;
            card.appendChild(figurinha)
        });

    })
    .catch((erro) => {
        console.log(erro)
    })
})


