import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				colorScheme="yellow"
				ml={5}
				borderRadius={20}
				rightIcon={<BsChevronDown />}
			>
				Order by: Relavance
				{/* {selectedPlatform?.name || "Platforms"} */}
			</MenuButton>
			<MenuList>
				<MenuItem>Relavance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average rating</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
