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
import GoogleIcon from "@mui/icons-material/Google";

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
      <Card
        sx={{
          maxWidth: 400,
          padding: 2,
          background: "#F0EDE2",
          borderRadius: 2,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <h1 style={{}}>Sign in</h1>
          <TextField
            required
            id="outlined-required"
            label="Username"
            size="small"
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
            size="small"
            defaultValue=""
          />
          <FormControlLabel
            control={<Checkbox />}
            margin="normal"
            label="Remember me"
          />

          <Button
            variant="contained"
            fullWidth={true}
            margin="normal"
            size="large"
            sx={{
              textTransform: "none",
            }}
          >
            Sign in
          </Button>
          <Button
            textAlign="center"
            fullWidth={true}
            margin="normal"
            sx={{
              textDecoration: "underline",
              padding: 0,
              textTransform: "none",
            }}
          >
            Forgot your password?
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            margin="normal"
            size="large"
            sx={{
              textTransform: "none",
            }}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
        </CardContent>
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
