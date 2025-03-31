import { Language } from "iconoir-react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { MOVIE_GENRE, TV_GENRE } from "../lib/constants";
import styles from "../styles/slider.module.scss";
import type { SliderQueries } from "../types/app";

const queries: SliderQueries[] = [
  {
    title: "Newly Released Movies",
    endpoint: "discover/movie",
    params: {
        "region": "IN", 
        language:"en-IN",                       // India
        "release_date.gte": "2025-03-01",      // Start date (current month)
        "release_date.lte": "2025-03-29",      // End date (current month)
        "with_release_type": "3",              // Theatrical release
        "sort_by": "release_date.desc"  
    }
},
  {
    title: "Popular Movies",
    endpoint: "discover/movie",
    params: {
      region: "IN",
      sort_by: "popularity.desc",
      "release_date.lte": "{{current_date}}",
    },
  },
  {
    title: " Movies on Netflix",
    endpoint: "discover/movie",
    params: {
      with_watch_providers: 8,
      watch_region: "IN",
      region:"IN",
    },
  },
  {
    title: " TV Shows on Netflix",
    endpoint: "discover/tv",
    params: {
      with_watch_providers: 8,
      watch_region: "IN",
      region:"IN",
    },
  },
  {
    title: "Movies on Prime Video",
    endpoint: "discover/movie",
    params: {
      with_watch_providers: "119", 
      watch_region: "IN",
      region:"IN",
    },
  },
  {
    title: "TV Shows on Prime Video",
    endpoint: "discover/tv",
    params: {
      with_watch_providers: "119", 
      watch_region: "IN",
      region:"IN",
    },
  },
  {
    title: "Popular Anime on Cruncyroll",
    endpoint: "discover/tv",
    params: {
      with_watch_providers: 283,
      watch_region: "IN",
      region:"IN",
    },
  },
  {
    title: "Tamil Movies",
    endpoint: "discover/movie",
    params: {
      "with_original_language": "ta",          // Only Tamil movies
      "watch_region": "IN",                    // For India
      "sort_by": "popularity.desc",            // Simulate trending by popularity
      "release_date.lte": "today",        // Only released movies
      "release_date.gte": "2024-01-24"   
    },
  },
  {
    title: "Malayalam Movies",
    endpoint: "discover/movie",
    params: {
      "with_original_language": "ml",          // Only Tamil movies
      "watch_region": "IN",                    // For India
      "sort_by": "popularity.desc",            // Simulate trending by popularity
      "release_date.lte": "today",        // Only released movies
      "release_date.gte": "2024-01-24"
    },
  },
  {
    title: "Hindi Movies",
    endpoint: "discover/movie",
    params: {
      "with_original_language": "hi",          // Only Tamil movies
      "watch_region": "IN",                    // For India
      "sort_by": "popularity.desc",            // Simulate trending by popularity
      "release_date.lte": "today",        // Only released movies
      "release_date.gte": "2024-01-24"
    },
  },
  {
    title: "Animation",
    endpoint: "discover/movie",
    params: {
      with_genres: MOVIE_GENRE.ANIMATION,
      region:"IN",
    },
  },
];

const Homepage = () => {
  return (
    <>
      <Banner endpoint="discover/movie" />
      <div className={styles["list-container"]}>
        {queries.map((query) => (
          <Slider
            key={query.title}
            title={query.title}
            endpoint={query.endpoint}
            params={query.params}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
