$('#notify').click(function () {
    $(this).slideUp().empty();
});
$(function () {
    $('#notify').html('BIENVENID@ A VITRINET. ESTA PÁGINA WEB AUN ESTÁ EN DESARROLLO. CLICK EN ESTE MENSAJE PARA CERRAR.').slideDown();
});