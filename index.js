async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const user = await response.json();
    return user;
}

getUser()
.then(user => {
    for(let i = 1; i < 11; i++){
        document.getElementById("user" + i).innerText = JSON.stringify(user[i - 1].username + " ("+ user[i - 1].name + ") ");
    }
})
.catch(error => {
    console.log("error")
}
);

async function getPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const post = await response.json();
    return post;
}

getPost()
.then(post => {
    for(let i = 1; i < 7; i++){
        document.getElementById("post" + i).innerText = JSON.stringify(post[i - 1].title + "- ("+ post[i - 1].body + ") ");
    }
})
.catch(error => {
    console.log("error")
}
);

async function getComments(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/');
    const comment = await response.json();
    return comment;
}

getComments()
.then(comment => {
    for(let i = 1; i < 8; i++){
        document.getElementById("comment" + i).innerText = JSON.stringify(comment[i - 1].body);
    }
})
.catch(error => {
    console.log("error")
}
);