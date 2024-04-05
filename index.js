// Add your code here
function submitData (name,email) {
    return fetch ("http://localhost:3000/users",{
  method : "POST",
  headers : {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body : JSON.stringify({
     name,
      email,
  })
})

  .then (function (response){
     return response.json()
  })
  .then (function (object){
   
    let objId = object.id
    let p = document.createElement("p")
    p.textContent = objId
   let body= document.querySelector("body")
    body.appendChild(p)
    
    
  })
.catch (function (error){
   alert ("Bad things you")
   let error2 = error.message
   let p2 = document.createElement ("p")
   p2.innerHTML= error2
   let body2= document.querySelector("body")
  body2.appendChild(p2) 
})

    }
    

