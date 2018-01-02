$(document).ready(function() {
  addFilters($('#filter'));
  $('.modal').modal();
  // Se filtra por tipo de comida y se crea un container que tiene las imagenes  correspondiente  de cada restaurante
  $('#filter').change(function() {
    $('#restaurants-container').children().remove();
    var selection = $('select').val();
    for (var i = 0; i < restaurants.length; i++) {
      for (var cantidad = 0; cantidad < restaurants[i].filters.length; cantidad++) {
        if (restaurants[i].filters[cantidad] === selection) {
          var image = restaurants[i].photo;
          $('#restaurants-container').append('<div class=\'col s12 l6 xl6\'><div class=\'container-img-p\'><p class=\'overlay-text\'>' + restaurants[i].name + '</p>' + image + '</div></div>');
        }
      }
    };
    //  mouseover
    $('.container-img-p').mouseover(function() {
      $(':nth-child(1)', this).css({'opacity': '1'});
    });

    // La informacion que ira en el modal
    $('.container-img-p').click(function() {
      var place = $(this).children('img').attr('alt');
      for (var i = 0; i < restaurants.length; i++) {
        if (place === restaurants[i].name) {
          $('#title-modal').empty();
          $('#modal-data').empty();
          $('#title-modal').html(restaurants[i].name);
          $('#modal-map').empty();
          var newName = restaurants[i].name.replace(/ /g, '+');
          for (var cantidad = 0; cantidad < restaurants[i].address.length; cantidad++) {
            var newAddress = restaurants[i].address[cantidad].replace(/ /g, '+');
            var addressGoogle = newAddress.replace(/,/g, '');
           
            $('#modal-data').append('<p>' + restaurants[i].address[cantidad] + '</p>');
          }
          $('#modal-data').append('<p><a href=\'' + restaurants[i].website + '\'>' + restaurants[i].website + '</a></p>');
          
        }
      }
      // Para que aparezca el modal 
      $('#modal').modal('open');
      
    });
  });
});
// Recorre el array creado (data.js), y se filtra por tipo de comida 
var addFilters = (function(element) {
  var filtersArr = [];
  for (var i = 0; i < restaurants.length; i++) {
    for (var cantidad = 0; cantidad < restaurants[i].filters.length; cantidad++) {
      filtersArr.push(restaurants[i].filters[cantidad]);
    }
  }
  var uniqueFilters = [...new Set(filtersArr)];
  var filtersFinal = uniqueFilters.sort();
  for (var cantidadDos = 0; cantidadDos < filtersFinal.length; cantidadDos++) {
    element.append('<option value=\'' + filtersFinal[cantidadDos] + '\'>' + filtersFinal[cantidadDos] + '');
  };
  return filtersFinal;
});


