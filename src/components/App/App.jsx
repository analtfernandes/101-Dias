import GlobalStyle from "../../assets/globalStyle/GlobalStyle.js";

import { TransitionFade } from "../utils";
import {
	StatusContextProvider,
	ButtonContextProvider,
	StorageContextProvider,
	RecordContextProvider,
	LayoutEffectsContextProvider,
} from "../../contexts";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { SavingGame } from "../SavingGame/SavingGame.jsx";

function App() {
	return (
		<LayoutEffectsContextProvider>
			<StatusContextProvider>
				<RecordContextProvider>
					<ButtonContextProvider>
						<StorageContextProvider>
							<GlobalStyle />

							<SavingGame />
							<TransitionFade />

							<Header />
							<Main />
							<Footer />
						</StorageContextProvider>
					</ButtonContextProvider>
				</RecordContextProvider>
			</StatusContextProvider>
		</LayoutEffectsContextProvider>
	);
}

export default App;
