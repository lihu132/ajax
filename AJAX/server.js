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
    response.send('Hello AJAX');
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

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中......");
});