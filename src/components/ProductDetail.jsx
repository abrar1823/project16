import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Rating, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";

export const ProductDetail = () => {
  const navigate = useNavigate();
  const selectdata = useSelector((state) => state.pdetailReducer.details);

  React.useEffect(() => {
    if (selectdata.length === 0) {
      navigate("/prodlist");
    }
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <img
            style={{ width: 350, height: 350 }}
            src={selectdata.image}
            alt=""
          />
          <br />
          <Button
            sx={{ height: 55, width: 200, margin: 2 }}
            startIcon={<ShoppingCartIcon />}
            variant="contained"
            color="warning"
          >
            ADD Cart
          </Button>
          <Button
            sx={{ height: 55, width: 200 }}
            startIcon={<BoltIcon />}
            variant="contained"
            color="warning"
          >
            Buy
          </Button>
        </Grid>
        <Grid item xs={7} sx={{ padding: "50px" }}>
          <h3>{selectdata.title}</h3>
          <h3>Rs.{selectdata.price}</h3>
          <p>{selectdata.description}</p>
        </Grid>
      </Grid>
    </>
  );
};
