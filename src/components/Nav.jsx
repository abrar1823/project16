import { Badge, Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { navdata } from "./navdata";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Nav = () => {
  const cartdata = useSelector((state) => state.pcartReducer.cart);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {navdata.map((item) => (
            <Grid item xs={2}>
              <Link to={item.path}>
                <Button variant="contained" fullWidth color="success">
                  {item.title}
                </Button>
              </Link>
            </Grid>
          ))}
          <Grid item xs={1}>
            <Link to="/cart">
              <Badge badgeContent={cartdata && cartdata.length}>
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Nav;
