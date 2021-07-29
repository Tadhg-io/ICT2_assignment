import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} )
    const [favorites, setFavorites] = useState( [] )
    const [mustWatch, setMustWatch] = useState( [] )

    const addToFavorites = (movie) => {
        setFavorites([...favorites,movie.id])
    };
    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites( favorites.filter(
        (mId) => mId !== movie.id
        ) )
    };

    const addToList = (movie) => {
        setMustWatch([...mustWatch,movie.id]);
        console.log("Nust Watch List", mustWatch);
    };
    // We will use this function in a later section
    const removeFromList = (movie) => {
        setMustWatch( mustWatch.filter(
        (mId) => mId !== movie.id
        ) )
    };

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

      return (
        <MoviesContext.Provider
          value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            addToList,
            removeFromList,
            addReview,
          }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
    };
    
    export default MoviesContextProvider;