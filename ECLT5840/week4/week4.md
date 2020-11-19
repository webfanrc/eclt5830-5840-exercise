1. CSS Design
    
    Private until 10-19

2. What CSS selector can be used to select all “a” elements that have the “href” attribute, and the attribute value begins with “https://” ?

    a[href^="https://"]
    
3. What CSS rule can be used to set the background of the list items (“li” elements”) at position 1, 4, 7, 10, 13, … to blue (while the background of the other “li” elements remains unchanged)?
   
    li:nth-of-type(3n+1) {
        background: blue;
    }
    
4. What CSS selector can be used to select all elements that have both “foo” and “bar” in their “class” attribute?

    .foo.bar
    
5. Suppose there are multiple form elements in a HTML document, what CSS selector can be used to ONLY select the checked checkboxes in the following form?
   ```
   <form id=myform>
   <input type=checkbox name=foo value=apple>Apple<br>
   <input type=checkbox name=foo value=orange>Orange<br>
   <input type=checkbox name=foo value=banana>Banana<br>
   </form>
   ```
   
    input[type="checkbox"]:checked
   
6. ```
   <html><head>
   <style type="text/css">
   *          { color: #001; }
   
   div        { color: #002; }
   div div    { color: #003; }
   #bar       { color: #004; }
   
   @media screen and (min-width: 600px) {
     div      { color: #005; }
     div.foo  { color: #006; }
   }
   </style>
   </head><body>
   <div>
     AAAA
     <p><div>BBBB</div></p>
     <div class='foo'>CCCC</div>
     <div><span class='bar'>DDDD</span></div>
   </div>
   </body></html>
   ```
   
   (a) #005
   (b) #003
   (c) #003
   (d) #001