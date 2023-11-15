import React, { useState } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";

const ColorHome = () => {
  const dispatch = useDispatch();
  const [clr, setclr] = useState("");

  const handleSubmit = (bclr) => {
    const type = "ADD_COL";
    const payload = bclr;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              sx={{ height: 100, bgcolor: "green" }}
              color="success"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit("green")}
            >
              Green
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 100, bgcolor: "brown" }}
              color="success"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit("brown")}
            >
              Brown
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 100, bgcolor: "red" }}
              color="success"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit("red")}
            >
              Red
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 100, bgcolor: "darkblue" }}
              color="success"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit("darkblue")}
            >
              darkblue
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 100, bgcolor: "blue" }}
              color="success"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit("blue")}
            >
              blue
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 100, bgcolor: "orange" }}
              color="success"
              variant="contained"
              fullWidth
              onClick={() => handleSubmit("orange")}
            >
              orange
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ColorHome;
