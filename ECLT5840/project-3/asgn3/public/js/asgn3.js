window.addEventListener('load', function() {
/*
  You should only need to deal with these two properties of "app":
  app.selected:
    - An array of integers
    - Store the ID of the selected Items
    - To clear selection, assign an empty array to this property.
  app.setItems(items):
    - Use this methods to set the items in the list.
*/

// TODO: Complete the implementation of these four functions.
let asgn3 = {
  retrieveItems: function(app) {
    // Task 1
    // TODO:
    //   Send an Ajax GET request to /getItems to retrieve items from the,
    //   server, and call app.setItems to set the list items.

    // Remove this statement when you have implemented this function.
    window.alert('retrieveItems() has not yet been implemented');
  },

  saveSelection: function(app) {
    // Task 2
    // TODO: Save app.selected (an array of integers) to localStorage

    // Remove this statement when you have implemented this function.
    window.alert('saveSelection() has not yet been implemented');
  },

  restoreSelection: function(app) {
    // Task 2
    // TODO: Restore the array of integers from localStorage and
    //   assign the array to app.selected
    // Your code should consider the case that "window.localStorage" is empty
    //   initially.

    // Remove this statement when you have implemented this function.
    console.log('restoreSelection() has not yet been implemented');
  },

  submitSelection: function(app) {
    // Task 3
    // TODO: Send app.selected via Ajax to "server B" and
    //   output the array in the response to the JS console.
    // (See Task 3's requirements for more info)

    // You need to implement the server-side script accordingly.

    // Remove this statement when you have implemented this function.
    window.alert('submitSelection() has not yet been implemented');
  }
}

window.app.setAsgn3(asgn3); // Don't change this statement

});
