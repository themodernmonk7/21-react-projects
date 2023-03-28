This is Stock Photos App.
Specification of the app:
    - User can search any photos using query

0. Get the access key from unplash
    - set the .env file and paste the access key
    - store the access key in a variable in <App/>

1. set the state
    - loading
    - photos (list of photos we are getting back)
    - use the state where it needs
    - In the fetchImages function
2. set the function that Fetch Images with dynamic url
    - declare let url
    - set the proper url
    - url = `${mainUrl}${clientID}`
    - try catch block
    - setPhotos to data
    - call the Fetch Images with useEffect with an empty dependency

3. work on return
    - set form and input
    - set button with handleSubmit function
    - set handleSubmit function and get the hello text
    - Iterate photos through map
    - send data to <Photo> component
4. show loading conditionally after photos
5. destructure object that is coming from <App> in <Photo/>
    - urls, alt_description, likes, user {name, profile url and profile image}
    - works on return
6. set another useEffect for scroll event
    - add eventListener on window with scroll event
    - check innerHeigh, scrollY and body height
    - add innerHeight and scrollY
    - check if innerHeight and scrollY is bigger or equal than the body height then I wanna do something. and something is fetching more images
    - add - 2 to run before end of the document
    - I only fetch new images if its not loading
    - add loading is false
    - also remove eventListener
7. Set a page state with default value 1 for infinite scroll
8. construct new variable urlPage = `&page${page}
9. add urlPage variable in url 
10. Add page as dependency in where fetchImages is called in useEffect
11. call setPage with increase in page value in event
    - You will get gotchas here of clicker effect
    - I have set setPhotos(data) while initial fetching, So I already have some images. Just simple console.log('it worked)
    - If my goal is to display all the images, the moment I am over writing.
    - I had some initial fetch, and then once I get the bottom of the page I am changing those images
12. refactor setPhotos in fetchImage
    -  oldPhotos = that are the current photos that I have in the array and then I also want to spread out the ...data, whatever photos I am getting
    - setPhotos((oldPhotos) => {return [...oldPhotos, ...data]} )
13. Set query state variable
    - setQuery in input to get the query value
14. Inside fetchImage function setup another variable for query
    - const urlQuery = `&query${query}
    - if the query value is there or true then show url with searchQuery
    - else show url with mainUrl
    - invoke fetchImage function in handleSubmit function
    - if you search anything then the value is stored in result variable
    - So, refactor the setPhotos in try block
    - show conditionally if query value is there then show data.result else show data