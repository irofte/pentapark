(function () {
  angular
    .module('admin')
    .controller('AdminController', AdminController);

  function AdminController() {
   var admin = this;

   admin.test = 'Administration Test';


  }


})();
