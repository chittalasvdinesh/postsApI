const url = "https://jsonplaceholder.typicode.com/posts";

let arr1 = []
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        arr1 = data

    })

let users=document.getElementById('users');
let UsersList=document.getElementById('UsersList');
let hideUsers=document.getElementById('hideUsers')
users.addEventListener('click',function(){
    for(let user of arr1){
        let userElement=document.createElement('li');
        let titleElement=document.createElement('h4');
        let bodyElement=document.createElement('p');
        let hrElment=document.createElement('hr');
        titleElement.textContent=user.title;
        bodyElement.textContent=user.body;
        userElement.appendChild(titleElement);
        userElement.appendChild(bodyElement);
        userElement.appendChild(hrElment);
        UsersList.appendChild(userElement)
    }
    console.log('hi')
});

