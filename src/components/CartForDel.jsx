import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pcartReducer } from "../state/reducer/pcartReducer";

export const CartForDel = () => {
  // const cartdata = useSelector((state) => state.pcartReducer.cart);
  const [data, setData] = useState(
    useSelector((state) => state.pcartReducer.cart)
  );

  const handelDelete = (index) => {
    const result = data.filter((elem, i) => i !== index);
    setData(result);
  };

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => {
        return (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <img
                    src={item.image}
                    style={{ width: 100, height: 100 }}
                    alt=""
                  />
                  <Grid item xs={2}>
                    <h2>Rs.{item.price}</h2>
                    <h2>{item.title}</h2>
                  </Grid>
                  <Grid item xs={6}>
                    {item.description}
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      onClick={() => handelDelete(index)}
                      variant="contained"
                      fullWidth
                      color="error"
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
