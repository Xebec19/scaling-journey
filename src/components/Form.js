import React, { useRef } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";

export default function Form() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  return (
    <Card sx={{ maxWidth: 275, m: 2 }}>
      <CardContent>
        <TextField sx={{ mb: 1 }} inputRef={titleRef}></TextField>
        <TextField inputRef={descriptionRef}></TextField>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Submit
        </Button>
        <Button variant="outlined" size="small">
          Clear
        </Button>
      </CardActions>
    </Card>
  );
}
