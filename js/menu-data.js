// ===== Full menu data (source: restaurant menu) =====
// Each category: { cat, icon, items:[{ n:name, p:price, d:description? , note? }] }
var MENU = [
  { cat: "Kimchi", icon: "leaf", items: [
    { n: "Kimchi", p: "4.00", d: "Cavolo marinato coreano" }
  ]},

  { cat: "Insalate", icon: "leaf", items: [
    { n: "Insalata con ciuffi di totano", p: "8.00", d: "Insalata piccante con ciuffi di totano, cipolla, peperoni e cetrioli" }
  ]},

  { cat: "I piatti di riso", icon: "bowl", items: [
    { n: "Bibimbap con manzo", p: "12.00", d: "Riso con verdure e manzo marinato" },
    { n: "Dolsot bibimbap", p: "15.00", d: "Riso con verdure, pancetta e uovo, servito nella tradizionale ciotola di terracotta calda. Disponibile anche vegetariano" },
    { n: "Riso fritto con kimchi piccante", p: "8.00" },
    { n: "Gnocchi di riso piccante", p: "10.00", d: "Tteokbokki in salsa piccante" },
    { n: "Gnocchi di riso piccante con formaggio", p: "11.00" },
    { n: "Gnocchi di riso in salsa di soia e manzo", p: "12.00", d: "Con pancetta di manzo e verdure" },
    { n: "Onigiri al tonno", p: "6.00" },
    { n: "Kimbap", p: "10.00", d: "Roll di riso avvolto nell'alga con surimi di granchio, carote, cetrioli, uova e daikon" },
    { n: "Bulgogi kimbap", p: "10.00", d: "Roll di riso con manzo, carote, cetrioli, daikon e uova" },
    { n: "Kimbap (vegetariano)", p: "10.00", d: "Roll di riso con carote, cetrioli, daikon e uova" },
    { n: "Riso bianco", p: "2.00" }
  ]},

  { cat: "Piatti speciali orientali", icon: "flame", items: [
    { n: "Frittata di kimchi piccante", p: "10.00", d: "Pancake coreano con kimchi" },
    { n: "Frittata di frutti di mare", p: "12.00", d: "Pancake coreano con frutti di mare" },
    { n: "Shabu Shabu", p: "15.00", d: "Zuppa bollente con fette sottili di manzo, verdure miste, funghi, surimi, germogli e spaghetti di soia" },
    { n: "Ravioli maiale e verdure", p: "5.00", d: "4 pezzi" },
    { n: "Ravioli verdure", p: "5.00", d: "4 pezzi" },
    { n: "Ravioli piccante di maiale e kimchi", p: "6.00", d: "4 pezzi" },
    { n: "Ravioli piccante di pollo e kimchi", p: "6.00", d: "4 pezzi" },
    { n: "Calamaro piccante con verdure", p: "10.00" },
    { n: "Pancetta di manzo con verdure", p: "10.00" },
    { n: "Pancetta di maiale piccante con verdure", p: "10.00" },
    { n: "Verdure miste", p: "8.00" }
  ]},

  { cat: "Gli spaghetti", icon: "bowl", items: [
    { n: "Ramen piccante con formaggio", p: "12.00", d: "Carote, zucchine, formaggio, würstel" },
    { n: "Ramen piccante con uovo", p: "12.00", d: "Carote, zucchine, germogli di soia, würstel, uova" },
    { n: "Ramen piccante vegetariano", p: "10.00" },
    { n: "Soba coreano freddo", p: "12.00" },
    { n: "Jjajangmyeon", p: "10.00", d: "Spaghetti con salsa di fagioli neri, pancetta di maiale e salsa di soia" },
    { n: "Japchae", p: "10.00", d: "Spaghetti di patate dolci con verdure miste e uova" }
  ]},

  { cat: "Le zuppe", icon: "bowl", items: [
    { n: "Zuppa piccante con frutti di mare", p: "10.00", d: "Zuppa piccante con tofu e frutti di mare" },
    { n: "Zuppa con kimchi e tofu", p: "8.00", d: "Zuppa piccante con kimchi e tofu" },
    { n: "Zuppa con alghe e tofu", p: "8.00" }
  ]},

  { cat: "Pollo fritto speciale", icon: "drumstick", items: [
    { n: "Pollo fritto classico", p: "10.00", d: "4/5 pezzi di ali e 2 cosce, alcuni con osso" },
    { n: "Pollo fritto in salsa dolce piccante", p: "12.00" },
    { n: "Pollo fritto in salsa maionese e yogurt", p: "12.00" },
    { n: "Pollo fritto misto", p: "12.00" }
  ]},

  { cat: "Carne cruda mista (BBQ)", icon: "flame", items: [
    { n: "Degustazione BBQ manzo", p: "35.00", d: "3 piatti da grigliare: Angus australiano, costolette di manzo polacco, bocconcini Angus irlandese con salsa al pepe nero" },
    { n: "Degustazione BBQ", p: "25.00", d: "6 piatti da grigliare: manzo marinato, bocconcini di manzo, pancetta suina spessa, coscia di pollo marinata, salsiccia e zucchine" }
  ]},

  { cat: "Manzo crudo", icon: "flame", items: [
    { n: "Costine Black Angus Australia (100g)", p: "18.00" },
    { n: "Manzo marinato (180g)", p: "10.00" },
    { n: "Costolette di manzo (180g)", p: "10.00" },
    { n: "Pancetta di manzo marinata (100g)", p: "8.00" },
    { n: "Bocconcini di manzo con ananas (180g)", p: "12.00" },
    { n: "Bocconcini di manzo con pepe nero (180g)", p: "12.00" },
    { n: "Steak bovino polacco", p: "10.00" },
    { n: "Costata polacca", p: "12.00" },
    { n: "Fiore di manzo polacco", p: "12.00" }
  ]},

  { cat: "Maiale crudo", icon: "flame", items: [
    { n: "Pancetta spessa di suino (150g)", p: "10.00" },
    { n: "Pancetta sottile", p: "6.00" },
    { n: "Coppa di maiale marinata (100g)", p: "10.00" },
    { n: "Involtini con maiale e funghi", p: "10.00" }
  ]},

  { cat: "Pollo crudo", icon: "drumstick", items: [
    { n: "Coscia di pollo marinata", p: "10.00" }
  ]},

  { cat: "Frutti di mare crudi", icon: "fish", items: [
    { n: "Calamaro piccante", p: "10.00" },
    { n: "Gamberi argentini", p: "8.00" },
    { n: "Seppie", p: "8.00" },
    { n: "Ciuffi di totano", p: "8.00" }
  ]},

  { cat: "Salsiccia taiwanese", icon: "flame", items: [
    { n: "Salsiccia di suino originale", p: "6.00" },
    { n: "Salsiccia di pollo con mais", p: "6.00" },
    { n: "Salsiccia mista", p: "6.00" }
  ]},

  { cat: "Verdure", icon: "leaf", items: [
    { n: "Mais con formaggio", p: "5.00" },
    { n: "Verdure miste a fette", p: "8.00" },
    { n: "Funghi", p: "5.00" },
    { n: "Patate a fette", p: "3.00" },
    { n: "Patate dolci a fette", p: "5.00" },
    { n: "Zucchine a fette", p: "3.00" },
    { n: "Peperoni", p: "3.00" }
  ]},

  { cat: "Menu fisso", icon: "bowl", items: [
    { n: "Menu con manzo", p: "15.00", d: "3 piatti: pancetta di manzo, zuppa piccante di kimchi, riso bianco" },
    { n: "Menu con maiale piccante", p: "15.00", d: "3 piatti: pancetta di maiale piccante, zuppa di alghe e tofu, riso bianco" },
    { n: "Menu verdure miste", p: "12.00", d: "3 piatti: verdure miste, zuppa piccante di kimchi, riso bianco" }
  ]},

  { cat: "Soju coreano", icon: "bottle", items: [
    { n: "Soju Jinro Is Back 16% 350ml", p: "10.00", note: "esaurito" },
    { n: "Soju Classico 16.5% 350ml", p: "10.00" },
    { n: "Soju Originale 20.1% 350ml", p: "10.00" },
    { n: "Soju all'uva 13% 350ml", p: "10.00" },
    { n: "Soju al mirtillo 12% 350ml", p: "10.00" },
    { n: "Soju al mango 12% 350ml", p: "10.00" },
    { n: "Soju alla pesca 13% 350ml", p: "10.00" },
    { n: "Soju alla prugna 13% 350ml", p: "10.00" },
    { n: "Soju alla fragola 13% 350ml", p: "10.00" },
    { n: "Soju al bicchiere", p: "2.00" }
  ]},

  { cat: "Hwayo · distillati premium coreani", icon: "bottle", items: [
    { n: "Hwayo 25%", p: "40.00", d: "Soju dal gusto puro e profondo, realizzato con il miglior riso coreano dai maestri distillatori Kwangjuyo" },
    { n: "Hwayo 41%", p: "40.00" },
    { n: "Hwayo 53%", p: "60.00" }
  ]},

  { cat: "Bibite", icon: "cup", items: [
    { n: "Acqua naturale 0.5L", p: "2.00" },
    { n: "Acqua naturale 0.75L", p: "3.00" },
    { n: "Acqua frizzante 0.5L", p: "2.00" },
    { n: "Acqua frizzante 0.75L", p: "3.00" },
    { n: "Succo di pera coreana 238ml", p: "3.50" },
    { n: "Succo d'uva coreano 238ml", p: "3.50" },
    { n: "Succo di cocco palm coreano 238ml", p: "3.50" },
    { n: "Bevanda di riso coreano 500ml", p: "4.00" },
    { n: "Tè d'orzo coreano 500ml", p: "4.00" },
    { n: "Coca Cola 330ml", p: "3.50" },
    { n: "Coca Zero 330ml", p: "3.50" },
    { n: "Fanta 330ml", p: "3.50" },
    { n: "Tè alla pesca 330ml", p: "3.00" },
    { n: "Tè al limone 330ml", p: "3.00" },
    { n: "Bevanda alle erbe cinese 310ml", p: "3.00" }
  ]},

  { cat: "Birre", icon: "bottle", items: [
    { n: "Birra coreana Cass 330ml", p: "5.00", d: "4.5%" },
    { n: "Birra coreana Terra 330ml", p: "5.00", d: "4.6%" },
    { n: "Birra coreana Krush 500ml", p: "7.00", d: "4.5%" },
    { n: "Birra Tsingtao 640ml", p: "6.00" },
    { n: "Birra Asahi 500ml", p: "6.00" },
    { n: "Birra Kirin Ichiban", p: "6.00" },
    { n: "Birra Sapporo 500ml", p: "6.00" },
    { n: "Birra Moretti 660ml", p: "5.00" }
  ]},

  { cat: "Vino", icon: "bottle", items: [
    { n: "Makgeolli originale 750ml", p: "10.00", d: "Vino di riso coreano 3%" },
    { n: "Makgeolli alla pesca 750ml", p: "10.00", d: "3%" },
    { n: "Makgeolli all'uva 750ml", p: "10.00", d: "3%" },
    { n: "Calice vino rosso", p: "3.00" },
    { n: "Calice vino bianco", p: "3.00" },
    { n: "Calice prosecco", p: "3.00" },
    { n: "Spritz Aperol", p: "4.00" },
    { n: "Spritz Campari", p: "4.00" },
    { n: "Adrien Romet", p: "30.00" },
    { n: "Prosecco Ribolla Gialla Brut", p: "20.00" },
    { n: "Prosecco Metodo Classico Brut DOC", p: "25.00" },
    { n: "Prosecco Ca' Ernesto DOC Rosé", p: "20.00" },
    { n: "Vino bianco Sauvignon", p: "20.00" },
    { n: "Vino bianco Ribolla Gialla", p: "20.00" },
    { n: "Vino bianco Chardonnay", p: "20.00" },
    { n: "Merlot Trevenezie", p: "15.00" }
  ]},

  { cat: "I dolci", icon: "dessert", items: [
    { n: "Mochi gelato", p: "6.00", d: "2 pezzi gusto misto, senza glutine" },
    { n: "Hotteok", p: "5.50", d: "Pancake coreano ripieno di zucchero di canna e semi misti" },
    { n: "Dorayaki al cioccolato", p: "4.00", d: "Pancake al cioccolato giapponese" },
    { n: "Ispirazione mandarino", p: "6.00" },
    { n: "Croccante mandorle", p: "6.00" },
    { n: "Croccante pistacchio", p: "6.00" },
    { n: "Croccante amarena", p: "6.00" },
    { n: "Meringa", p: "6.00" },
    { n: "Soufflé cioccolato", p: "6.00" },
    { n: "Soufflé pistacchio", p: "6.00" },
    { n: "Soufflé black & white", p: "6.00" },
    { n: "Semifreddo torroncino", p: "6.00" },
    { n: "Tartufo classico", p: "6.00" },
    { n: "Tartufo bianco", p: "6.00" },
    { n: "Coppa stracciatella", p: "6.00" },
    { n: "Cocco ripieno", p: "6.00" },
    { n: "Panda", p: "6.00", d: "Gelato alla vaniglia" },
    { n: "Semifreddo al Vecchio Amaro del Capo", p: "6.00" }
  ]},

  { cat: "Caffè", icon: "cup", items: [
    { n: "Caffè espresso", p: "1.50" },
    { n: "Caffè macchiato", p: "1.50" },
    { n: "Caffè lungo", p: "1.50" },
    { n: "Decaffeinato", p: "1.60" },
    { n: "Cappuccino", p: "1.60" },
    { n: "Caffè corretto", p: "1.80", d: "Grappa: Vecchia Romagna o Grappa Piave" }
  ]},

  { cat: "Digestivi", icon: "bottle", items: [
    { n: "Hwayo al bicchiere 25%", p: "4.00" },
    { n: "Hwayo al bicchiere 41%", p: "4.00" },
    { n: "Hwayo al bicchiere 53%", p: "5.00" },
    { n: "Bicchiere di soju", p: "2.00" },
    { n: "Limoncello", p: "2.50" },
    { n: "Vecchia Romagna", p: "2.50" },
    { n: "Grappa Piave", p: "2.50" },
    { n: "Sambuca", p: "2.50" },
    { n: "Montenegro", p: "2.50" },
    { n: "Jägermeister", p: "2.50" },
    { n: "Disaronno", p: "2.50" },
    { n: "Branca Menta", p: "2.50" },
    { n: "Vecchio Amaro del Capo", p: "2.50" },
    { n: "Liquirizia", p: "2.50" }
  ]}
];

