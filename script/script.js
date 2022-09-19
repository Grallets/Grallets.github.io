var form = document.getElementById('form')

form.addEventListener('submit',function(event){
event.preventDefault()
var name= document.getElementById('name').value
console.log(name)
var email = document.getElementById('email').value
console.log(email)
})