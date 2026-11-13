//
let cartContainer = document.getElementById("cartesContainer");
let catigoriesContainer = document.getElementById("catigoriesContainer")
console.log(cartContainer)
console.log(catigoriesContainer);



async function bringData() {
    const response = await fetch("http://localhost:3000/api/products");
    console.log(response.status);

    if (!response.ok) {
        const problem = await response.json();
        console.log(problem.message);
        return;
    }
    const products = await response.json();
    console.log(products);
    creat_cartes(products);
    
}
// const newProduct = bringData();
// creat_cartes(newProduct)


bringData();

function creat_cartes(products) {
    products.forEach(item => {
        cartContainer.innerHTML += `<div class=" h-[500px] w-[24%] bg-amber-50 rounded-3xl flex flex-col items-center gap-[10px]">
                        <div class="h-[0%]"></div>
                        <div class="relative w-[90%] h-[60%] bg-blue-700 rounded-2xl ">
                            <img src=http://localhost:3000/${item.image} alt="" class="absolute w-[100%] h-[100%] bg-blue-700 rounded-2xl">
                            <div class="absolute flex gap-[140px] mt-4 ml-4">
                                <span class=" h-[40px] bg-gray-100 border border-blue-900 rounded-xl flex justify-center items-center p-4">HHHHHH</span>
                                <div class=" w-[50px] h-[50px] rounded-xl =">
                                    <button class=" w-[100%] h-[100%] bg-amber-50 rounded-xl border border-blue-900 flex
                                    items-center justify-center "><i class="ph ph-heart text-3xl "></i></button>
                                </div>
                            </div>

                        </div>
                        <div class="flex h-[30px] w-[80%] items-center justify-between">
                            <div class="h-[30px] p-4 bg bg-gray-100 flex justify-center items-center rounded-xl text-blue-900" >${item.categoryName}</div>
                            <p class="text-amber-400 font-bold"><i class="ph-fill ph-star"></i> 4.9 <span class="text-zinc-500 font-semibold">(128)</span></p>
                        </div>
                        <br>
                        <h1 class="w-[80%] font-semibold text-xl">${item.name}</h1>
                        <div class="w-[80%] flex items-center justify-between">
                            <div class="text-xl text-blue-900 ">${item.price} $</div>
                            <button class="h-[40px] w-[110px] bg-black text-amber-50 rounded-xl text-[20px] flex justify-center items-center">Add to <i class="bi bi-bag-dash text-2xl"></i></button>
                        </div>

                        <div class="h-[0%]"></div>
                    </div>`

    });
}

