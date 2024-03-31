$(document).on('click', '.help-item', function() {
$(this).find('.fa-caret-up').toggleClass('fa-caret-up fa-caret-down');
});

$(document).on('click', '.read-more', function() {
$(this).closest('li').collapse('hide');
});

$('#datepicker').datepicker({
    format: 'dd.mm.yyyy',
    autoclose: true,
    todayHighlight: true
  });
  $('#returnDatepicker').datepicker({
    format: 'dd.mm.yyyy',
    autoclose: true,
    todayHighlight: true
  });

  function redirectToIndex() {
    window.location.href = "index.html";
  }

  function redirectToError() {
    window.location.href = "error.html";
  }

  function redirectToHotel() {
    window.location.href = "product.html";
  }

  function redirectToVhod() {
    window.location.href = "vhod.html";
  }

  function redirectToSearch() {
    window.location.href = "search.html";
  }

  function redirectToReg() {
    window.location.href = "reg.html";
  }

  function redirectToKabinet() {
    window.location.href = "kabinet.html";
  }


  