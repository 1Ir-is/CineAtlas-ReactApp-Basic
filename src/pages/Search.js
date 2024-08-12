import { useSearchParams } from "react-router-dom";
import { useFetch , useTitle } from "../hooks";
import { Card } from "../components/Card"

export const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("query");
    const { data : movies } = useFetch(apiPath, queryTerm);

    const pageTitle = useTitle(`Search results for '${queryTerm}'`);

    return (
        <main>
            <section className="py-7">
                <p className="
                    text-3xl
                    text-gray-700
                    text-center
                    dark:text-white
                ">
                    { movies.length > 0 ? `Search results for '${queryTerm}'` : `No results for '${queryTerm}'`}
                </p>
            </section>
            <section className='
                max-w-7xl
                mx-auto
                py-7
            '>
                <div className='
                    flex
                    justify-start
                    flex-wrap
                '>
                    { movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}             
                </div>
            </section>
        </main>
    )
}
