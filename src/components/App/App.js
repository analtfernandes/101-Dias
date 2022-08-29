import GlobalStyle from '../../assets/globalStyle/GlobalStyle';
import { useEffect, useState } from 'react';

import { StatusContext } from '../../contexts';

import verifyStorage from './verifyStorage';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import ControlActions from '../ControlActions';
import { TransitionFade } from '../utils';


function App() {
  const [status, setStatus] = useState({});
  const [fadeVisible, setFadeVisible] = useState(true);

  useEffect(() => {
    verifyStorage({ setStatus });
  }, []);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>

      <GlobalStyle />
      <ControlActions fadeVisible={ fadeVisible } setFadeVisible={ setFadeVisible } />
      <TransitionFade fadeVisible={ fadeVisible } setFadeVisible={ setFadeVisible } />
      <Header />
      <Main />
      <Footer />
      
    </StatusContext.Provider>
  );
}

export default App;