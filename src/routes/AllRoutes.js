import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, PageNotFound, Search } from '../pages/index';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movie/popular" element={<MovieList />} />
            <Route path="movie/top" element={<MovieList />} />
            <Route path="movie/up_coming" element={<MovieList />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}