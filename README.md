# Shoppie-Challenge
This application was part of an application for a Shopify Developer Internship. Applicants were asked to create an application to search IMDB for movies with the ability to save and delete favourite movies from local storage. 

## User Experience
In this application, users are given an opportunity to search the IMDB database for a variety of movies. Upon loading, users are presented with a default search for "The Matrix". Users are able to enter a new search in the search bar below the header. Every search returns posters for 10 possible movies which are presented in a scroll container titled "Search Results". Users can scroll and find movies they would like to nominate for Shopify's new Shoppie award. Search results are immediately updated with any change made in the search bar.

To nominate a movie, users hover over the movie poster and click the overlay when it appears. Hovering over the icons in the overlay will trigger an animation effect. Nominated movies appear in a second scrollable container under the heading "Nominated". Once five (5) movies have been nominated, a banner appears congratulating the user. Movies can also be removed from the Nominated section by again hovering over the movie until an overlay appears. 

Nominated movies are saved in Local Storage so they will persist if the browser is closed or refreshed. 

## The Challenge:
The challenge was to build a webpage that can:
* Search for movies and display the results,
* Add a movie from the search results to the nomination list,
* View the list of films nominated,
* Remove a nominee from the nomination list.

## Technical Requirements:
* Search results from OMDB API,
* Search result should include movie title, year of release and button to nominate the film,
* Updates to the searh terms should update the search result list,
* Movies in search results can be added and removed from the nomination list,
* If a search has already been nominated, disable its nominate button,
* Display a banner when the user has 5 nominations.

## Bonus:
* Save nomination lists if the user leaves the page,
* Animations for loading, adding/deleting movies, notifications,
* Create shareable links

## Technology Used
The application is built in React.js using the OMDB API for search results. Information is served via HTML and styled using CSS and Bootstrap5.0. The application has been deployed on Heroku. 

The easiest way to access the site is to click on the link below under "Live Site". If accessing through original code, please open the SRC folder in the terminal and type "npm start". 

## Results
This was a really fun challenge and I am quite happy  with how the site turned out. Considering I only started coding four months ago and only started using React and Node two months ago, I am really pleased with how much I have learned and how much of that learning I am able to apply. There is still a lot more to learn and I am keen to find an opportunity where I can continue to develop this new skill and knowledge base. 

## Mock Up
![The Shoppies Movie Nomination Site](https://github.com/catherinebshaw/Shoppie-Challenge/blob/main/public/Assets/Shoppies-ScreenShot.png)

## Live Site
[Shoppie Site on Heroku](https://shrouded-lowlands-97207.herokuapp.com/)
