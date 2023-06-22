import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import reactlogo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
	return (
		// justifyContent="space-between"
		<HStack px="15px" my="15px">
			<Image src={reactlogo} boxSize="40px"></Image>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
