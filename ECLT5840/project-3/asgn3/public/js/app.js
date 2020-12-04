window.addEventListener('load', function() {

let app = new Vue({
  el: "#asgn3_app",
  data: {
    selected: [], // selected list, item.id
    showSelected: false,
    items: [],      // Store filtered items
    allItems: []    // Store all items
  },

  methods: {
    setItems: function(items) {
      this.allItems = JSON.parse(JSON.stringify(items));
      this.filter();
    },

    setAsgn3: function(asgn3) {
      this.asgn3 = asgn3; // *
      this.restoreSelection();
    },

    retrieveItems: function() {
      if (this.asgn3 && this.asgn3.retrieveItems)

        this.asgn3.retrieveItems(this);

      else

        console.error('asgn3 or asgn3.retrieveItems() not defined');
    },

    clearSelection: function() {
      this.selected = [];
    },
    restoreSelection: function() {
      if (this && this.asgn3.retrieveItems)
        this.asgn3.restoreSelection(this);
      else
        console.error('asgn3 or asgn3.restoreSelection() not defined');
    },
    saveSelection: function() {
      if (this.asgn3 && this.asgn3.saveSelection)
        this.asgn3.saveSelection(this);
      else
        console.error('asgn3 or asgn3.saveSelection() not defined');
    },
    submitSelection: function() {
      if (this.asgn3 && this.asgn3.submitSelection)
        this.asgn3.submitSelection(this);
      else
        console.error('asgn3 or asgn3.submitSelection() not defined');
    },

    toggleItemSelect: function(id) {
      let idx = this.selected.indexOf(id);
      if (idx != -1)
        this.selected.splice(idx, 1);
      else
        this.selected.push(id);
    },

    isSelected: function(id) {
      return this.selected.indexOf(id) != -1;
    },

    filter: function() {
      this.items = [];
      for (let item of this.allItems) {
        if (!this.showSelected ||
            (this.showSelected && this.isSelected(item.id)))
          this.items.push(item)
      }
    }
  }
});

window.app = app;

}) // end of window.onload
