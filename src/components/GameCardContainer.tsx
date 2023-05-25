import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
	return (
		<Box width={"300"} height={"350"} borderRadius={20} overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;
