import { Button,  Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./main.css"

export default function BoxBasic() {
  return (
    <Box
      className="main-box"
      component="section"
      sx={{ p: 2, color: "white" ,left:{xs:"50%", md:"25%",lg:"18%"} ,textAlign:{xs:"center",md:"left"}}}
    >
      <Typography variant="h4" component={"h2"}>
        Call To Prayer
      </Typography>
      <Typography variant="h6" component={"p"}>
        Let&apos;s praying whenever it&apos;s calling
      </Typography>
      <Link to="/prayer-times" style={{ textDecoration: "none" }}>
        <Button
          className="btn"
          variant="contained"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          View Prayer Times
        </Button>
      </Link>
    </Box>
  );
}
