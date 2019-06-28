let widScr = window.innerWidth;//Ширина окна браузера


// Клик по меню

menu_btn.addEventListener('click', menuStart); 

menu_btn.addEventListener('click', appearingMenu); 

link_main.addEventListener('click', chekMobile);
link_about.addEventListener('click', chekMobile);
link_gallery.addEventListener('click', chekMobile);
link_service.addEventListener('click', chekMobile);
link_contact.addEventListener('click', chekMobile);
  
// Исчезновение меню по нажатию ссылки
function chekMobile(){
    if (widScr<600) {
      appearingMenu();
      menuStart();
    } 
}

// Превращение меню в стрелку и обратно
function menuStart() {
  document.getElementById('menu_btn').classList.toggle('menu_btn_active');
  }

 // Появление мобильного меню
function appearingMenu() {
  document.getElementById('Topnav').classList.toggle('links_active');
} 

// Прослушка события смены размера экрана
window.addEventListener("resize", function() {
  // Задаем переменную с состоянием активного меню
let elementClasses = Topnav.classList.contains( 'links_active');
//Если меню активно, закрываем его
if (elementClasses === true) {
  appearingMenu();
      menuStart();
}

}, false);

