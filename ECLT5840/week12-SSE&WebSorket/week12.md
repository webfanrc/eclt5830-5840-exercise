# Q1

> A page contains JS code that will establish an SSE connection with the server on page load. Suppose a user had loaded the page and an SSE connection was established. If the user then reloaded the page, will the browser resume the SSE connection or establish a new SSE connection? If the SSE connection mentioned in the above question were Websocket connection, will the browser resume the connection or establish a new connection?

SSE will
Websocket will not
Cause SSE has the feature of auto-reconnect

# Q2

> Suppose you were asked to implement a web application that will use Websocket in a request-response fashion. However, because the server may take different amount of time to fulfill different requests, when a client sends multiple request messages, the corresponding response messages can arrive at the client in different order. How would you implement this web application so that the client can match a received message to the corresponding request? Note: Your solution cannot involve XHR (Ajax) or Fetch APIs.

Adding some time stamp when sending the message