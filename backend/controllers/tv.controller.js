import { fetchFromTMDB, fetchAnimeFromPages } from "../services/tmdb.service.js";


export async function getTvTrailers(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&with_genres=16`);
		res.json({ success: true, trailers: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getTvDetails(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US&with_genres=16`);
		res.status(200).json({ success: true, content: data });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getSimilarTvs(req, res) {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1&with_genres=16`);
		res.status(200).json({ success: true, similar: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function getTopRatedAnimeTV(req, res) {
    try {
        const data = await fetchAnimeFromPages(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US"
        );
        res.json({ success: true, content: data });
    } catch (error) {
        console.error("Error in getTopRatedAnimeTV:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getAnimeTVByCategory(req, res) {
    const { category } = req.params;
    const validCategories = ["airing_today", "on_the_air", "popular", "top_rated"];
    if (!validCategories.includes(category)) {
        return res.status(400).json({ success: false, message: "Invalid category" });
    }

    try {
        const data = await fetchAnimeFromPages(
            `https://api.themoviedb.org/3/tv/${category}?language=en-US`
        );
        res.json({ success: true, content: data });
    } catch (error) {
        console.error("Error in getAnimeTVByCategory:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
