import GlobalStyle from "../../assets/globalStyle/GlobalStyle";

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
