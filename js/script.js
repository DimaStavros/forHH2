
menu.onclick = function BurgerFunction() {
  let burger = document.getElementById("myTopnav");
  if(burger.className === "topnav") {
    burger.className += " responsive";
  }else {
    burger.className = "topnav";
  }
};


/* тоже самое на jquery 
$("#menu").click(function(){
  $("#myTopnav").toggleClass("responsive");
});
*/
