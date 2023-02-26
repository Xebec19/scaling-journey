import React, { useRef } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function Post({ id, title, description }) {
  return (
    <Card sx={{ maxWidth: 275, m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="p" component="div" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
