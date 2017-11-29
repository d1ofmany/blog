## Task

Create a new single page web application (SPA). This application should request
a dummy API to display a number of "Posts" made by different "Users". Each
preview of such a post should include the username of the author, the post title
and the description. Each post also has a number of "Comments" made by other
users. These comments should be visible when clicking a post's 'show more' link,
and should be displayed using, e.g. a modal dialog, redirect/routing to a new
page or expanding the existing post. Feel free to implement any interesting UI
and UX ideas that you have.

To do this use the dummy REST API http://jsonplaceholder.typicode.com/. Take a
look specifically at the posts, comments and users endpoint. A navigation bar
should be implemented at the very top of the UI. The user should be able to
navigate to the start page which consists of the post views. When clicking on
the "About" tab only a "lorem ipsum" text should appear on the screen. Implement
a very basic search field which helps the user search for a specific username.
Only posts by this user should be visible after the search.

For each component that you write you should create corresponding tests. The
following graphic shows ONE POSSIBLE outcome. Yours can look different!

# How to

### Start

* run "npm run start"

### Test

* run "npm run test"

### Build

* run "npm run build"