// ===== Doodle icons (hand-drawn style, inherit color) =====
var MENU_ICONS = {
  leaf: '<path d="M20 6C12 14 12 28 20 34C28 28 28 14 20 6Z"/><path d="M20 8V32"/>',
  bowl: '<path d="M6 20h28a14 14 0 01-28 0z"/><path d="M16 9c-1 2 1 3 0 5M24 9c-1 2 1 3 0 5"/>',
  flame: '<path d="M20 6c4 6 8 8 8 15a8 8 0 11-16 0c0-3 1-5 3-7 1 3 3 3 3 1 0-3-1-6 2-9z"/>',
  drumstick: '<path d="M24 7c5 0 9 3 9 8 0 4-3 7-8 7-2 0-3 1-4 2l-9 9"/><circle cx="13" cy="31" r="6"/><path d="M9 35l-3 2M14 36l-2 3"/>',
  fish: '<path d="M8 20c5-7 14-7 19 0-5 7-14 7-19 0z"/><path d="M27 20l6-5v10z"/><circle cx="14" cy="18" r="1.4" fill="currentColor"/>',
  bottle: '<path d="M17 6h6v5l3 4v17a2 2 0 01-2 2h-8a2 2 0 01-2-2V15l3-4z"/><path d="M15 22h10"/>',
  cup: '<path d="M9 12h18v8a9 9 0 01-18 0z"/><path d="M27 14h3a3 3 0 010 6h-3"/><path d="M14 6c-1 2 1 2 0 4M20 6c-1 2 1 2 0 4"/>',
  dessert: '<path d="M14 16h12l-6 16z"/><path d="M14 16a6 6 0 0112 0"/><circle cx="20" cy="9" r="3"/>'
};

// ===== Render menu into the modal =====
(function () {
  var host = document.getElementById('menuCats');
  if (!host || typeof MENU === 'undefined') return;

  var html = '';
  MENU.forEach(function (group) {
    var icon = MENU_ICONS[group.icon] || MENU_ICONS.bowl;
    html += '<section class="menu-cat">';
    html += '<h3><span class="doodle" aria-hidden="true"><svg viewBox="0 0 40 40">' +
            '<g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
            icon + '</g></svg></span><span>' + group.cat + '</span></h3>';
    html += '<ul>';
    group.items.forEach(function (it) {
      var sold = it.note ? ' menu-sold' : '';
      html += '<li class="menu-item' + sold + '">';
      html += '<div class="mi-row"><span class="mi-name">' + it.n +
              (it.note ? ' <em class="mi-note">(' + it.note + ')</em>' : '') +
              '</span><i></i><span class="price">€' + it.p + '</span></div>';
      if (it.d) html += '<p class="mi-desc">' + it.d + '</p>';
      html += '</li>';
    });
    html += '</ul></section>';
  });
  host.innerHTML = html;
})();
