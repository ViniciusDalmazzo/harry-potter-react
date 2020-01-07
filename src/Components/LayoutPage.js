import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './HeaderPage';
import Footer from './FooterPage';
import Index from './IndexPage';
import Character from './CharacterPage';
import Box from '@material-ui/core/Box';


export default function Layout() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <main>

        <Box m={3} />
        <Character />

      </main>


      <Footer />


    </React.Fragment>
  );
}