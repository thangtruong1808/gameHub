import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "366c8fdf7ec4458c92c4e484312bf5ef",
	},
});
