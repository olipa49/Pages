set_mod1();
/* Когда пользователь нажимает на кнопку, переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Закрыть выпадающее меню, если пользователь щёлкает за его пределами
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var neromodel;
/* функция для выбора модели */
function set_mod1() {
    neromodel = 1;
    var circle1 = document.getElementById("cir1");
    circle1.style.background = "#7fee1dc4";
    var circle2 = document.getElementById("cir2");
    circle2.style.background = "#ee2b1dc4";
    console.log(neromodel);

    var modelnameh2 = document.getElementById("modelname");
    modelnameh2.innerHTML = `Модель: ${neromodel}`;
}

function set_mod2() {
    neromodel = 2;
    var circle1 = document.getElementById("cir1");
    circle1.style.background = "#ee2b1dc4";
    var circle2 = document.getElementById("cir2");
    circle2.style.background = "#7fee1dc4";
    console.log(neromodel);

    var modelnameh2 = document.getElementById("modelname");
    modelnameh2.innerHTML = `Модель: ${neromodel}`;
}

// Переключалка темы
function squid_theme() {
    document.querySelector("body").classList.toggle("light");
    document.querySelector("body").classList.toggle("dark");
}


function contacts_anim() {
    document.querySelector("#contacts-div").classList.toggle("contacts-down")
    document.querySelector("#contacts-center").classList.toggle("contacts-down")
}
function open_contacts() {
    document.querySelector(".shapka").classList.toggle("hoverus");
    setTimeout(contacts_anim, 600);
}


function contacts_anim_close() {
    document.querySelector(".shapka").classList.toggle("hoverus");
    document.querySelector("#contacts-div").classList.toggle("contacts-down")
    document.querySelector("#contacts-center").classList.toggle("contacts-down")
    document.querySelector("#contacts-div").classList.toggle("contacts-close")
    document.querySelector("#contacts-center").classList.toggle("contacts-close")
}
function close_contacts() {
    document.querySelector("#contacts-div").classList.toggle("contacts-close")
    document.querySelector("#contacts-center").classList.toggle("contacts-close")
    setTimeout(contacts_anim_close, 600);
}