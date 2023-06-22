import {
	Button,
	Center,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../Services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	// const { genres } = useGenres();
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	// style={{ width: "100%" }} already define in index.css
	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageURL(genre.image_background)}
								mr={3}
							/>
							<Button
								whiteSpace="pre-wrap"
								textAlign="left"
								color={genre.id === selectedGenre?.id ? "tomato" : "normal"}
								// fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								onClick={() => onSelectGenre(genre)}
								size="md"
								variant="link"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
