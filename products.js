// product page
let page_products = document.getElementById("main");

let data = JSON.parse(localStorage.getItem("Products"))
console.log(data);

    
    data.forEach((element,index) => {
        
        //product name
        let prod_name = document.createElement("p")
        prod_name.innerHTML = element.name;
    
        //product category

        let prod_category = document.createElement("p")
        prod_category.innerHTML = element.category


        //imgsrc 
        let prod_img = document.createElement("img");
        prod_img.src = element.img_src

        //price 
        let prod_price = document.createElement("h5");
        prod_price.innerHTML = "Rs " + element.price

        //gender

        let gender = document.createElement("p")
        gender.innerHTML = element.gender

        // sold

        let sold = document.createElement("p")
        sold.innerHTML = element.sold

        let remove = document.createElement("button");
        remove.innerHTML = "Remove Item";

        let solds = document.createElement("button");
        solds.innerHTML = "Sold";
        if(element.sold == "true") {
            solds.style.backgroundColor = "Red";
            solds.style.color = "white";
        }
        else{
            solds.style.backgroundColor = "green";
            solds.style.color = "white"
        }

        page_products.append(prod_name, prod_category, prod_img, prod_price, gender,sold, remove, solds);
        
    });

