import GlobalStyle from "../../assets/globalStyle/GlobalStyle.js";

import { TransitionFade } from "../utils/index.js";
import { AppContextsProvider } from "../../contexts/index.js";

import Header from "../header/Header.jsx";
import Main from "../main/Main.jsx";
import Footer from "../footer/Footer.jsx";
import { SavingGame } from "../savingGame/SavingGame.jsx";

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
