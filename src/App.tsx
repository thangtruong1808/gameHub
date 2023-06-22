import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}
function App() {
	// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
	// 	null
	// );
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // md 768px
				lg: `"nav nav" "aside main"`, // 992px
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px, 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX="15px">
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack>
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
					<SortSelector />
				</HStack>

				<GameGrid
					gameQuery={gameQuery}
					// selectedPlatform={gameQuery.platform}
					// selectedGenre={gameQuery.genre}
				/>
			</GridItem>
		</Grid>
	);
}

export default App;
