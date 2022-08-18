import { HeaderStatusContext } from '../../contexts';

import verifyStorage from './verifyStorage';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import GlobalStyle from '../../assets/globalStyle/GlobalStyle';
import { useEffect, useState } from 'react';


function App() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    verifyStorage({ setStatus });
  }, []);

  return (
    <HeaderStatusContext.Provider value={{ status, setStatus }}>

      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
      
    </HeaderStatusContext.Provider>
  );
}

export default App;