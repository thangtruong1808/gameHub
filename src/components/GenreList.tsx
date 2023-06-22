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
			<Heading fontSize="2xl" marginBottom={5}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} padding="5px" mt={1}>
						<HStack>
							<Image
								objectFit={"cover"}
								boxSize="32px"
								borderRadius={5}
								src={getCroppedImageURL(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								color={genre.id === selectedGenre?.id ? "tomato" : "normal"}
								// fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								variant="link"
								size="sm"
								onClick={() => onSelectGenre(genre)}
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
