
angular.module("app.core")
  .controller("DocumentationCtrl", ['$scope', '$rootScope', '$state', '$location', function ($scope, $rootScope, $state, $location) {
    var vm = this;


    $scope.folders = {
      '.meteor': "All Meteor configuration and run-time files located here. You really only need to edit 'packages' (keeps track of all Meteor packages installed) and maybe 'versions' (keeps track of package versions). ",
      '.meteor/local':  "Meteor local build folder. Do not edit.",
      'client': "Any directory named client is not loaded on the server. Similar to wrapping your code in if (Meteor.isClient) { ... }. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.) <br><br> \
                HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: <head>, <body>, and <template>. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.",
      'client/lib': "",
      'client/lib/theme': "",
      'client/modules': "",
      'client/modules/auth':  "",
      'client/modules/charts':  "",
      'client/modules/core':  "",
      'client/modules/dashboard': "",
      'client/modules/forms': "",
      'client/modules/forms/wizard':  "",
      'client/modules/maps':  "",
      'client/modules/menu':  "",
      'client/modules/menu/directives/templates': "",
      'client/modules/menu/views/includes': "",
      'client/modules/tables':  "",
      'client/modules/ui':"",
      'client/modules/ui/views/dialogs':"",
      'client/styles':"",
      'client/styles/demos':"",
      'client/styles/material-colors':"",
      'model':"",
      'packages':"",
      'packages/data-generator-json':"",
      'private':"",
      'public':"All files inside a top-level directory called public are served as-is to the client. When referencing these assets, do not include public/ in the URL, write the URL as if they were all in the top level. For example, reference public/bg.png as <img src='/bg.png' />. This is the best place for favicon.ico, robots.txt, and similar files.",
      'public/images':"",
      'server':"Any directory named server is not loaded on the client. Similar to wrapping your code in if (Meteor.isServer) { ... }, except the client never even receives the code. Any sensitive code that you don't want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server directory. <br><br>\
                Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node. We find the linear execution model a better fit for the typical server code in a Meteor application.",
      'server/startup':"",
    };

  }]);
