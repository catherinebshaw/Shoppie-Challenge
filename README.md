# Shoppie-Challenge
This application was part of an application for a Shopify Developer Internship. Applicants were asked to create an application to search IMDB for movies with the ability to save and delete favourite movies from local storage. 

## User Experience
In this application, users are given an opportunity to search the IMDB database for a variety of movies. Every search returns 10 possible movies. Since the application is built in REACT, the search returns options as the user types. The results of the search are presented in a scroll container and users can search for movies they would like to nominate for Shopify's new Shoppie award. To nominate, users hover over the movie and click the overlay. Nominated movies appear in a second scrollable container under the banner "Nominated". Once five (5) movies have been nominated, a banner appears congratulating the user. Movies can also be removed from the Nominated section by again hovering over the movie until an overlay appears. Nominated movies are saved in Local Storage so they will persist if the browser is closed or refreshed. 

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
The application is built in React.js and information is served via HTML and styled using CSS. The application has been deployed on Heroku.

## Mock Up
![The Shoppies Movie Nomination Site]()

## Live Site
[Shoppie](https://shrouded-lowlands-97207.herokuapp.com/)
