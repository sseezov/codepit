const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    console.log(q.pathname);
    if (req.url == '/') {//То есть в случае, если пользователь находится на главной страницу
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();//а эта команда указывает, что нужно стартовать размещать
        
        });
        
    } else if (req.url == '/about') {
        fs.readFile('about.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();//а эта команда указывает, что нужно стартовать размещать
        
        });
    } else if (req.url == '/contact-me') {
        fs.readFile('contact-me.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();//а эта команда указывает, что нужно стартовать размещать
        
        });    

    }else{
        fs.readFile('404.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();//а эта команда указывает, что нужно стартовать размещать
        
        });  
    }
});

server.listen('3000', (err) => {
    if (err) {
        console.log(err);
    } else console.log('server is running');
});