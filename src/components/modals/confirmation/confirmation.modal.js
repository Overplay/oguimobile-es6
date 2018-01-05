let template = require( 'ngtemplate-loader!html-loader!./confirmmodal.template.html' );


/**
 *
 * Provides a very basic UIB confirm modal with almost no options. Returns the result promise.
 *
 * Usage:  uibHelper.confirmModal("My Title", "Body Text", true)
 *            .then( function(confirmed){
 *              // do something with confirmation
 *                        });
 *
 * @param {String} title
 * @param {String} body
 * @param {*} confirmValue
 * @returns {Promise}
 */
export default function( title, body, confirmValue ) {

    // `this` gets set up correctly by the parent class `uibhelper`
    const modalInstance = this.$uibModal.open( {
        templateUrl: template,
        controller:  function ( $scope, $uibModalInstance, params ) {

            $scope.modalUi = { title: params.title, body: params.body };

            $scope.ok = function () {
                $uibModalInstance.close( params.confirmValue );
            }

            $scope.cancel = function () {
                $uibModalInstance.dismiss( 'cancel' );
            }

        },
        resolve:     {
            params: function () {
                return { title: title, body: body, confirmValue: confirmValue };
            }
        }
    } );

    return modalInstance.result;


}
