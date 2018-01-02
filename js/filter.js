var addFilters = (function(element) {
  var filtersArr = [];
  for (var i = 0; i < restaurants.length; i++) {
    for (var n = 0; n < restaurants[i].filters.length; n++) {
      filtersArr.push(restaurants[i].filters[n]);
    }
  }
  var uniqueFilters = [...new Set(filtersArr)];
  var filtersFinal = uniqueFilters.sort();
  for (var a = 0; a < filtersFinal.length; a++) {
    element.append('<option value=\'' + filtersFinal[a] + '\'>' + filtersFinal[a] + '');
  };
  return filtersFinal;
});


$(document).ready(function() {
  /* Para guardar el tipo de comida que se salecciona */
  var datos = localStorage.getItem('datos');
  console.log(datos);
});

$.each(comeRico, function(key, value) {
  var restaurant = key;
  console.log(restaurant);

  //  los valores de cada key(restaurant) 
  var content = value;
  console.log(content);
});