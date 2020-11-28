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

let asgn3 = {
  // app作为Vue实例的引用
  retrieveItems: function(app) {
    // Task 1
    $.ajax({
      url: 'http://localhost:8080/getItems',
      type: 'GET',
      async: true,
      success: function(result) {
        app.setItems(result)
      }
    });

  },

  saveSelection: function(app) {

    // 用户直接选id而不是index
    localStorage.setItem('selectedItems', app.selected);
    console.log("saved");
  },

  restoreSelection: function(app) {
    // Task 2
    app.selected = localStorage.getItem('selectedItems').split(',').map(x=> Number(x));
  },

  submitSelection: function(app) {
    // Task 3
    // TODO: Send app.selected via Ajax to "server B" and
    //   output the array in the response to the JS console.
    $.ajax({
      url: 'http://localhost:8081/sendSelection',
      type: 'POST',
      data: app.selected.toString(),
      async: true,
      success: function(result) {
        console.log(result);
      }
    });
  }
}

window.app.setAsgn3(asgn3); // Don't change this statement

});
