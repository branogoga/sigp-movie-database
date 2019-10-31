export interface IMoviePreview {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface ISearchMoviesResponse {
    Search: IMoviePreview[];
    totalResults: string;
    Response: string;
}

export function searchMovies(query: string): ISearchMoviesResponse {
    return {
        Search:[
            { 
                Title: "Batman Begins", Year: "2005", imdbID: "tt0372784", Type: "movie",
                Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
            },
            { 
                Title: "Batman v Superman: Dawn of Justice", Year: "2016", imdbID: "tt2975590", Type: "movie",
                Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            },
            { 
                Title: "Batman", Year: "1989", imdbID: "tt0096895", Type: "movie",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
            },
            { 
                Title: "Batman Returns", Year: "1992", imdbID: "tt0103776", Type: "movie",
                Poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
            },
            { 
                Title: "Batman Forever", Year: "1995", imdbID: "tt0112462", Type: "movie",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            { 
                Title: "Batman & Robin",Year:"1997",imdbID:"tt0118688",Type:"movie",
                Poster:"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
            },
            { 
                Title: "The Lego Batman Movie",Year:"2017",imdbID:"tt4116284",Type:"movie",
                Poster:"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
            },
            { 
                Title: "Batman: The Animated Series",Year:"1992–1995",imdbID:"tt0103359",Type:"series",
                Poster:"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
            },
            { 
                Title: "Batman: Under the Red Hood",Year:"2010",imdbID:"tt1569923",Type:"movie",
                Poster:"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            { 
                Title: "Batman: The Dark Knight Returns, Part 1",Year:"2012",imdbID:"tt2313197",Type:"movie",
                Poster:"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
            }
        ],
        totalResults: "366",
        Response: "True",
    };
}

export interface IMovieRating {
    Source: string;
    Value: string;
}

export interface IMovieDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IMovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
}

export interface IMovieDetailsResponse extends IMovieDetails {
    Response: string;
}

export function getMovieDetails(id: string): IMovieDetails {
    return  {
        Title:"Batman Begins",
        Year:"2005",
        Rated:"PG-13",
        Released:"15 Jun 2005",
        Runtime:"140 min",
        Genre:"Action, Adventure",
        Director:"Christopher Nolan",
        Writer:"Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors:"Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot:"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
        Language:"English, Urdu, Mandarin",
        Country:"USA, UK",
        Awards:"Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
        Poster:"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        Ratings:[
            {Source:"Internet Movie Database",Value:"8.2/10"},
            {Source:"Rotten Tomatoes",Value:"84%"},
            {Source:"Metacritic",Value:"70/100"}
        ],
        Metascore:"70",
        imdbRating:"8.2",
        imdbVotes:"1,221,277",
        imdbID:"tt0372784",
        Type:"movie",
        DVD:"18 Oct 2005",
        BoxOffice:"$204,100,000",
        Production:"Warner Bros. Pictures",
        Website:"N/A",
    };
}
