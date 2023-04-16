import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Container } from "./styles/Container.styled";

function App() {
  return (<Container mw={'100%'} mh={'100%'}>
    <Main />
    <Footer />
  </Container>
  );
}

export default App;
