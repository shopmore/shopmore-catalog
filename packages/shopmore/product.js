function main(args) {
    console.log(args)
    let product =  {
        "idproduct": "01",
        "name": "T-shirt",
        "price": 10.00,
        "description": "White T-shirt",
        "model":"Classic",
        "size": ["Small","Medium","Large"],
        "urlimage":"/catalog/Bimbo/camiciabianca.png",
        "shopwindow": 1
    }

    let id = args.id || ""
    
    if(id == "1")
        product.name = "Maglietta"
    else if(id == "2") 
        product.name = "Camicia"
    else if(id == "3") 
        product.name = "Pantaloni"
    else 
        product.name = "Articolo codice "+args.id   
    
    return {
        body: {
            "product": product
        }
    }
}
