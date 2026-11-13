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
    PriceSort(products);
    PriceFilter(products);
    choseByCategorie(products);
    search_input(products);

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



// this is just for display categorie names
fetch("http://localhost:3000/api/categories")
    .then(response => {
        console.log(response.status);
        return response;
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(problem => {
                throw new Error(problem.message);
            });
        }

        return response;
    })
    .then(response => {
        const categ = response.json();
        return categ

    })
    .then(categ => {
        console.log(categ)
        add_Categories(categ);
    })
    .catch(err => console.error(err));




function add_Categories(categ) {
    categ.forEach(item => {
        catigoriesContainer.innerHTML += `<button class=" text-xl h-[60%] rounded-xl p-2" data-id="${item.id}">${item.name}</button>`
    })

};



// functions sort par prix 
let sortrPrix = document.getElementById("sortrPrix");
let filterPrix = document.getElementById("filterPrix");

function PriceFilter(products) {
    sortrPrix.addEventListener('change', () => {
        if (sortrPrix.value == "Default") creat_cartes(products);
        if (sortrPrix.value == "price:low to high") {
            cartContainer.innerHTML = "";
            let tab = products.sort((a, b) => a.price - b.price);
            creat_cartes(tab);

        }
        if (sortrPrix.value == "price:high to low") {
            cartContainer.innerHTML = "";
            let tab = products.sort((a, b) => b.price - a.price);
            creat_cartes(tab);

        }
    })
}

//filter par maxprice manuellement pas d'usage de fetch


// function PriceSort(products) {
//     filterPrix.addEventListener('change', () => {
//         let tab = [];
//         if (filterPrix.value == "Default") {
//              cartContainer.innerHTML = "";
//              creat_cartes(products);
//         }
//         if (filterPrix.value == "10") {
//             cartContainer.innerHTML = "";
//             products.forEach((item) => {
//                 if (item.price <= 10) { tab.push(item); }

//             })
//             console.log(tab);
//             creat_cartes(tab)
//         }
//         if (filterPrix.value == "20") {
//             cartContainer.innerHTML = "";
//             products.forEach((item) => {
//                 if (item.price <= 20) { tab.push(item); }

//             })
//             creat_cartes(tab)
//         }
//         if (filterPrix.value == "35") {
//             cartContainer.innerHTML = "";
//             products.forEach((item) => {
//                 if (item.price <= 35) { tab.push(item); }

//             })
//             creat_cartes(tab)
//         }

//     })
// }


let All_products = document.getElementById("All-products")
// filter par categories manuellement pas d'usage de fetch


// function choseByCategorie(products) {
//     catigoriesContainer.addEventListener('click', (event) => {
//         const btn = event.target;

//         let tab = [];
//         console.log(btn.tagName);
//         console.log(btn)


//         if (btn.tagName == "BUTTON") {
//             if (btn.dataset.id != "AllProducts") {
//                 console.log(btn.dataset.id);

//                 cartContainer.innerHTML = "";
//                 products.forEach((item) => {
//                     if (item.categoryName == btn.textContent) {
//                         tab.push(item);
//                     }
//                 })
//                 creat_cartes(tab);
//             }
//             else{
//                 cartContainer.innerHTML = "";
//                 console.log(products)
//                 creat_cartes(products);
//             }
//         }

//     })
// }

// filter par categories  avec usage de fetch

let apiProducts = "http://localhost:3000/api/products";


async function choseByCategorie(products) {
    catigoriesContainer.addEventListener('click', async (event) => {
        const btn = event.target;

        if (btn.tagName == "BUTTON") {
            if (btn.dataset.id != "AllProducts") {
                console.log(btn.dataset.id);

                const data = await fetch(apiProducts + `?categoryId=${btn.dataset.id}`);
                if (!data.ok) {
                    const problem = await data.json();
                    console.log(problem.message);
                    return;
                }
                const products = await data.json();
                cartContainer.innerHTML = "";
                creat_cartes(products);

            }
            else {
                cartContainer.innerHTML = "";
                console.log(products)
                creat_cartes(products);
            }
        }

    })
}


//filter par maxprice using de fetch



async function PriceSort(products) {
    filterPrix.addEventListener('change', async () => {


        if (filterPrix.value == "Default") {
            cartContainer.innerHTML = "";
            creat_cartes(products);
        }
        else {
            cartContainer.innerHTML = "";
            const data = await fetch(apiProducts + `?maxPrice=${filterPrix.value}`)
            if (!data.ok) {
                const problem = await data.json();
                console.log(problem.message);
            }
            const product = await data.json();
            creat_cartes(product);

        }


    })
}



// search par titre using fetch 
let searchinput = document.getElementById("searchInput");
console.log(searchinput);
let buttonSearch = document.getElementById("buttonSearch");
console.log(buttonSearch);

async function search_input(products) {
    buttonSearch.addEventListener('click', async () => {
        if (searchinput.value.trim().length == 0) {
            console.log(searchinput.value.trim().length);
            cartContainer.innerHTML = "";
            creat_cartes(products);
        }
        else {
            const data = await fetch(apiProducts + `?search=${searchinput.value}`);
            if (!data.ok) {
                const probleme = await data.json();
                console.log(probleme.message);
            }
            const product = await data.json();
            console.log(product)
            cartContainer.innerHTML = "";
            creat_cartes(product);
        }
        searchinput.value = "";
    })

}


//in stock using fetch

const toggleSwitch = document.getElementById('switch-component-blue');
async function filterParStock() {
    toggleSwitch.addEventListener('change',async (e)=> {
        const isChecked = e.target.checked;
        console.log(isChecked);
        if(isChecked){
            const data = await fetch(apiProducts + `?inStock=true`);
            if (!data.ok) {
                const probleme = await data.json();
                console.log(probleme.message);
            }
            const product = await data.json();
            console.log(product)
            cartContainer.innerHTML = "";
            creat_cartes(product);
        }
        else{
           const data = await fetch(apiProducts + `?inStock=false`);
            if (!data.ok) {
                const probleme = await data.json();
                console.log(probleme.message);
            }
            const product = await data.json();
            console.log(product)
            cartContainer.innerHTML = "";
            creat_cartes(product); 
        }


    })

}
filterParStock()




