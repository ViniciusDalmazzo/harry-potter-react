import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CharacterCard from './CharacterCard';
import AddCharacterModal from './AddCharacterModal';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Character() {

  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [personagens, setPersonagens] = useState([]);
  const [modalFormAddCharacter, setModalFormAddCharacter] = useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  useEffect(async () => {

    const response = await fetch('http://localhost:3001/api/v1/characteres');
    const data = await response.json();

    setPersonagens(data);

  }, []);

  function handleOpen() {
    setModalFormAddCharacter(true);
  };

  function handleClose() {
    setModalFormAddCharacter(false);
  };

  return (
    <Container maxWidth="md">

      <Box pt={6}></Box>

      <div>
        <Grid container spacing={2} justify="center" onClick={handleOpen}>
          <Grid item>
            <Button variant="contained" color="primary">
              Adicionar um personagem
                  </Button>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={4} >
        {personagens.map(p => (
          <Grid item key={p._id} xs={12} sm={6} md={4}>
            <CharacterCard character={p} />
          </Grid>
        ))}
      </Grid>

      <Box pt={6}></Box>

      <Dialog open={modalFormAddCharacter} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar um novo personagem</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Casa</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={age}
              onChange={handleChange}
              fullWidth 
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>

  );

}

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    margin: 0,
    width: '100%'
  },
}));