import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import reactlogo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
	return (
		<HStack justifyContent="space-between" px="15px" my="15px">
			<Image src={reactlogo} boxSize="40px"></Image>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
