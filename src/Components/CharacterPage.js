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

import AddIcon  from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export default function Character() {

  const classes = useStyles();

  const [personagens, setPersonagens] = useState([]);
  const [modalFormAddCharacter, setModalFormAddCharacter] = useState(false);

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

    <Container className={classes.cardGrid} maxWidth="md">

      <Fab onClick={handleOpen} className={classes.fab} color="primary">
        <AddIcon />
       </Fab>

      <Grid container spacing={4} >
        {personagens.map(p => (
          <Grid item key={p._id} xs={12} sm={6} md={4}>
            <CharacterCard character={p} />
          </Grid>
        ))}
      </Grid>

      <Box pt={6}></Box>

      <Dialog open={modalFormAddCharacter} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo personagem</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            required
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Casa</InputLabel>
            <Select
              fullWidth
              required
            >
              <MenuItem value="grifnoria">Grifinória</MenuItem>
              <MenuItem value="sonserina">Sonserina</MenuItem>
              <MenuItem value="corvinal">Corvinal</MenuItem>
              <MenuItem value="lufa-lufa">Lufa-Lufa</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="URL Imagem"
            type="text"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
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
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));