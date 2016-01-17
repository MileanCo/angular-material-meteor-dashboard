
angular.module("app.core")
  .controller("DocumentationCtrl", ['$scope', '$rootScope', '$state', '$location', function ($scope, $rootScope, $state, $location) {
    var vm = this;

    $scope.modules = {
      'auth':  "Contains all authentication related functionality. Login, registration, and reset-password views & controllers. Meteor handles the real 'authentication' meat behind the scenes. All we do is call their functions.",
      'charts':  "Contains all charting libraries and their use case examples. ",
      'core':  "Core module of the entire app. It is the parent of all other sub-modules. Shared content goes here - breadcrumbs, home page, sidebar, topbar, navigation, etc. Look inside core.html",
      'dashboard': "Contains all views, controllers, and directives related to the Dashboard functionality. 'dashboard.html' is the parent of the tabbed child-pages (<i>example1.html, instances.html, and profile.html</i>). <br> \
                        Also, the directives 'widget-card' and 'widget-task' and their HTML template code is located here. These can be used anywhere in the app.",
      'forms': "Contains example code for Material form elements (Radio buttons, Checkboxes, Input, Selects, etc).",
      'forms/wizard':  "A sub-module contained within form that shows how a Wizard can be created.",
      'maps':  "Google Maps module that shows how maps can be included. ",
      'menu':  "<b>Contains all menus! </b> MenuCtrl controls ALL menus. Modify SideMenuService for sidebar navs, and header_toolbar.html/MenuCtrl for top nav.",
      'menu/directives/templates': "Contains directive templates used by Sidebar! ",
      'menu/views/includes': "The html files in views/includes are used by core.html to build the app layout (sidebar, header nav, search, & footer).",
      'tables':  "Contains sample code for how tables are built.",
      'ui': "Contains sample code for Dashboard Directives and Material UI elements (buttons, cards, components, icons, wigdets, etc)",
      'ui/views/dialogs':"Contains code for all pop-up dialogs from UI components.",
    };

    $scope.folders = {
      '.meteor': "All Meteor configuration and run-time files located here. You really only need to edit the file 'packages' (keeps track of all Meteor packages installed) and maybe 'versions' (keeps track of package versions). ",
      '.meteor/local':  "Meteor local build folder. Do not edit.",
      'client': "Any directory named client is not loaded on the server. Similar to wrapping your code in if (Meteor.isClient) { ... }. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.) <br><br> \
                HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: <head>, <body>, and <template>. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.",
      'client/lib': "Common code like collections and utilities. Angular Modules and their dependencies are defined here.",
      'client/lib/theme': "Defines the Material theme colors and visuals.",
      'client/modules': "Separates functionality of the Angular app. Can be thought of as separate 'mini-angular apps'; they should function independently (with few exceptions). ex) A Module for the 'calculator' feature of a site.  ",
      'client/styles':"Contains all CSS code for app.",
      'client/styles/demos':"Contains all demo CSS used for Material demos.",
      'client/styles/material-colors':"CSS for Google Material colors. Modify md-theme.less to change color layouts.",
      'model':"Contains Meteor shared code for client & server. Defines Model objects (fields, attributes, functions/subroutines, etc.)",
      'packages':"Custom packages for Meteor app.",
      'packages/data-generator-json':"Custom package used to insert data into Mongo database.",
      'private':"All files inside a top-level directory called <i>private</i> are only accessible from server code and can be loaded via the <i>Assets API</i>. This can be used for private data files and any files that are in your project directory that you don't want to be accessible from the outside.",
      'public':"All files inside a top-level directory called public are served as-is to the client. When referencing these assets, do not include public/ in the URL, write the URL as if they were all in the top level. For example, reference <i>public/bg.png as \< img src='/bg.png' \> </i>. This is the best place for favicon.ico, robots.txt, and similar files.",
      'public/images':"Images loaded by client (but also accessible by server).",
      'server':"Any directory named server is not loaded on the client. Similar to wrapping your code in if (Meteor.isServer) { ... }, except the client never even receives the code. Any sensitive code that you don't want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server directory. <br><br>\
                Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node. We find the linear execution model a better fit for the typical server code in a Meteor application.",
      'server/startup':"Code only run at startup. Uses packages/data-generator-json to insert test data into Mongo.",
    };

  }]);
