import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CardItem from "./CartItem/CardItem";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      No Items in the shopping Cart.
      <div style={{ alignText: "center" }}>
        <Link to="/" className={classes.link}>
          Add something and then come back !
        </Link>
      </div>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <CardItem 
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              item={product}
              />
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
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            color="primary"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button >
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
