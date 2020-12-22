import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import { AddShoppingCartOutlined } from "@material-ui/icons";
import useStyles from "./styles.js";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: product.descriptio }}
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" 
        onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCartOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
