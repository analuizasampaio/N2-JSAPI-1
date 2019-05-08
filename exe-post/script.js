const button = document.getElementById('send_form')

button.addEventListener('click',(event)=> {
    console.log('deu certo')
    event.preventDefault()

    const nome = document.getElementById('first_name').value
    const sobrenome = document.getElementById('last_name').value
    const email = document.getElementById('email').value


    fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'first_name': nome,
            'last_name': sobrenome,
            'email': email,

        })
    })
    .then((response)=>{
        return response.json()
        })
    .then((data)=>{
    console.log(data)
    document.getElementById('message').innerHTML = 'Sucesso! :D'
    })
    .catch(function(erro){
        console.log(erro)
    })

})