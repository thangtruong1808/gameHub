import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: String;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-release", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];
	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);
	return (
		<Menu>
			<MenuButton
				as={Button}
				colorScheme="yellow"
				ml={5}
				borderRadius={10}
				rightIcon={<BsChevronDown />}
			>
				Order by: {currentSortOrder?.label || "Relevance"}
				{/* {selectedPlatform?.name || "Platforms"} */}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
