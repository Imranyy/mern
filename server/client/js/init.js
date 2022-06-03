document.addEventListener('DOMContentLoaded', function(){
  //nav menu
  const menu=document.querySelector('.sidenav');
  M.Sidenav.init(menu, {edge:'right'});
  //modal
  const modals=document.querySelectorAll('.modal');
  M.Modal.init(modals);
  });