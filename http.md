# http


## 请求报文
重点是格式与参数

```
行      POST  /s?wd(URL路径)  HTTP/1.1版本
头      Host：atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-from-urlencoded
        User-Agent: Chrome 83
空行
体      username=admin&password=admin
```


## 响应报文
```
行      HTTP/1.1  200  OK
头      Content-type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: 2048
空行
体      <html>
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>

```
     



* 404
* 403
* 401
* 500
* 200