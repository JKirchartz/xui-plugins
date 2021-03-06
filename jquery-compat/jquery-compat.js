xui.extend({
	/**
	 * Adds more DOM nodes to the existing element list.
	 */
	add: function(q) {
	  [].push.apply(this, slice(xui(q)));
	  return this.set(this.reduce());
	},

	/**
	 * Pops the last selector from XUI
	 */
	end: function () {	
		return this.set(this.cache || []);	 	
	},
  /**
   * Sets the `display` CSS property to `block`.
   */
  show:function() {
    return this.setStyle('display','block');
  },
  /**
   * Sets the `display` CSS property to `none`.
   */
  hide:function() {
    return this.setStyle('display','none');
  },
        // returns next element in DOM
	next: function() {
		var n = this[0];
		do{n = n.nextSibling;}
		while (n && n.nodeType != 1);
		return x$(n);
	},
	// returns previous element in DOM
	prev: function() {
		var n = this[0];
		do{n = n.previousSibling;}
		while (n && n.nodeType != 1);
		return x$(n);
	},
        // checks if element IS input x$(this).is("div") -> returns a DIV if this is a div or false otherwise
	is: function(sr) {
		sr = sr.toUpperCase();
		var n = this[0];
		if(sr == n.nodeName){
			return x$(n);
		}
		return false;
	}
});