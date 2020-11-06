function getItems() {
  let items = null;
  $.ajax({
    url: '/getItems',
    async: false,        // Note: Synchronous Ajax call may not be supported in the future
    dataType: 'json',
    success: function (result) {
      items = result;
    }
  });
  return items;
}
