import GlobalStyle from "../../assets/globalStyle/GlobalStyle.js";

import { TransitionFade } from "../utils";
import { AppContextsProvider } from "../../contexts";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { SavingGame } from "../SavingGame/SavingGame.jsx";

function App() {
	return (
		<AppContextsProvider>
			<GlobalStyle />

			<SavingGame />
			<TransitionFade />

			<Header />
			<Main />
			<Footer />
		</AppContextsProvider>
	);
}

export default App;
