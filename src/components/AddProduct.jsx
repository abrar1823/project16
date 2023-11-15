import React, { useState } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [prod, setProd] = useState("");

  const handleSubmit = () => {
    const type = "ADD_PROD";
    const payload = prod;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter Product Name"
              onChange={(e) => setProd(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 55 }}
              color="success"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
