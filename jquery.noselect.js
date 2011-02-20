/*!
* noSelect jQuery Plugin v1.0
* @link http://github.com/mathiasbynens/noSelect-jQuery-Plugin
* @author Mathias Bynens <http://mathiasbynens.be/>
*/
jQuery.fn.noSelect = function() {
	function f() {
		return false;
	}
	return this.each(function() {
		// Since the string 'none' is used three times, storing it in a variable gives better results after minification
		var none = 'none';
		this.onselectstart = this.ondragstart = f; // WebKit & IE
		jQuery(this)
			.mousedown(f) // WebKit & Opera
			.css({ MozUserSelect: none, WebkitUserSelect: none, userSelect: none });
	});
};