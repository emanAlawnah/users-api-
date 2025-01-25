async function getUser(){
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await responce.json();
    const result = data.map(function(data){
    
         return `
           <div class="user">
          
           <h2 class="name">${data.name} </h2>
            <p>id : ${data.id}</p>
            <p>email: ${data.email}</p>
            <p>city: ${data.address.city}</p>
            <p>phone: ${data.phone}</p>
            <p>website: ${data.website}</p>
            <p>company : ${data.company.name}</p>

            </div>
            
         `
        
    }) .join(' ');

    document.querySelector(".users .row").innerHTML=result;

}

getUser();

