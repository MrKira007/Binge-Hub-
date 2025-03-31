import Banner from "../components/Banner";
import Slider from "../components/Slider";
import { TV_GENRE } from "../lib/constants";
import styles from "../styles/slider.module.scss";
import type { SliderQueries } from "../types/app";

const queries: SliderQueries[] = [
  {
    title: "Popular in Netflix",
    endpoint: "discover/tv",
    params: {
      with_watch_providers: "8", 
      watch_region: "IN",
      region:"IN",
      "sort_by": "popularity.desc",         // Sort by popularity (trending effect)
      "first_air_date.lte": "today",   // Only released shows
      "first_air_date.gte": "2025-01-25" 
    },
  },
  {
    title: "Popular in Prime Video",
    endpoint: "discover/tv",
    params: {
      with_watch_providers: "119", 
      watch_region: "IN",
      region:"IN",
      "sort_by": "popularity.desc",         // Sort by popularity (trending effect)
      "first_air_date.lte": "today",   // Only released shows
      "first_air_date.gte": "2025-01-25" 
    },
  },
  {
    title: "Top Rated",
    endpoint: "tv/top_rated",
  },
  {
    title: "Crime",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.CRIME,
    },
  },
  {
    title: "Mystery",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.MYSTERY,
    },
  },
  {
    title: "Animation",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.ANIMATION,
    },
  },
  {
    title: "Action & Adventure",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.ACTION_ADVENTURE,
    },
  },
  {
    title: "Reality",
    endpoint: "discover/tv",
    params: {
      with_genres: TV_GENRE.REALITY,
    },
  },
];

const TVPage = () => {
  return (
    <>
      <Banner
  endpoint="discover/tv"
  params={{
    with_watch_providers: "8",    // Netflix
    watch_region: "IN",           // India
    region: "IN",                  // Region filter
    sort_by: "popularity.desc",    // Sort by popularity
    "first_air_date.gte": "2025-01-01",   // Start date for trending shows
    "first_air_date.lte": "today"    // End date for trending shows
  }}
/>

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

export default TVPage;
