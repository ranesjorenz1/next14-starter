"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const LoginPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 500, padding: 2 }}>
        <CardContent>
          <h1 style={{}}>Sign in</h1>
          <TextField
            required
            id="outlined-required"
            label="Username"
            fullWidth={true}
            margin="normal"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            fullWidth={true}
            label="Password"
            margin="normal"
            defaultValue=""
          />
          <FormControlLabel
            control={<Checkbox />}
            margin="normal"
            label="Remember me"
          />
        </CardContent>
        <CardActions style={{ textAlign: "center" }}>
          <Button variant="contained" fullWidth={true} margin="normal">
            Sign in
          </Button>
        </CardActions>
        <CardActions style={{ textAlign: "center" }}>
          <Button
            onClick={handleClickOpen}
            sx={{ textDecoration: "underline", padding: 0 }}
          >
            Forgot your password?
          </Button>
        </CardActions>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Reset password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your accounts email address, and well send you a link to
              reset your password.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Continue</Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  );
};
export default LoginPage;
