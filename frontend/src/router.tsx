import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Pokedex from "./pages/Pokedex/Pokedex";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import Compare from "./pages/Compare/Compare";
import Statistics from "./pages/Statistics/Statistics";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Pokedex /> },
            { path: "favorites", element: <FavoritesPage /> },
            { path: "compare", element: <Compare /> },
            { path: "statistics", element: <Statistics /> },
            { path: "*", element: <NotFound /> },
        ]
    }
]);

export default router;