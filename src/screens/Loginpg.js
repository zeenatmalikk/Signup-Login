import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import React from "react";
import {Link } from "react-dom"
export const Loginpg = () => {
  return (
    <div>
      <Grid container style={{ height: 722 }}>
        <Grid item md={6}>
          <img
            style={{ height: "670px" }}
            src="https://cdn.dribbble.com/users/362097/screenshots/9157889/media/50be80c8654b7e41198d40f03d32264f.jpg?compress=1&resize=1000x750"
          />
        </Grid>
        <Grid
          item
          md={6}
          style={{
            backgroundColor: "#128963",
            borderTopLeftRadius: "10%",
            borderBottomLeftRadius: "10%",
          }}
        >
          <div style={{ marginTop: "25%", marginLeft: "20%" }}>
            {/* <Card
              style={{
                paddingTop: "5%",
                paddingLeft: "9%",
                paddingBottom: "5%",
                width: "74%",
              }}
            >
              <CardContent> */}
                <h1 style={{ lineHeight: "24px", color:"#F6F6FE" }}>Hello,</h1>
                <h1 style={{color:"#F6F6FE"}}>Welcome again!!</h1>
                <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                  <TextField
                    style={{ width: "370px", backgroundColor:"white", borderRadius:"5px" }}
                    variant="outlined"
                    placeholder="username"
                  />
                </div>
                <div>
                  <TextField
                    style={{ width: "370px", backgroundColor:"white", borderRadius:"5px" }}
                    variant="outlined"
                    placeholder="Password"
                  />
                </div>
                <div style={{ marginTop: "5%" }}>
                  <Button style={{width:370, backgroundColor:"#FD6141", fontSize:20, fontWeight:600, color:"white"}} variant="contained">Let Me In</Button>
                </div>
                <div style={{display:"flex"}}>
                    <h4>
                        Don't have an account? 
                    </h4>
                  <Link to="/signup">
                  <h4 style={{marginLeft:20}}>
                        Signup
                    </h4>
                  </Link>
                </div>
              {/* </CardContent>
            </Card> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
