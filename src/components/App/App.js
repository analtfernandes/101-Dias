import GlobalStyle from "../../assets/globalStyle/GlobalStyle";
import { useState } from "react";

import {
	StatusContextProvider,
	ButtonContextProvider,
	StorageContextProvider,
} from "../../contexts";
import { TransitionFade } from "../utils";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
	const [fadeConfig, setFadeConfig] = useState({
		isVisible: true,
		display: false, // default true
		timeout: 500,
	});

	return (
		<StatusContextProvider>
			<ButtonContextProvider>
				<StorageContextProvider>
					<GlobalStyle />

					<TransitionFade
						fadeConfig={fadeConfig}
						setFadeConfig={setFadeConfig}
					/>

					<Header />
					<Main />
					<Footer setFadeConfig={setFadeConfig} />
				</StorageContextProvider>
			</ButtonContextProvider>
		</StatusContextProvider>
	);
}

export default App;
