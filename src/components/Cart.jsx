import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.pcartReducer.cart);

  const handelDelete = (index) => {
    const type = "REMOVE";
    const payload = index;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    if (data.length == 0) {
      navigate("/prodlist");
    }
  }, [data]);

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
                    <h2>{item.title.slice(0, 20)}</h2>
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
