import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  const handleaddCart = (item) => {
    const type = "ADD_CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  const handleDetail = (item) => {
    const type = "P_DETAIL";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
    navigate("/proddetail");
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <img
                  onClick={() => handleDetail(item)}
                  src={item.image}
                  style={{ width: 250, height: 250 }}
                  alt=""
                />
                <h1>{item.price}</h1>
                <h3>{item.title.slice(0, 20) + "...."}</h3>
                <Rating value={item.rating.rate} />
                <span>( {item.rating.count})</span>
                <br />
                <br />
                <Button
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleaddCart(item)}
                  variant="contained"
                  fullWidth
                >
                  ADD to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
