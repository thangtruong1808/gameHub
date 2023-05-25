import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../Services/image-url";

const GenreList = () => {
	// const { genres } = useGenres();
	const { data } = useGenres();

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} p="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageURL(genre.image_background)}
						></Image>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
