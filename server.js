//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是请求报文的封装
//response是响应报文的封装
app.get('/server', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('Hello AJAX -2');
});

//all 可以接受任意类型的请求 get post delete
app.all('/json-server', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //响应一个数据
    const data = {
        name: 'guigu'
    };

    //进行字符串转化
    let str = JSON.stringify(data);

    //设置响应体 send只能字符串或者buffer
    response.send(str);
});

//专门针对IE缓存的规则
app.all('/ie', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');


    //设置响应体 send只能字符串或者buffer
    response.send('HELLO IE -4');
});

//延时响应
app.all('/delay', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    setTimeout(() => {
        //设置响应体 send只能字符串或者buffer
        response.send('延时响应');
    }, 3000)
});

//jQuery响应
app.all('/jquery-server', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: '尚硅谷'
    }


    response.send(JSON.stringify(data));
});


//axios响应
app.all('/axios-server', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: '尚硅谷'
    }


    response.send(JSON.stringify(data));
});

//fetch响应
app.all('/fetch-server', (request, response) => {

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: '尚硅谷'
    }


    response.send(JSON.stringify(data));
});

//JSONP服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello JSONP")');

    const data = {
        name: '尚硅谷'
    };

    //将数据转化为字符串
    let str = JSON.stringify(data);

    //返回结果
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello JSONP")');

    const data = {
        name: '尚硅谷'
    };

    //将数据转化为字符串
    let str = JSON.stringify(data);

    //返回结果
    response.end(`handle(${str})`);
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中......");
});