//seleciona os itens da barra lateral.

var menuitem = document.querySelectorAll('.menu-item')

function selectlink(){
    menuitem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuitem.forEach((item)=>
    item.addEventListener('click', selectlink)
)
//seleciona os itens da barra lateral.

//expande o menu.

document.addEventListener('DOMContentLoaded', function () {
    // Selecione o botão usando o ID correto 'btn_exp'
    var btnexp = document.getElementById('btn_exp');

    // Selecione o elemento de menu usando a classe 'menu-lateral'
    var menuside = document.querySelector('.menu-lateral');

    // Adicione um ouvinte de evento de clique ao botão 'btnexp'
    btnexp.addEventListener('click', function () {
        // Alterne a classe 'expandir' no elemento 'menuside'
        menuside.classList.toggle('expandir');
    });
});
