(function(){

  'use strict';

  angular.module('app.menu')
    .factory('SideMenuService', ['$location', function ($location) {
        var sections = [
          { name: 'Home',
            state: 'core.home',
            type: 'link' },
          { name: 'Dashboard ',
            state: 'core.dashboard.home',
            type: 'link',
            icon: 'dashboard',
           },
        ];

        sections.push({
          name: 'Pages',
          type: 'toggle',
          pages: [
            {
              name: 'Login',
              type: 'link',
              state: 'login',
              icon: ''
            }, {
              name: 'Register',
              state: 'core.register',
              type: 'link',
              icon: ''
            }, {
              name: 'Reset Password',
              state: 'core.resetpw',
              type: 'link',
              icon: ''
            }
          ]
        });

        var self;

        return self = {
          sections: sections,

          toggleSelectSection: function (section) {
            self.openedSection = (self.openedSection === section ? null : section);
          },
          isSectionSelected: function (section) {
            return self.openedSection === section;
          },

          selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
          }
        };
      }])

})();
