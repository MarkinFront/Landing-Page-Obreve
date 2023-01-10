let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };

    });

}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;




$("#add").click(function() {
    $("#formone").append('  <div id="formone"> <fieldset class="grupo"> <div class="campo"> <label for="Quantidade"><strong>Quantidade</strong></label> <input type="text" name="Quantidade" id="Quantidade" required> </div> <div class="campo"> <label for="unidade"><strong>Unidade</strong></label> <select id="unidade" required> <option selected disabled value="">Selecione</option> <option>Xícara</option> <option>Copo</option> <option>ml</option> <option>gr</option> <option>Kg</option> </select> </div> <div class="campo"> <label for="Ingrediente"><strong>Ingrediente</strong></label> <select id="Ingrediente" required> <option selected disabled value="">Selecione</option> <option>Farinha</option> <option>Açúcar</option> <option>Leite</option> <option>Ovos</option> <option>Óleo</option> <option>Manteiga</option> </select> </div> <br> <div class="campo"> <label for="senioridade"><strong></strong></label> <input type="reset"  id="senioridade" required class="btn1"> </div> </fieldset>');

});


$("#add1").click(function() {
    $("#formone1").append('  <fieldset class="grupo"> <div class="campo"> <label for="passo"><strong>Passo a passo:</strong></label> <textarea type="text"  rows="3" style="width: 26em" id="experiencia" name="passo" name="nome" id="nome" required> </textarea> </div> <br> <br> <input type="reset"  id="senioridade" required class="btn1"> </fieldset>');

});

var cont = 1;

$('#add-campo').click(function() {
    cont++;


    $('#formulario').append('<div class="form-group" id="campo' + cont + '" > <fieldset class="grupo"> <div class="campo" id="formone1"> <label for="passo"><strong>Passo a passo:</strong></label> <textarea type="text"  rows="3" style="width: 26em" id="experiencia" name="passo" name="nome" id="nome" required> </textarea>  <button type="button" id="' + cont + '" class="btn1"> Remover</button> </div> </div>   </fieldset> ');
});

$('form').on('click', '.btn1', function() {
    var button_id = $(this).attr("id");
    $('#campo' + button_id + '').remove();
});






var cont = 1;

$('#add-campo2').click(function() {
    cont++;


    $('#formulario2').append('<div class="form-group2" id="campo1' + cont + '" ><fieldset class="grupo"> <div class="campo"> <label for="Quantidade3"><strong>Quantidade</strong></label> <input type="text" name="Quantidade3" id="Quantidade3" required> </div> <div class="campo"> <label for="unidade2"><strong>Unidade</strong></label> <select id="unidade2" required> <option selected disabled value="">Selecione</option> <option>Xícara</option> <option>Copo</option> <option>ml</option> <option>gr</option> <option>Kg</option> </select> </div> <div class="campo"> <label for="Ingrediente2"><strong>Ingrediente</strong></label> <select id="Ingrediente2" required> <option selected disabled value="">Selecione</option> <option>Farinha</option> <option>Açúcar</option> <option>Leite</option> <option>Ovos</option> <option>Óleo</option> <option>Manteiga</option> </select> </div> <br> <div class="campo"> <label for="Ingrediente2"><strong></strong></label> <button type="button" id="' + cont + '" class="btn1"> Remover</button> </div>  </div> </div> </fieldset>     </div>   </fieldset> ');
});

$('form').on('click', '.btn1', function() {
    var button_id = $(this).attr("id");
    $('#campo1' + button_id + '').remove();
});