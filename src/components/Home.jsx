import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const handleCat = (cat) => {
    const type = "ADD_CAT";
    const payload = cat;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <h1>Home</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleCat("Electronics")}
      >
        Electronics
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleCat("Kids")}
      >
        Kids
      </Button>
    </div>
  );
};

export default Home;
