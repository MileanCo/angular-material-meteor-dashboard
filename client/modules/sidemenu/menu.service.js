(function(){

  'use strict';

  angular.module('app.sidemenu')
    .factory('MenuService', ['$location', function ($location) {
        var sections = [
          { name: 'Home',
            state: 'core.home',
            type: 'link' },
          { name: 'Dashboard ',
            state: 'core.dashboard',
            type: 'link' },
        ];

        sections.push({
          name: 'Material UI',
          type: 'toggle',
          pages: [
            {
              name: 'Buttons',
              type: 'link',
              state: 'core.ui.buttons',
              icon: 'univ'
            }, {
              name: 'Components',
              state: 'core.ui.components',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'Cards',
              state: 'core.ui.cards',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'Icons',
              state: 'core.ui.icons`',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'Tabs',
              state: 'core.ui.tabs',
              type: 'link',
              icon: 'fa fa-plus'
            }, {
              name: 'Timeline',
              state: 'core.ui.timeline',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'Typography',
              state: 'core.ui.typography',
              type: 'link',
              icon: 'fa fa-map-marker'
            },
          ]
        });

        sections.push({
          name: 'Tables',
          type: 'toggle',
          pages: [
            {
              name: 'Static',
              type: 'link',
              state: 'core.tables.static',
              icon: 'univ'
            }, {
              name: 'Dynamic',
              state: 'core.tables.dynamic`',
              type: 'link',
              icon: 'fa fa-map-marker'
            },
          ]
        });

        sections.push({
          name: 'Forms',
          type: 'toggle',
          pages: [
            {
              name: 'Elements',
              type: 'link',
              state: 'core.forms.elements',
              icon: 'univ'
            }, {
              name: 'Validation',
              state: 'core.forms.validation`',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'Wizard',
              state: 'core.forms.wizard`',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'Layout',
              state: 'core.forms.layout',
              type: 'link',
              icon: 'fa fa-map-marker'
            },
          ]
        });

        sections.push({
          name: 'Charts',
          type: 'toggle',
          pages: [
            {
              name: 'Google',
              type: 'link',
              state: 'core.buttons',
              icon: 'univ'
            }, {
              name: 'ChartJS',
              state: 'core.lists`',
              type: 'link',
              icon: 'fa fa-map-marker'
            }, {
              name: 'C3',
              state: 'core.lists`',
              type: 'link',
              icon: 'fa fa-map-marker'
            },
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
