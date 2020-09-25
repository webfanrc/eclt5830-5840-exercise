# Pure HTML

1. character entity: https://jsfiddle.net/9vbeop1L/

2. rowspan, colspan: https://jsfiddle.net/f0px2wz3/

3. responsive image: https://jsfiddle.net/wtzcdkfa/

    (refer: https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)
    ```
    <picture>
      <source media="(max-width: 799px)" srcset="https://www.cpr.cuhk.edu.hk/images/common/universityentrance_sm.jpg">
      <source media="(min-width: 800px)" srcset="https://www.cpr.cuhk.edu.hk/images/common/universitylibrary_sm2.jpg">
      <img src="https://www.cpr.cuhk.edu.hk/images/common/universitylibrary_sm2.jpg" alt="University">
    </picture>
    
    ```

4. target of a elements: https://jsfiddle.net/c7xkh91p/

    (refer: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_target)

5. HTTP
    > A server sent a response to redirect the client to http://example.com/abc. How would this HTTP response look like?
    
    HTTP/1.1 301 Moved Permanently
    Location: http://example.com/abc

6. HTTP
    > How can a server determine if a client is a Chrome browser?
    
    Using User-Agent in Request Headers, if the information contains string like 'Chrome/xxx', then the server could determine it.
    
7. HTTP
    >  If we were to send a PNG image to a client such that the client would request the user to save the image file (instead of displaying the image), how should we set headers in the response?

    Content-Type: image/png
    Content-Disposition: attachment; filename="filename.png"
    
    (refer: https://stackoverflow.com/questions/23714383/what-are-all-the-possible-values-for-http-content-type-header; https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition)
    
8. Form
    > If the following form is submitted, what would the query string in the URL look like?
     ```
     <form method=GET>
     <input type=hidden name=foo value="%*%">
     <input type=text value="12345">
     <input name="A&B" value="Hello World">
     </form>
      ```
  foo=%25*%25&A%26B=Hello+World
  
  (transfer %->%25; &->%26; blank->+; ignore empty name)
    
      