import GlobalStyle from '../../assets/globalStyle/GlobalStyle';
import { useEffect, useState } from 'react';

import { StatusContext } from '../../contexts';

import verifyStorage from './verifyStorage';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import ControlActions from '../ControlActions';


function App() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    verifyStorage({ setStatus });
  }, []);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>

      <GlobalStyle />
      <ControlActions />
      <Header />
      <Main />
      <Footer />
      
    </StatusContext.Provider>
  );
}

export default App;