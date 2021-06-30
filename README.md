# Vue JS User Dashboard

## Demo
Imagine you're building an app that searches cars. Your task is to build two pages. The first page (and the landing page of your app) needs to show all cars in the store. You need to show cars in a list fashion, showing all relevant cars information (list needs to be infinitely scrollable):
 - - Model and Name
 - - Price
 - - Year
 - - Thumbnail

Here is the XD file link for the reference of UI design: https://xd.adobe.com/view/1d823f0c-8e47-4ecc-aeb9-88c23004db3b-48d1/

From functionalities wise, we want you to do the following things:
Add ability to filter by model, year via dropdown, and name via text (filtering must be live and should work along with already applied filters). 
The Dropdown of year, model, and year must be searchable. 
Make sure to apply the filters even on reload ( use URLs ).
When you click on a car from a list, open the car details page with details displayed on a page. 
When clicking back (from the car details page), preserve the scroll position of a car in the list.
Bonus points will be awarded for using State Management and commenting on your code.
```

## Run Project Locally
```
1. git clone https://github.com/noufalkv/Trial-test.git
2. cd Trial-test
3. npm i
4. npm run serve
```
## GitHub Page Hosting
```
1. remove /dist folder from .gitignore
2. change .env Base path URL to Github Pages URL and public path in vue.config.js to Git Repo Name
3. npm run build
4. git checkout gh_pages
5. git add dist
6. git commit -m "Title Change commit"
7. git subtree push --prefix dist origin gh-pages
Note:-- checkout git gh_pages branch
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
