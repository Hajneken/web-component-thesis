import React from 'react';

import GlobalStyles from './GlobalStyles'

//import parts
import Header from "./Layout/Header";
import Main from "./Layout/Main"
import Footer from "./Layout/Footer"

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header />
        <Main />
      <Footer />
    </>
  );
}

export default App;
