import { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material'


// Contexto de usuario
import { UserContext } from '../../../context/UserContext';

function Home() {
  const { updateUsername } = useContext(UserContext); // consume el contexto
  const [newUsername, setNewUsername] = useState('');

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //actualiza el username almacenado en el contexto
    updateUsername(newUsername);
    setNewUsername('');
  };

  return (
    <div>
      <h2>Update Username</h2>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" value={newUsername} onChange={handleInputChange} /> */}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={newUsername} onChange={handleInputChange} />
        {/* <button type="submit">Update</button> */}
        <Button type="submit" variant="contained">Update</Button>
      </form>
    </div>
  );
}

export default Home;