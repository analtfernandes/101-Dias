import GlobalStyle from "../../assets/globalStyle/GlobalStyle";
import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import ControlActions from "../ControlActions";
import { TransitionFade } from "../utils";
import { StatusContextProvider } from "../../contexts";

function App() {
	const [fadeVisible, setFadeVisible] = useState(true);

	return (
		<StatusContextProvider>
			<GlobalStyle />

			<ControlActions
				fadeVisible={fadeVisible}
				setFadeVisible={setFadeVisible}
			/>
			{/*<TransitionFade fadeVisible={ fadeVisible } setFadeVisible={ setFadeVisible } />*/}
			<Header />
			<Main />
			<Footer />
		</StatusContextProvider>
	);
}

export default App;
