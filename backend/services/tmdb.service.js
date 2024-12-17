import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	const options = {
		headers: {
			accept: "application/json",
			Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
		},
		
		with_genres: 16,
	};

	const response = await axios.get(url, options);

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data;
};

// Fetch dữ liệu từ nhiều trang và lọc genre_id = 16
export const fetchAnimeFromPages = async (urlBase, maxPages = 100) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
        },
    };

    const allResults = [];
    for (let page = 1; page <= maxPages; page++) {
        try {
            const res = await axios.get(`${urlBase}&page=${page}`, options);
            if (res.status === 200 && res.data.results) {
                const animeResults = res.data.results.filter((item) =>
                    item.genre_ids.includes(16)
                );
                allResults.push(...animeResults);
            }
        } catch (error) {
            console.error(`Error fetching page ${page}:`, error.message);
            break; // Dừng vòng lặp nếu gặp lỗi
        }
    }
    return allResults;
};