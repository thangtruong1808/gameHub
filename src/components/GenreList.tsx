import useGenres from "../hooks/useGenres";

const GenreList = () => {
	// const { genres } = useGenres();
	const { data } = useGenres();

	return (
		<ul>
			{data.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};

export default GenreList;