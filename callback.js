
let posts = [
    { title: "Post One", body: "This is post one",createdAt: new Date().getTime()},
    { title: "Post Two", body: "This is post two",createdAt: new Date().getTime()},
  ];

  
let interval = 0;

  function getPost(){
    clearInterval(interval);

    interval = setInterval(() => {
      let output = "";
      for(let i =0;i<posts.length; i++){
        output += `<li>${posts[i].title} - updated ${Math.ceil(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`;
      }
      document.body.innerHTML = output;
    },1000)
  }

  function createPost(post,callback){
    setTimeout(() => {
      posts.push({...post, createdAt: new Date().getTime()});
      callback();
    },3000);
  }

  function create4thPost(post,callback){
    setTimeout(()=> {
      posts.push({...post, createdAt: new Date().getTime()});
      callback();
    }, 5000)
  }

  createPost({title:"Post Three", body: "This is post three"}, getPost)
  create4thPost({title:"Post Four"}, getPost)
  
  
    