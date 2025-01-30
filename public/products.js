document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});

async function getProducts() {
  try {
    const productsResponse = await fetch("https://fakestoreapi.com/products");
    const allProductsDetails = await productsResponse.json();
    console.log(allProductsDetails);
    
    
    const mainDiv = document.getElementById("main-div");
    console.log(mainDiv);

    allProductsDetails.forEach(product => {
      mainDiv.innerHTML += `
<div class=" flex gap-10   justify-center p-4 items-stretch">
  <div class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all ">
    <div class="relative mt-2.5">
      <img 
        src="${product.image}"
        alt="Product"
        class="w-full h-54 object-contain "
      />
      <span class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        Sale
      </span>
    </div>
    
    <div class="p-5 space-y-4">
      <div>
        <h3 class="text-xl font-bold text-gray-900 line-clamp-1">${product.title}</h3>
        <p class="text-gray-500 mt-1 line-clamp-2">${product.description}</p>
      </div>
      
      <div class="flex justify-between items-center">
        <div class="space-y-1">
          <p class="text-2xl font-bold text-gray-900">$${product.price}</p>
          <p class="text-sm text-gray-500 line-through">$69.99</p>
        </div>
        
        <div class="flex items-center gap-1">
          <div class="text-yellow-400"></div>
          <div class="text-gray-300"></div>
          <span class="text-sm text-gray-600 ml-1"></span>
        </div>
      </div>

      <button class="w-full bg-cyan-600 hover:bg-cyan-700 active:scale-90  text-white font-medium py-3 rounded-lg transition-all">
        Add to Cart
      </button>
      <button class="w-full bg-cyan-600 hover:bg-cyan-700 active:scale-90  text-white font-medium py-3 rounded-lg transition-all">
        Buy Now
      </button>
    </div>
  </div>
</div>`
      
    });

  } catch (error) {
    console.log('unable to fetch', error)
  }
   
}





