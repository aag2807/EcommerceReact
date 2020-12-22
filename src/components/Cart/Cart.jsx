import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CardItem from "./CartItem/CardItem";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">No Items in the shopping Cart.</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <CardItem item={product} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4">
          Subtotal: ${cart.subtotal.formatted}
        </Typography>
        <div>
          <Button
            color="secondary"
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
          >
            Empty Cart
          </Button>
          <Button
            color="primary"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
