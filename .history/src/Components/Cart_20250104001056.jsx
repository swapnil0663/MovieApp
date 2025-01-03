    import { useLocation, Link } from "react-router-dom";
    import { BASE_URL } from "../utils/BaseUrl";

    export default function Cart() {
        const location = useLocation();
        const movie = location.state;

        if (!movie) {
            return (
                <div className="flex flex-col items-center justify-center h-screen text-center">
                    <h1 className="text-3xl font-bold mb-4">No Movie Selected</h1>
                    <p className="text-lg text-gray-500">Please select a movie to view its details.</p>
                    <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
                        Back to Home
                    </Link>
                </div>
            );
        }

        return (
            <div className="p-6 max-w-4xl mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0">
                        <img
                            src={BASE_URL + movie.poster_path} 
                            alt={movie.title}
                            className="w-[300px] h-[450px] object-cover rounded-lg shadow-md"
                        />
                    </div>

                    <div className="flex-grow md:ml-8 mt-6 md:mt-0">
                        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                        <p className="text-gray-700 text-lg mb-6">{movie.description}</p>
                        <p className="text-gray-500 text-sm italic">
                            Learn more about this movie on{" "}
                            <a
                                href={movie.apiLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                {movie.apiLink}
                            </a>
                        </p>
                        <Link
                            to="/"
                            className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
