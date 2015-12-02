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
            type: 'link',
            icon: 'dashboard',
           },
        ];

        sections.push({
          name: 'Material UI',
          type: 'toggle',
          pages: [
            {
              name: 'Buttons',
              type: 'link',
              state: 'core.ui.buttons',
              icon: ''
            }, {
              name: 'Components',
              state: 'core.ui.components',
              type: 'link',
              icon: 'extension'
            }, {
              name: 'Cards',
              state: 'core.ui.cards',
              type: 'link',
              icon: 'card_travel'
            }, {
              name: 'Icons',
              state: 'core.ui.icons',
              type: 'link',
              icon: 'fiber_manual_record'
            }, {
              name: 'Tabs',
              state: 'core.ui.tabs',
              type: 'link',
              icon: 'tab'
            }, {
              name: 'Timeline',
              state: 'core.ui.timeline',
              type: 'link',
              icon: ''
            }, {
              name: 'Typography',
              state: 'core.ui.typography',
              type: 'link',
              icon: ''
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
              state: 'core.tables-static',
              icon: ''
            }, {
              name: 'Dynamic',
              state: 'core.tables-dynamic',
              type: 'link',
              icon: ''
            },
          ]
        });

        sections.push({
          name: 'Forms',
          type: 'toggle',
          pages: [
            {
              name: 'Form Elements',
              type: 'link',
              state: 'core.forms.elements',
              icon: ''
            }, {
              name: 'Validation',
              state: 'core.forms.validation',
              type: 'link',
              icon: ''
            }, {
              name: 'Wizard',
              state: 'core.forms.wizard',
              type: 'link',
              icon: ''
            }, {
              name: 'Layout',
              state: 'core.forms.layout',
              type: 'link',
              icon: ''
            },
          ]
        });

        sections.push({
          name: 'Charts',
          type: 'toggle',
          pages: [
            {
              name: 'Google Charts',
              type: 'link',
              state: 'core.charts.google',
              icon: 'univ'
            }, {
              name: 'ChartJS',
              state: 'core.charts.chartjs',
              type: 'link',
              icon: ''
            }, {
              name: 'C3',
              state: 'core.charts.c3',
              type: 'link',
              icon: ''
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
