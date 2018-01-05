let template = require( 'ngtemplate-loader!html-loader!./headsupmodal.template.html' );


/**
 *
 * Provides a very basic UIB heads-up modal with almost no options. Returns the result promise.
 *
 * Usage:  uibHelper.headsupModal("My Title", "Body Text")
 *          .then( function(){
 *          });
 *
 * @param {String} title
 * @param {String} body
 * @returns {Promise}
 */
export default function ( title, body ) {

    var modalInstance = this.$uibModal.open( {
        templateUrl: template,
        controller:  function ( $scope, $uibModalInstance, params ) {

            $scope.modalUi = { title: params.title, body: params.body };

            $scope.ok = function () {
                $uibModalInstance.close();
            }


        },
        resolve:     {
            params: function () {
                return { title: title, body: body };
            }
        }
    } );

    return modalInstance.result;


}