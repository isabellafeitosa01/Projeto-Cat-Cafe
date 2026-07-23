const gatos = [
  {
    nome: 'Mingau',
    idade: '2 anos',
    status: 'Disponível',
    sexo: 'macho',
    img: '/assets/img/mingau.jpg',
  },
  {
    nome: 'Meg',
    idade: '3 anos',
    status: 'Disponível',
    sexo: 'femea',
    img: '/assets/img/meg.jpg',
  },
  {
    nome: 'Sofie',
    idade: '1 ano',
    status: 'Em processo de adoção',
    sexo: 'femea',
    img: '/assets/img/sofie.jpg',
  },
  {
    nome: 'Pedrinho',
    idade: '4 anos',
    status: 'Disponível',
    sexo: 'macho',
    img: '/assets/img/pedrinho.jpg',
  },
  {
    nome: 'Shadow',
    idade: '2 anos',
    status: 'Disponível',
    sexo: 'femea',
    img: '/assets/img/shadow.jpg',
  },
  {
    nome: 'Miguel',
    idade: '5 anos',
    status: 'Disponível',
    sexo: 'macho',
    img: '/assets/img/miguel.jpg',
  },
  {
    nome: 'Miguel',
    idade: '5 anos',
    status: 'Disponível',
    sexo: 'macho',
    img: '/assets/img/miguel.jpg',
  },
  {
    nome: 'Miguel',
    idade: '5 anos',
    status: 'Disponível',
    sexo: 'macho',
    img: '/assets/img/miguel.jpg',
  },
  {
    nome: 'Miguel',
    idade: '5 anos',
    status: 'Disponível',
    sexo: 'macho',
    img: '/assets/img/miguel.jpg',
  },
];

const cardapio = [
  {
    nome: 'Cappuccino',
    desc: 'Expresso, leite vaporizado e espuma de leite cremosa, finalizado com canela ou chocolate em pó',
    preco: 'R$ 14,00',
    categoria: 'bebidas',
    img: '',
  },
  {
    nome: 'Expresso',
    desc: 'Café extraído sob alta pressão, com sabor intenso, aroma marcante e uma cremosa camada de crema',
    preco: 'R$ 8,00',
    categoria: 'bebidas',
    img: '',
  },
  {
    nome: 'Latte',
    desc: 'Espresso suave com bastante leite vaporizado e uma fina camada de espuma ',
    preco: ' R$ 15,00',
    categoria: 'bebidas',
    img: '',
  },
  {
    nome: 'Mocha',
    desc: 'Espresso, leite vaporizado, calda de chocolate e chantilly ',
    preco: 'R$ 18,00',
    categoria: 'bebidas',
    img: '',
  },
  {
    nome: 'Chá Gelado de Pêssego',
    desc: 'Chá preto gelado, pêssego, limão e gelo',
    preco: ' R$ 12,00',
    categoria: 'bebidas',
    img: '',
  },
  {
    nome: 'Chocolate Quente Cremoso',
    desc: ' Leite, chocolate meio amargo, creme de leite e chantilly',
    preco: ' R$ 16,00',
    categoria: 'bebidas',
    img: '',
  },

  {
    nome: 'Croissant de Presunto e Queijo',
    desc: 'Croissant de Presunto e Queijo — Croissant amanteigado recheado com presunto, queijo muçarela e orégano',
    preco: 'R$ 18,00',
    categoria: 'salgados',
    img: '',
  },
  {
    nome: ' Pão de Queijo ',
    desc: 'Tradicional pão de queijo mineiro, servido quentinho ',
    preco: 'R$ 9,00',
    categoria: 'salgados',
    img: '',
  },
  {
    nome: 'Sanduíche Natural ',
    desc: ' Pão integral, frango desfiado, alface, tomate e cenoura ralada',
    preco: 'R$ 19,00',
    categoria: 'salgados',
    img: '',
  },
  {
    nome: 'Quiche de Alho-Poró',
    desc: ' Massa amanteigada recheada com creme de ovos, queijo e alho-poró',
    preco: 'R$ 18,00',
    categoria: 'salgados',
    img: '',
  },
  {
    nome: 'Toast Caprese',
    desc: 'Pão artesanal, muçarela de búfala, tomate, manjericão e azeite ',
    preco: '$ 22,00',
    categoria: 'salgados',
    img: '',
  },
  {
    nome: 'Wrap de Frango',
    desc: 'Tortilha recheada com frango grelhado, alface, tomate e molho especial ',
    preco: 'R$ 21,00',
    categoria: 'salgados',
    img: '',
  },

  {
    nome: 'Brownie',
    desc: 'Brownie de chocolate meio amargo com casquinha crocante e interior macio',
    preco: 'R$ 14,00',
    categoria: 'doces',
    img: '',
  },
  {
    nome: 'Cheesecake de Frutas Vermelhas',
    desc: 'Base crocante, creme de cream cheese e calda de frutas vermelhas',
    preco: 'R$ 18,00',
    categoria: 'doces',
    img: '',
  },
  {
    nome: 'Cookie com Gotas de Chocolate',
    desc: 'Cookie amanteigado com gotas de chocolate meio amargo',
    preco: 'R$ 10,00',
    categoria: 'doces',
    img: '',
  },
  {
    nome: 'Bolo de Cenoura',
    desc: 'Bolo caseiro de cenoura com cobertura de chocolate',
    preco: 'R$ 15,00',
    categoria: 'doces',
    img: '',
  },
  {
    nome: 'Red Velvet',
    desc: 'Bolo aveludado recheado com creme de cream cheese',
    preco: 'R$ 18,00',
    categoria: 'doces',
    img: '',
  },
  {
    nome: 'Pudim de Leite',
    desc: 'Pudim tradicional com calda de caramelo',
    preco: 'R$ 12,00',
    categoria: 'doces',
    img: '',
  },
];

//modal favoritos
const botaoFavoritos = document.querySelector('#btn-favoritos');
const modalFavoritos = document.querySelector('#modal-favoritos');
const fecharModal = document.querySelector('#modal-fechar');

//abrir modal quando clicar no coração
botaoFavoritos.addEventListener('click', () => {
  modalFavoritos.classList.add('ativo');
});

//fechar modal quando clicar no X
fecharModal.addEventListener('click', function () {
  modalFavoritos.classList.remove('ativo');
});
