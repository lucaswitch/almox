import express from 'express';

let app = express()

app.post('/sign-in', function (request, response) {
    const username = request.data?.username;
    const password = request.data?.password;

    response.send({
        token:"asdjkasajdklasjdklajskldjaskldjklasjdklsajdksa",
        account:{
            id:1,
            name: "AManda",
            email:"gustavo@gmail.com"
        }
    })
});

app.listen(3000);
