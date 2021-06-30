# Vue JS User Dashboard

## Demo
Please click [here](https://shafeequeom.github.io/VueDashboad) to view [demo](https://shafeequeom.github.io/VueDashboad)
```
/////////////////////////////////
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
