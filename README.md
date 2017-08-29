# UPDATE - NEW Seed Project!
* [Angular Meteor with ES6 JavaScript Dashboard Starter](https://github.com/MileanCo/angular-meteor-es6-dashboard-seed/)
* The new project above uses LATEST Meteor package (1.4+), AngularJS 1.6+, JavaScript 2015+ ES6 features, and deployment docs on DigitalOcean.

### INTRO
* [LIVE DEMO](http://milean.co:8080)
* Angular Material Dashboard - an admin template for creating dashboard-styled web applications utilizing Google's Material Design, Bootstrap 3, Angular, and Meteor 1.2 (server-side full-stack javascript engine).
* Includes [documentation](http://milean.co:8080)!
* MEAN project is currently under progress.
* Includes SEED project to instantly create a new web app without needing to create boilerplate code.
* Uses Mongo Database for data storage, authentication, etc.
* Includes data generator for JSON and CSV files.
* Custom Theme
* Login page
* FontAwesome, Timeline, Widgets, Cards, Buttons, Dialogs & Modals, Progressbars, Toast, & Maps.  
* FREE download, just remember to contribute to the project and link back to github.com/Mystec

## Modules
* Authentication
* Charts - Google, nvD3, and ChartJS
* Dashboard
* Documentation
* Forms
* Maps
* Menu (Sidebar, Profile header, Top Navbar)
* Material UI Elements
  * Wizard
* Tables

## Site Layout
* index.html
  * core.html
    * home.html
    * charts.html
      * chartjs.html
    *  dashboard.html
      * example1.html
      * profile.html
* ...



### SETUP
COMMANDS to get your application up and running

1. git clone https://github.com/Mystec/angular-material-meteor-dashboard.git
2. cd meteor/
3. INSTALL Meteor - https://www.meteor.com/install
4. meteor


### OTHER
* DEPLOY METEOR on HOME/NodeJS:
	http://www.marcusficner.de/blog/deploy-meteor-app-on-centos

* Developed with Meteor 1.2



### DEPLOY on DigitalOcean
1. https://docs.docker.com/machine/examples/ocean/
2. https://github.com/meteorhacks/meteord
3. [Fix RAM issue] (http://stackoverflow.com/questions/25817347/meteor-is-crashing-on-the-smallest-digitalocean-droplet-out-of-memory-kill-pro)

Commands to run:
* docker docker run -p 27017:27017 --name mongo_instance -d mongo
* docker run    -e ROOT_URL=http://your_ip     -e MONGO_URL=mongodb://your_ip:27017/meteor   -p 8080:80 mystec/ammdash
If you already have a mongo container running for another app (most likely mongo set up with MUP), you can link to that one like this:
docker run --link=mongo_instance:mongo -e ROOT_URL=http://your_ip -e MONGO_URL=mongodb://mongo:27017/meteor -p 8080:80 mystec/ammdash
