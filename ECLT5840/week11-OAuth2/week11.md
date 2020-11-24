# Q1

> In the “Authorization Code Grant” flow, HTTP is used exclusively to exchange data between two parties. If a hacker managed to intercept a request/response marked as 2a, 3a, 3b, 4a, 4b in the lecture notes “11-oauth2.pptx”, can the hacker steal the data in the request/response? Explain why the hacker can or cannot steal the data.

Step 2,3: yes;
Step 4: NO, cause it uses HTTPS;

# Q2

> In the “Authorization Code Grant” flow, why does the authorization server use URL redirection to pass authorization code to the client* (through response 3a and request 3b in the lecture notes “11-oauth2.pptx”), instead of sending the authorization code in a separate HTTP request to the client* directly?
  *: The client here refers to the App’s server, not the browser.
  
Cause the server must redirect to the client and let the client get the token.
