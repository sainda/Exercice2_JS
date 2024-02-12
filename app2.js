let product=[
    {
        Product_ID: 1 ,
        Product_Name: 1 ,
        Product_Price: 10
    },
    {
        Product_ID: 2 ,
        Product_Name: 2 ,
        Product_Price: 20
    },
    {
        Product_ID: 3 ,
        Product_Name: 3 ,
        Product_Price: 30
    },
    {
        Product_ID: 4 ,
        Product_Name: 4 ,
        Product_Price: 40
    },
];
for(let i=0; i<4; i++ ){
    let prod = product[i];
    console.log("Product_ID: "+ prod.Product_ID);
    console.log("Product_Name: "+ prod.Product_Name);
    console.log("Product_Price: "+ prod.Product_Price);
    console.log('--------------------');
}