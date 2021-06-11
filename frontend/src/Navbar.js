const defaultOption = document.getElementsByClassName('.default_option');
const dropdown = document.getElementsByClassName('.dropdown ul');
const dropdownLi = document.getElementsByClassName('.dropdown ul li');
defaultOption.onClick = function(){
    console.log('Clicked');
    dropdown.classList.add('active');
  };
  
  dropdownLi.onClick = function(){
    var text = this.text();
    defaultOption.text(text);
    dropdown.removeClass("active");
  };