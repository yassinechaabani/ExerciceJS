let Products=[
    { 
        ProductId: 1,
        ProductName: "Product1",
        ProductPrice: 10
    },
    { 
        ProductId: 2,
        ProductName: "Product2",
        ProductPrice: 20
    },
    { 
        ProductId: 3,
        ProductName: "Product3",
        ProductPrice: 30
    },

];
for(i=0;i<Products.length;i++){
    let p =Products[i];
    console.log("ProductId: "+ p.ProductId);
    console.log("ProductName: "+ p.ProductName);
    console.log("ProductPrice: "+ p.ProductPrice);
    console.log('--------------------');
}
