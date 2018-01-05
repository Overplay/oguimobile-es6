let template = require( 'ngtemplate-loader!html-loader!./inputboxes.modal' );


/**
 *
 * Provides a  UIB  modal to edit a series of strings. Returns the result promise.
 *
 * Usage:  uibHelper.inputBoxesModal("My Title", "Body Text", paramsArray)
 *          .then( function(confirmed){
 *              // do something with confirmation
 *          });
 *
 * @param {string} title
 * @param {string} body
 * @param { object[]} fieldsArray [ { label:"First Name", placeholder: "LaLa", type: text, field: 'firstName', value:
 *     'John' }]
 * @returns {Promise}
 *
 */
export default function ( title, body, fieldsArray ) {

    const modalInstance = this.$uibModal.open( {
        templateUrl: template,
        controller:  function ( $scope, $uibModalInstance, params ) {

            $scope.modalUi = {
                title:       params.title,
                body:        params.body,
                fieldsArray: params.fieldsArray
            };


            $scope.ok = function () {
                var rval = {};
                $scope.modalUi.fieldsArray.forEach( function ( f ) {
                    rval[ f.field ] = f.value;
                } )
                $uibModalInstance.close( rval );
            }

            $scope.cancel = function () {
                $uibModalInstance.dismiss( 'cancel' );
            }

        },
        resolve:     {
            params: function () {
                return { title: title, body: body, fieldsArray: fieldsArray };
            }
        }
    } );

    return modalInstance.result;

}