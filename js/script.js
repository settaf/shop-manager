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
    

}
// const newProduct = bringData();
// creat_cartes(newProduct)


bringData();
