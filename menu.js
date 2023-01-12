(function (){
  document.addEventListener("DOMContentLoaded", () => {
    let list = document.querySelector('.centred-menu');
    list.addEventListener('change',(e)=>{
      if(e.target.checked){ 
        if(!e.target.dataset['cmi']){
          console.log("Error, checkbox is missing data-cmi attribute!");
          return false;
        }
        list.style.setProperty('--selected-item',e.target.dataset.cmi);
      }
    })
  });
})();