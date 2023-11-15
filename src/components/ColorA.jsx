import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";

const ColorA = () => {
  const selColor = useSelector((state) => state.colorReducer.mycol);
  const [data, setData] = useState([]);

  useEffect(() => setData(selColor), [selColor]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>COMPONENT-A</h1>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={6}>
                <Card sx={{ bgcolor: item }}>
                  <CardContent>
                    <h1>{item}</h1>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ColorA;
