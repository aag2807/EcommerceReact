import React from "react";
import { Grid } from "@material-ui/core";
import Product from '../Product/Product';

const products = [
  {id: 1, name: 'product1', description:'some random product', price: '$10', image:"https://source.unsplash.com/random"},
  {id: 2, name: 'product2', description:'some random product', price: '$10', image:"https://source.unsplash.com/random"},
  {id: 3, name: 'product3', description:'some random product', price: '$10', image:"https://source.unsplash.com/random"},
  {id: 4, name: 'product4', description:'some random product', price: '$10', image:"https://source.unsplash.com/random"},
]

const Products = () => {
  return (
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map( product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  </main>
  )
};

export default Products;
