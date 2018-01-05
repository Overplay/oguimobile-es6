let template = require( 'ngtemplate-loader!html-loader!./stringedit.modal' );


/**
 *
 * Provides a very  UIB  modal to edit a single string. Returns the result promise.
 *
 * Usage:  uibHelper.stringEditModal("My Title", "Body Text", string2Edit)
 *          .then( function(confirmed){
 *              // do something with confirmation
 *          });
 *
 * @param {string} title
 * @param {string} body
 * @param {string} string2Edit
 * @param {string} placeholder
 * @returns {Promise}
 */
export default function ( title, body, string2Edit, placeholder ) {

    var modalInstance = this.$uibModal.open( {
        templateUrl: template,
        controller:  function ( $scope, $uibModalInstance, params ) {

            $scope.modalUi = {
                title:       params.title,
                body:        params.body,
                editString:  params.string2Edit,
                placeholder: params.placeholder || params.title
            };

            $scope.ok = function () {
                $uibModalInstance.close( $scope.modalUi.editString );
            }

            $scope.cancel = function () {
                $uibModalInstance.dismiss( 'cancel' );
            }

        },
        resolve:     {
            params: function () {
                return { title: title, body: body, string2Edit: string2Edit, placeholder: placeholder };
            }
        }
    } );

    return modalInstance.result;


}
