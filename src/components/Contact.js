import { React, useState } from 'react';
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";

export default function Contact() {
  const classes = makeStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = () => {
      //submit the form
  };
 
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <form noValidate autoComplete="off" className={classes.container}>
        <div className={classes.row}>
          <TextField
            label="Full Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email Address"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <br />
        <TextField
          multiline
          rows="4"
          label="Message"
          margin="normal"
          variant="outlined"
          value={message}
          onChange={e => setMessage(e.target.value)}
          fullWidth
        />
        <br />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}