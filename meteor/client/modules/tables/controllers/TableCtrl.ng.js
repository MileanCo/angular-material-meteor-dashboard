angular
  .module('app.tables')
  .controller('TableCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.headers = ['ID', 'Name', 'Email', 'Phone'];

    $scope.contacts = [
        {id: '10238', name:'Marc Barnes', email:'marc.barnes54@example.com', phone:'(382)-122-5003'},
        {id: '10243', name:'Glen Curtis', email:'glen.curtis11@example.com', phone:'(477)-981-4948'},
        {id: '10128',name:'Beverly Gonzalez', email:'beverly.gonzalez54@example.com', phone:'(832)-255-5161'},
        {id: '10448',name:'Yvonne Chavez', email:'yvonne.chavez@example.com	', phone:'(477)-446-3715'},
        {id: '10234',name:'Melinda Mitchelle', email:'melinda@example.com	', phone:'(813)-716-4996'},
        {id: '11138',name:'Shannon Bradley', email:'shannon.bradley42@example.com	', phone:'(774)-291-9928'},
        {id: '10456',name:'Virgil Kim', email:'virgil.kim81@example.com	', phone:'(219)-181-7898'},
        {id: '10564',name:'Letitia Robertson', email:'letitia.rober@example.com	', phone:'(647)-209-4589'},
        {id: '10254',name:'Claude King', email:'claude.king22@example.com	', phone:'(657)-988-8701'},
        {id: '11556',name:'Roland Craig', email:'roland.craig47@example.com	', phone:'(932)-935-9471'},
    ];

  }]);
