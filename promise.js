let posts = [
    {title: "Post One"},
    {title: "Post Two"}
]

function getPost(){
    setTimeout(() => {
        let output= ''
        for(let i =0; i<posts.length; i++) {
            output += `<li>${posts[i].title}</li>`
        }
        document.body.innerHTML = output;
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if(!error) {
                resolve()
            } else {
                reject("Error Something Went Wrong");
            }
        }, 3000)
    })
}


 function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const error = false;
            if(posts.length > 0){
            resolve(posts.pop())
            } else {
                reject("Array is now empty.");
            }
        }, 4000)
    })
}

createPost({title: "Post Three"})
 .then(getPost,deletePost().then(getPost))
 .catch((err) => {
   console.log(err, "Array is empty now");
 });

 