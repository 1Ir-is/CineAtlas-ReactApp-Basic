import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, PageNotFound, Search } from '../pages/index';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList />} />
            <Route path="movies/top" element={<MovieList />} />
            <Route path="movies/up_coming" element={<MovieList />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}