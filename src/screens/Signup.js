import { Card, Grid, CardContent, TextField, Container } from "@material-ui/core";
import React from "react";

export const Signup = () => {
  return (
    <div>
    <Container>
          <Card style={{marginTop:"5%"}}>
            <CardContent>
                <div style={{display:"flex"}} >
              <div>
               <img style={{
                   paddingLeft:"1%",
                   height:500
               }} src="https://cdn.dribbble.com/users/79571/screenshots/10283136/media/78a67604287db41bef6c98a9eca7dd7a.png?compress=1&resize=1000x750"/>
              </div>
              <div style={{paddingTop:"3%"}}>
                  <TextField variant="outlined" placeholder="Firstname" style={{
                      paddingLeft:"4%",
                      width:"450px",
                      paddingBottom:"4%",
                      
                  }}/><br></br>
                  <TextField variant="outlined" placeholder="Lastname" style={{
                      paddingLeft:"4%",
                      width:"450px",
                      paddingBottom:"4%"
                  }}/><br></br>
                  <TextField variant="outlined" placeholder="Mail" style={{
                      paddingLeft:"4%",
                      width:"450px",
                      paddingBottom:"4%"
                  }}/><br></br>
                  <TextField variant="outlined" placeholder="Phone No" style={{
                      paddingLeft:"4%",
                      width:"450px",
                      paddingBottom:"4%"
                  }}/><br></br>
                  <TextField variant="outlined" placeholder="Password" style={{
                      paddingLeft:"4%",
                      width:"450px",
                      paddingBottom:"4%"
                  }}/><br></br>
                  <TextField variant="outlined" placeholder="Re-Enter Password" style={{
                      paddingLeft:"4%",
                      width:"450px",
                      paddingBottom:"4%"
                  }}/><br></br>
              </div>
              </div>
            </CardContent>
          </Card>
          </Container>
    </div>
  );
};
