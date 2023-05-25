import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			width={"300"}
			borderRadius={20}
			overflow="hidden"
			boxShadow="dark-lg"
			height={"320"}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
