import GlobalStyle from "../../assets/globalStyle/GlobalStyle";
import { useState } from "react";

import { StatusContextProvider, ButtonContextProvider } from "../../contexts";
import { TransitionFade } from "../utils";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
	const [fadeVisible, setFadeVisible] = useState(true);

	return (
		<StatusContextProvider>
			<ButtonContextProvider>
				<GlobalStyle />

				{/*<TransitionFade fadeVisible={ fadeVisible } setFadeVisible={ setFadeVisible } />*/}
				<Header />
				<Main />
				<Footer />
			</ButtonContextProvider>
		</StatusContextProvider>
	);
}

export default App;
