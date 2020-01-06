import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header';
import Footer from '../Footer';
import Index from '../Index';
import Players from '../Players';

export default function Layout() {
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {}
        <Index />
        {/* <Players /> */}
       
      </main>
      {}

      <Footer />

      {}
    </React.Fragment>
  );
}