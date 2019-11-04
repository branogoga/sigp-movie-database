# React exercise: Movie database
Create a simple movie application in React. The application should consist of 3 pages:
1. Movie search:
Page should contain search input field with search button on the top of the page. When
user submits the search, all search results should be displayed under the search input
field. Please consider paging or endless scrolling of search results.
API example, search for “Batman”:
http://omdbapi.com/?apikey=[YOUR-API-KEY]&s=Batman
2. Movie detail:
Page should contain all information for selected movie (title, year, genre, poster, etc.)
Next to the title should be “star” icon. When User clicks on the icon, movie will be added
to favourites.
API example, search for concrete movie details:
http://omdbapi.com/?apikey=[YOUR-API-KEY]&i=tt0372784
3. My favourite movies:
Page should contain list of favourite movies. User should be able to navigate to movie
detail and remove movie from favourites.

Requirements:
- Use OMDb API to fetch all necessary data. No backend required!
- Use up to date features of Ecmascript or Typescript
- Pick one open-source component library such as Material UI , Ant Design , etc.
- Use react-router for page navigation
- Use redux for data management
- Use redux-saga for dealing with side effects

Nice to have:
- Use create-react-app as your starting boilerplate
- Submit your code via Github/Bitbucket/Gitlab
- Deploy your solution and share the link

##
Sample project with the basic setup needed for front-end development including:
* Bootstrap components
* Typescript + TS Lint
* React
  * Immer.js to handle state changes
* JEST unit tests
* AXIOS for promise-based API calls

## Build:

```
npm run build
```

## Test:

```
npm run test
```

## Current version on GitHub Pages:

https://branogoga.github.io/sigp-movie-database/

## Open in local browser:

http://sigp.climb.sk/

deploy on GitHub pages does not work:
https://branogoga.github.io/sigp-movie-database/

```
index.html
```
