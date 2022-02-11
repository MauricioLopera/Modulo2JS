document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
        hover:true,
        inDuration:300
    };
    var instances = M.Dropdown.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
        accordion:false
    };
    var instances = M.Collapsible.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var options = {
        dismissible:false,
        preventScrolling:false
    };
    var instances = M.Modal.init(elems, options);
  });

  function Toast(texto){
    M.toast({html: texto});
  }
