# Week 8: 

## Status

Doing, reviewing

## Q1
Both of example.com and www.example.com map to the same IP address 93.184.216.34. As a result, both URLs http://example.com and http://www.example.com yields the same webpage in the browser. Which of these URLs is/are considered as having the same origin as http://www.example.com/index?

http://www.example.com:80/foo
https://www.example.com/bar
http://93.184.216.34/baz
http://example.com /index
http://www.example.com:8080/abc/xyz.jpg
http://www.EXAMPLE.com/hehe
http://WWW.example.com/haha

### My answer
Same origin means that they have the same host, port and protocol, so:

- A is, the default port number is 80;
- B is not, using different protocol;
- C is not, ip is not;
- D is not, see rfc6454 3.2.1;
- E is not, using different port;
- F is;
- G is;

## Q2
In the “login” demo app (inside the file session-login-example.zip), the session is set to expired in 60 seconds.

If one prolongs the expiration date (says by 10 minutes or longer) of the session ID cookie in a browser, will the session still stay active after 60 seconds?

If your answer is “No. The session will still expire after 60 seconds.”, can you explain how “express-session” enforce the “60 seconds expiration time”?

If your answer is “Yes. The session will remain active after 60 seconds”, can you propose an approach to enforce the “60 seconds expiration time”?

Note: “Enforce 60 seconds expiration time” means “To make the session expired 60 seconds after it was created even if the expiration date of the session ID cookie is prolonged in the browser.  

### My answer

Very interesting. I tried the example and find out the session will not stay active after 60 seconds even though I change the cookie expire time through browser.

My explanation: The session expire time is inserted into the cookie value itself, cause when I try to logout the session, it shows these message:

```
Session {
  cookie:
   { path: '/',
     _expires: 2020-11-05T11:37:53.660Z,
     originalMaxAge: 60000,
     httpOnly: true } }
Session {
  cookie:
   { path: '/',
     _expires: 2020-11-05T11:37:58.774Z,
     originalMaxAge: 60000,
     httpOnly: true },
  userid: 'john' }
```
And the cookie._expires value is the TRUE value of expires time. 

# Q3
In a Node application, how can one configure the "express-session" middleware so that the client (browser) will only include the session ID in the cookie when the browser requests for resources with path that begins with "/special/".

For examples

If path is "/special/index", include session ID cookie in request.
If path is "/image/foo.jpg", exclude session ID cookie in request.
If path is "/index", exclude session ID cookie in request.

### My answer
app.use(session({
    cookie: { 
        path: '/special'
    }
}));





