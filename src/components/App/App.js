import GlobalStyle from "../../assets/globalStyle/GlobalStyle";
import { useState } from "react";

import { TransitionFade } from "../utils";
import {
	StatusContextProvider,
	ButtonContextProvider,
	StorageContextProvider,
	RecordContextProvider,
} from "../../contexts";

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
			<RecordContextProvider>
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
			</RecordContextProvider>
		</StatusContextProvider>
	);
}

export default App;
