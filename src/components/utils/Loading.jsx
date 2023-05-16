import { Oval } from "react-loader-spinner";

export function Loading({ config }) {
	return (
		<Oval
			height="13"
			width="13"
			color="whitesmoke"
			ariaLabel="loading"
			secondaryColor="none"
			strokeWidthSecondary={4}
			{...config}
		/>
	);
}
