import React, { useState } from 'react';
import TextField  from "@mui/material/TextField";
import Button  from "@mui/material/Button";

function Formulario({handleSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name,
          email,
          password,
          phone
        });
      } }
    >
      <TextField id="name"
        label="User Name"
        variant="outlined"
        fullWidth
        margin="normal">
        onChange={(e) => setName(e.target.value)}
      </TextField>
      <TextField id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal">
        onChange={(e) => setEmail(e.target.value)}
      </TextField>
      <TextField id="password"
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal">
        onChange={(e) => setPassword(e.target.value)}
      </TextField>
      <TextField id="cellphone"
        type="number"
        label="Cell Phone"
        variant="outlined"
        fullWidth
        margin="normal">
        onChange={(e) => setPhone(e.target.value)}
      </TextField>
      <Button 
        variant="contained"
        align="center"
      > Register</Button>
    </form>
  );
}

export default Formulario 
