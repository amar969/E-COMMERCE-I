let form = document.querySelector(".form")

let p = []
form.addEventListener("submit", function(e){
    e.preventDefault();


    // Product name
    let pname = document.getElementById("pname").value;
    console.log(pname);


    //Category
    let category = document.getElementById("category").value;
    console.log(category);

    //img
    let img_url = document.getElementById("img_url").value;
    console.log(img_url);

    //price
    let price = document.getElementById("price").value;
    console.log(price);

    //gender
    let gender = document.getElementById("gender").value;
    console.log(gender);

    //sold
    let sold = document.getElementById("sold").value;
    console.log(sold);

    let product = {
        name: pname,
        category: category,
        img_src: img_url,
        price: price,
        gender: gender,
        sold: sold
    }

    p.push(product)
    
    let a = p
    console.log(a)
    localStorage.setItem("Products", JSON.stringify(a))
    let data = JSON.parse(localStorage.getItem("Products"))
    console.log(data);
    
})



