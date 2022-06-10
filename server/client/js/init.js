document.addEventListener('DOMContentLoaded', function(){
  //parallax
  const parallax=document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);
  //modal
  const modals=document.querySelectorAll('.modal');
  M.Modal.init(modals);
  }); 
  