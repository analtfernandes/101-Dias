import GlobalStyle from "../../assets/globalStyle/GlobalStyle";
import { useState } from "react";

import { TransitionFade } from "../utils";
import {
	StatusContextProvider,
	ButtonContextProvider,
	StorageContextProvider,
	RecordContextProvider,
	LayoutEffectsContextProvider,
} from "../../contexts";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { SavingGame } from "../SavingGame/SavingGame";

function App() {
	const [fadeConfig, setFadeConfig] = useState({
		isVisible: true,
		display: false, // default true
		timeout: 500,
	});

	return (
		<LayoutEffectsContextProvider>
			<StatusContextProvider>
				<RecordContextProvider>
					<ButtonContextProvider>
						<StorageContextProvider>
							<GlobalStyle />

							<SavingGame />

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
		</LayoutEffectsContextProvider>
	);
}

export default App;
