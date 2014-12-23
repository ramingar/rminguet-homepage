var swig = require('swig');

/**
* This function truncates an 'input' string after 'len' characters and adds an
* 'end' word at the end.
*
* @example
* // foo = 'This is some text.';
* {{ foo|truncate(5) }}
* // => This ...
*
* @param {string} input The default string.
* @param {number} [len=500] Number of characters to truncate to.
* @param {string} [end="..."]
* @return {string} A truncated string or the same input if was lesser than the
*                  'len' character.
*/
var truncate = function(input, len, end) {
  len = (typeof len === 'undefined') ? 500 : len;
  end = (typeof end === 'undefined') ? '...' : end;
  if (typeof input === 'string') {
    return input.substring(0, len) + ((input.length > len) ? end : '');
  }
  return input;
};
swig.setFilter('truncate', truncate);


/**
* This function returns the name of the month in Spanish.
*
* @example
* // myDate = 26th of July
* // {{ myDate | date(m) | month_spanish }}
* // => julio
*
* @param {string} input The default string.
* @return {*}
*/
var month_spanish = function(input) {
  var m_names = new Array('enero', 'febrero', 'marzo',
    'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre');
  return m_names[parseInt(input)-1];
};
swig.setFilter('month_spanish', month_spanish);