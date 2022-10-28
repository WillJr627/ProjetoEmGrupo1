const Items =[
    {
     id: 0,
     nome: "Brinco dourado",
     img: "brinco3.jpg",
     quantidade: 0
    },
    {
     id: 1,
     nome: "Anel dourado com orelha",
     img: "anel4.jpg",
     quantidade: 0
    },
    {
     id: 2,
     nome: "Pingente dourado gravatinha",
     img: "pingente3.jpg",
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