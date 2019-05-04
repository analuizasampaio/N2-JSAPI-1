let cep = document.getElementById('cep')
let cep = EU NÃO SEI COMO FAZER ISSO 
console.log(cep)


fetch(onmouseleave = 'https://viacep.com.br/ws/'+ cep + '/json')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(cep)
})
.catch(function(erro){
    console.log(erro)
})