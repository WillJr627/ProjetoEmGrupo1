const Items =[
    {
     id: 0,
     nome: "Brinco gatinho na lua",
     img: "brinco1.jpg",
     quantidade: 0
    },
    {
     id: 1,
     nome: "Brinco perolado",
     img: "brinco2.jpg",
     quantidade: 0
    },
    {
     id: 2,
     nome: "Brinco dourado",
     img: "brinco3.jpg",
     quantidade: 0
    },
    {
      id: 3,
      nome: "Brinco gatinho com diamante",
      img: "brinco4.jpg",
      quantidade: 0
     },
     {id: 4,
     nome: "Anel prata com diamante",
     img: "anel1.jpg",
     quantidade: 0
    },
    {
     id: 5,
     nome: "Anel prata com orelha",
     img: "anel2.jpg",
     quantidade: 0
    },
    {
     id: 6,
     nome: "Anel dourado com diamante",
     img: "anel3.jpg",
     quantidade: 0
    },
    {
      id: 7,
      nome: "Anel dourado formato de gato",
      img: "anel4.jpg",
      quantidade: 0
     },
     {
      id: 8,
      nome: "Pingente ametista",
      img: "pingente1.jpg",
      quantidade: 0
     },
     {
       id: 9,
       nome: "Pingente couple|casal",
       img: "pingente2.jpg",
       quantidade: 0
      },
      {id: 10,
      nome: "Pingente dourado gravatinha",
      img: "pingente3.jpg",
      quantidade: 0
     },
     {
      id: 11,
      nome: "Pingente prata",
      img: "pingente4.jpg",
      quantidade: 0
     },
    
     

 ]
     
 function inicializarLoja(){
 
var   containerProduto = document.getElementById("Produtos");
Items.map((val)=>{
  containerProduto.innerHTML+= `
  <div class= "produto-single"> 
      <img src="`+val.img+`" />
      <p>`+val.nome+`</p>
      <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>
  </div>
  `;
})
  }
  inicializarLoja();

  atualizarCarrinho = () => {

    var   containerCarrinho = document.getElementById("Carrinho");
    containerCarrinho.innerHTML = "";
    Items.map((val)=>{
        if(val.quantidade > 0){
      containerCarrinho.innerHTML+= `
     <div class="info-single-checkout">
     <p style="float:left;">Produto: `+val.nome+`</p>
     <p style="float:right;">Quantidade: `+val.quantidade+`</p>
     <div style="clear:both"></div>
    
    </div>
      `;
        }
        
    })
}

var links = document.getElementsByTagName("a");

   for(var i = 0; i < links.length; i++){
   links[i].addEventListener("click",function(){
      let key = this.getAttribute("key");
      Items[key].quantidade++;
      atualizarCarrinho();
      return false;
   })
   }