const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

                    // Mapeia os produtos às suas imagens
                    const productImages = {
                        'Produto 1': 'https://www.pngitem.com/pimgs/m/772-7720817_banho-e-tosa-png-3-png-image.png',
                        'Produto 2': 'produto2.jfif',
                        'Produto 3': 'produto3.jfif'
                    };
            
                    // Exibe os detalhes dos produtos selecionados
                    const productDetails = selectedProducts.join(', ');
                    document.getElementById('item_titulo').textContent = `Você selecionou: ${item_titulo}`;
            
                    const imagesContainer = document.getElementById('productImages');
                    selectedProducts.forEach(container_produtos => {
                        const img = document.createElement('img');
                        img.src = productImages[container_produtos];
                        img.alt = container_produtos;
                        img.style.maxWidth = '200px'; // ajuste o tamanho conforme necessário
                        imagesContainer.appendChild(img);
                    });
            
                    function goBack() {
                        window.location.href = 'produtos.html';
                    }




//carrinho
/*const selecionarprodimg = document.getElementsByClassName('imgg');
const selecionarprodnome = document.getElementsByClassName('nome');
const selecionarprodpreco = document.getElementsByClassName('preco');

let cardProd = `<div class="item_carrinho">
                    <img class="item_imagem" src="https://www.pngitem.com/pimgs/m/772-7720817_banho-e-tosa-png-3-png-image.png" alt="Produto">
                    <div class="item_info">
                        <h3>Banho e Tosa</h3>
                        <p>R$ 45,00</p>
                        <label for="quantidade">Quantidade:</label>
                        <input type="number" id="quantidade" name="quantidade" value="1" min="1">
                    </div>
                    <div class="item_total">
                        <p>R$ 45,00</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>` ;

                if(document.getElementById('demo') == null){
                    document.getElementById('demo').innerHTML += cardProd;
                }       
                else{
                    document.getElementById('demo').innerHTML += cardProd;
                }

                document.getElementsByClassName('imgg').src =imgg;
                document.getElementsByClassName('nome').innerHTML = '${nome}';
                document.getElementsByClassName('preco').innerHTML = "${preco}";

                function goback(){
                    window.location.href = 'produtos.html';
                }*/

                    