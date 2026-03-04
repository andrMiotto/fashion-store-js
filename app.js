const url = "https://api.escuelajs.co/api/v1";

// 4. Modo Claro / Escuro
const btnChange = document.getElementById("theme-toggle");
if (btnChange) {
    btnChange.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');

        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);

        localStorage.setItem('theme', newTheme);
    });
}





//1. Página Inicial (Função de Busca)
async function loadProductsHome() {
    try {

        const response = await fetch(`${url}/products`);

        const products = await response.json();

        const featured = products.slice(0, 3);

        renderProducts(featured, "featured-list");


    } catch (error) {

        console.error("Erro ao carregar Home:", error);
    }
}





//2. Catálogo (Função de Busca)
async function loadProductsCatalog(categoryId = "") {

    let endpoint = `${url}/products`;

    if (categoryId !== "") {
        endpoint = `${url}/products/?categoryId=${categoryId}`;
    }

    try {
        const response = await fetch(endpoint);
        const products = await response.json();
        renderProducts(products, "products-list");
    } catch (error) {
        console.error("Erro ao carregar Catálogo:", error);
    }
}





function renderProducts(productsList, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    productsList.forEach(product => {
        const productCard = `
        <article class="card">
            <div class="card-img-wrapper">
              <img src="${product.images[0]}" alt="${product.title}" class="card-img">
            </div>
            <div class="card-content">
              <span class="card-category">${product.category.name}</span>
              <h3 class="card-title">${product.title}</h3>
              <div class="card-footer">
                <span class="card-price">R$ ${product.price}</span>
                <a href="detail.html?id=${product.id}" class="btn-primary btn-small">Ver Detalhes</a>
              </div>
            </div>
        </article>`;
        container.innerHTML += productCard;
    });
}
async function loadCategories() {
    try {
        const response = await fetch(`${url}/categories`);
        const categories = await response.json();
        const select = document.getElementById("category-filter");

        if (select) {
            categories.forEach(cat => {
                const option = `<option value="${cat.id}">${cat.name}</option>`;
                select.innerHTML += option;
            });
        }
    } catch (error) {
        console.error("Erro ao carregar categorias:", error);
    }
}




async function loadDetails() {

    try {
        const urlDetails = new URLSearchParams(window.location.search);
        const id = urlDetails.get('id');


        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const item = await response.json();


        const container = document.getElementById('product-detail');



        container.innerHTML = `
    <img src="${item.images[0]}" alt="${item.title}" class="detail-img" onerror="this.src='https://placehold.co/600x400'">
    <div class="detail-info">
      <span class="card-category" style="font-size:1rem; margin-bottom:1rem; display:block;">Categoria: ${item.category.name}</span>
      <h1>${item.title}</h1>
      <div class="detail-price">R$ ${item.price}</div>
      <p class="detail-description">${item.description}</p>
      <button class="btn-primary">Adicionar ao Carrinho</button>
    </div>
    `;


    } catch (error) {
        console.log(error)
    }


}


const containerHome = document.getElementById("featured-list");
const containerMenu = document.getElementById("products-list");
const containerDetail = document.getElementById('product-detail');
const categoryElement = document.getElementById("category-filter");

if (containerHome && !containerMenu) {
    loadProductsHome();
}

if (containerMenu) {
    loadProductsCatalog();
    loadCategories();

    if (categoryElement) {
        categoryElement.addEventListener('change', (event) => {
            const idSelecionado = event.target.value;
            loadProductsCatalog(idSelecionado);
        });
    }
}

if (containerDetail) {
    loadDetails();
}