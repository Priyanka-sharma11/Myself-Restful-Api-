const express=require('express');
let app=express();
let port=8080;
let path=require('path');

const { v4: uuidv4 } = require('uuid');

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

let posts=[
    {
        username:'Hatoda',
        id:uuidv4(),
        img:'data:image/jpeg;base64,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',
        caption:'hi! my name is hatoda.my color is brown',
    },
    {
        username:'Kittu',
        id:uuidv4(),
        img:'data:image/jpeg;base64,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',
        caption:'i am a cat. I am very lazy. I am Queen of my house',
    },
]

//show all posts (home page)
app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
});

//make new post
app.get('/posts/new',(req,res)=>{
    res.render('create.ejs');
});
app.post('/posts',(req,res)=>{
    let {username,img,caption}=req.body;
    let id=uuidv4();
    posts.push({username,id,img,caption});
    res.redirect('/posts');
});

//update
app.get('/posts/:id/edit',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render('edit.ejs',{post});
});
app.patch('/posts/:id',(req,res)=>{
    let {img,caption}=req.body;
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    post.img=img;
    post.caption=caption;
    res.redirect('/posts');
})

//show details
app.get('/posts/:id',(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render('show.ejs',{post});
})

//delete
app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id !==p.id);
    res.redirect('/posts');
})

app.listen(port,()=>{
    console.log('server is listening');
});
