# Node

1. Can you suggest a way to make the app “auto reload” whenever a .js file in the project folder is modified?

    Using nodemon or node-dev
    
2. Let “req” be the request object in the following callback function:
   
   app.get('/foo', function (req, res) { … });
   If the request-URI of a request is
   
         /foo?name1=&NAME2=abc&name3=%3D%5E.%5E%3D
   
   What are the corresponding values of req.query.name1, req.query.name2, and req.query.name3?
   
   req.query.name1 = '';
   req.query.name2 = undefined;
   req.query.name3 = =^.^=
   
3. Let “req” be the request object in the following callback function:
   
   app.get('/foo', function (req, res) { … });
   If the request-URI of a request is
   
         /foo?bar=a&bar=b&bar=c
   
   What is the value of req.query.bar?
   
   req.query.bar = [ 'a', 'b', 'c' ]
   
4. In the below code, what would res.send(X) sends when the value of X is
    ```
        app.get('/foo', function (req, res) {
            let X = …;
            res.send(X);
        });
    ```
   
    - 200 (A value of type number)
    - "200" (A value of type string)
    - An array of numbers
    - An object
    - null
       
    Note: Pay attention to the value in the response body and the value of the “Content-Type” header. You can inspect the headers of a request or response in Chrome browser's Developer Tool (under the "Network" tab)
   
    - 200 (A value of type number)
        - Content-Type: text/plain; charset=utf-8
        - response body: OK
    - "200" (A value of type string)
        - Content-Type: text/html; charset=utf-8
        - response body: 200
    - An array of numbers
        - Content-Type: application/json; charset=utf-8
        - response body: array contents
    - An object
        - Content-Type: application/json; charset=utf-8
        - response body: object contents
    - null
        - Content-Type: (empty)
        - response body: (empty)
   
   Why in my practice, the content type of the first one and the last one are all text/html?
   
   By the way:
   Express deprecated res.send(status): Use res.sendStatus(status) instead
   
5. The value of "str" in the above code segment represents the content of a Comma Separated Value (CSV) file. However, if you use a browser to access http://localhost:8080/foo.csv, the browser will treat the content in the response as HTML content.

    ```
      let express = require('express');
      let app = express();
      
      app.get('/foo.csv', function (req, res) {
        let str =
      `"<b>name1</b>",2,3
      "<h1>name2</h1>",4,5
      "name3",6,7`;
       
        res.send(str);
      });
      
      app.listen(8080);
    ```
    How can you modify the above middleware so that the browser will treat the content in the response as CSV file content?
   
    Note: If a browser had visited http://localhost:8080/foo.csv before, then for subsequent visits to the same URL, the browser may choose to load the content from its cache (instead of retrieving the latest content from the server).

    To make sure the browser is retrieving the content from the server (and not from local cache), you need to tell the browser to “hard refresh” the content. You can find the info about “hard refresh” here: https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/#.XmNZBagzbQU

    res.set("Content-Type", "text/csv");



