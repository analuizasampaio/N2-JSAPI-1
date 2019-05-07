const cep = document.getElementById('cep')
console.log(cep.value)

cep.addEventListener('focusout', ()=> {
    console.log('focusout')
    fetch('https://viacep.com.br/ws/'+ cep.value + '/json')
    

    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(cep.value)

        // let estado = document.getElementById('estado')
        // estado.value = data.uf
        // console.log(data.uf)

        // let cidade = document.getElementById('cidade')
        // cidade.value = data.localidade
        // console.log(data.localidade)
        
        // let bairro = document.getElementById('bairro')
        // bairro.value = data.bairro
        // console.log(data.bairro)

        // let endereco = document.getElementById('endereco')
        // endereco.value = data.logradouro

        document.getElementById('estado').value = data.uf
        document.getElementById('cidade').value = data.localidade
        document.getElementById('bairro').value = data.bairro
        document.getElementById('endereco').value = data.logradouro
        
    })
    .catch(function(erro){
        console.log(erro)
    })
})

