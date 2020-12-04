let express = require('express');
let app = express();

const avails = [1,3,5,7,9,20,22,24,26,28,30];

app.use(function(req,res,next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

    next();
})

app.post('/sendSelection', function(req,res){

    let post = '';

    req.on('data', function(chunk) {
        post+=chunk;
    })

    req.on('end', function() {

        let seleted = [];

        if(post != '') {
            let userData = post.split(',').map( x => Number(x));

            console.log(userData.length);
            for (let i = 0; i < userData.length; i++) {
                if (avails.indexOf(userData[i]) != -1) {
                    seleted.push(userData[i]);
                }
            }

            res.write(JSON.stringify(seleted));

            res.end();
        } else {
            res.write(JSON.stringify(seleted));

            res.end();
        }
    })
});

app.get('/favicon.ico', (req, res) => { res.status(204).end(); });


app.listen(8081, ()=> console.log(`Server B OK!`));
