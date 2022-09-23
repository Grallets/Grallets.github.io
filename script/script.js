var form = document.getElementById('form')


form.addEventListener('submit',function(event){
    
var name= document.getElementById('name').value  
var email = document.getElementById('email').value
alert("Hello " + name + ", You are now subscribed to our newsletter!")

})