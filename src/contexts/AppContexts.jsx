import {
	StatusContextProvider,
	ButtonContextProvider,
	StorageContextProvider,
	RecordContextProvider,
	LayoutEffectsContextProvider,
} from "./index.js";

export function AppContextsProvider({ children }) {
	return (
		<LayoutEffectsContextProvider>
			<StatusContextProvider>
				<RecordContextProvider>
					<ButtonContextProvider>
						<StorageContextProvider>{children}</StorageContextProvider>
					</ButtonContextProvider>
				</RecordContextProvider>
			</StatusContextProvider>
		</LayoutEffectsContextProvider>
	);
}
