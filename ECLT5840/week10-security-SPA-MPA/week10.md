# Condition

完成；未被批改

# Q1

> A single page web application validates all the user input on the client side very thoroughly before sending the data to the server via Ajax. Should the server-side script, upon receiving the request, validate the data in the request again? Explain why the server should (or do not need to) validate the data again.

Yes.
Cause user could send the ajax directly, bypass the client side validation.

# Q2

> Suppose a web application keeps the session ID of its user in a cookie, and the cookie’s “httpOnly” attribute is set to true. If the web application is vulnerable to XSS attack, can the hacker who makes the XSS attack steal the session IDs (that are issued by the web application to other users)? Explain why it is possible (or not possible).

No, the hacker could not steal the session ID
A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API; it is sent only to the server.

refer: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Restrict_access_to_cookies

# Q3

> Suppose a web application keeps the session ID of its user in a cookie. Is setting the cookie’s “httpOnly” attribute to true enough to prevent the application from CSRF attack? Explain why it is possible (or not possible).

No, setting the cookie's httpOnly attribute could not prevent the CSRF attack.
Cause after http connection, all the cookie is send to the server through the request.

# Bonus Question (1 extra participation point)

> If the following code segment is executed, in what order would ‘A’, ‘B’, ‘C’, ‘D’, ‘E’, ‘F’ appear in the browser’s JS console? (Assuming “/foo” is a valid path)
> Also, is it possible that ‘A’ appears before ‘D’ in the browser’s JS console?
```javascript
$.ajax({ 
  url: '/foo',
  success: function(result) { console.log('A'); }
});

console.log('B');

$.ajax({
  url: '/foo',
  success: function(result) { console.log('C'); }
});

console.log('D');

$.ajax({                       // Synchronous
  url: '/foo',
  async: false,
  success: function(result) { console.log('E'); }
});

console.log('F');
```
BDEFAC
No

