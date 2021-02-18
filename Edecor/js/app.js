const BASE_URL = `http://localhost:1337`;

async function carregarDados(colecao) {
    const resposta = await fetch(BASE_URL + colecao)
    const dados = await resposta.json();
    return dados;
}
////////////////////////////////////////////////////////////////////////////////////////////////
async function buscarProdutos() {
    const products = await carregarDados(`/products`);
    return products;
}

async function buscarProdutosEspecificos(chave, valor) {
    const buscarProdutosEmPromocao = await carregarDados(`/products?${chave}=${valor}`);
    return produtosEmPromocao;
}
////////////////////////////////////////////////////////////////////////////////////////////////
async function buscarCategorias() {
    const categorias = await carregarDados(`/categories`);
    return categorias;
}

async function buscarProdutosPorCategoria(categoria) {
    const categorias = await carregarDados(`/categories?slug=${categoria}`)
    return categorias;
}
////////////////////////////////////////////////////////////////////////////////////////////////
async function incluirProdutosEmPromocaoNoDOM() {
    const produtos = await buscarProdutos(),
        containerPromocao = document.querySelector(".new__container");

    for(const produto of produtos){
        const { name, price, image} = produto,
        preco = price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
        console.log(name);
        console.log(preco);
        console.log(image.url);

        containerPromocao.innerHTML += `
        <div class="new__mens">
            <img src="${BASE_URL}${image.url}" alt="" class="new__mens-img">
            <h3 class="new__title">${name}</h3>
            <span class="new__price">${preco}</span>
            <a href="#" class="button-light">Veja as opções <i class="bx bx-right-arrow-alt button-icon"></i></a>
          </div>
        `
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////////////
async function mostrarGarrafas() {
    const produtos = await buscarProdutosPorCategoria(`/categories?slug=${garrafa}`),
        containerGarrafas = document.querySelector(".featured__container");

    for(const produto of produtos){
        const { name, price, image} = produto,
        preco = price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
        console.log(name);
        console.log(preco);
        console.log(image.url);

        containerGarrafas.innerHTML += `
        <div class="new__mens">
            <img src="${BASE_URL}${image.url}" alt="" class="new__mens-img">
            <h3 class="new__title">${name}</h3>
            <span class="new__price">${preco}</span>
            <a href="#" class="button-light">Veja as opções <i class="bx bx-right-arrow-alt button-icon"></i></a>
          </div>
        `
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////////////
async function mostrarPlantas() {
    const produtos = await buscarProdutosPorCategoria(),
        containerPlantas = document.querySelector(".featured section");

    for(const produto of produtos){
        const { name, price, image} = produto,
        preco = price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
        console.log(name);
        console.log(preco);
        console.log(image.url);

        containerPlantas.innerHTML += `
        <div class="new__mens">
            <img src="${BASE_URL}${image.url}" alt="" class="new__mens-img">
            <h3 class="new__title">${name}</h3>
            <span class="new__price">${preco}</span>
            <a href="#" class="button-light">Veja as opções <i class="bx bx-right-arrow-alt button-icon"></i></a>
          </div>
        `
    }
    
}



incluirProdutosEmPromocaoNoDOM()
buscarProdutos();
buscarCategorias();
buscarProdutosPorCategoria();