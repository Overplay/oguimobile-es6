import _isDate from 'lodash/isDate'

let template = require( 'ngtemplate-loader!html-loader!./datemodal.template.html' );


/**
 *
 * Provides a very  UIB  modal to pick a date. Returns the result promise.
 *
 * Usage:  uibHelper.dateModal("My Title", "Body Text", currentDateChoice)
 *          .then( function(newDate){
 *              // do something with newDate
 *          });
 *
 * @param {String} title
 * @param {String} body
 * @param {Date|String} currentDateChoice
 * @returns {Promise}
 */
export default function ( title, body, currentDateChoice ) {

    var modalInstance = this.$uibModal.open( {
        templateUrl: template,
        controller:  function ( $scope, $uibModalInstance, params ) {

            if ( !_isDate( params.currentDateChoice ) ) {
                params.currentDateChoice ?
                    params.currentDateChoice = new Date( params.currentDateChoice ) :
                    params.currentDateChoice = new Date();
            }

            $scope.modalUi = {
                title:             params.title,
                body:              params.body,
                date:              params.currentDateChoice,
                datePickerOptions: {
                    minDate:   new Date(),
                    showWeeks: true
                },
                time:              new Date( params.currentDateChoice )

            };

            $scope.ok = function () {
                $scope.modalUi.date.setHours( $scope.modalUi.time.getHours() );
                $scope.modalUi.date.setMinutes( $scope.modalUi.time.getMinutes() );
                $uibModalInstance.close( $scope.modalUi.date );
            }

            $scope.cancel = function () {
                $uibModalInstance.dismiss( 'cancel' );
            }

        },
        resolve:     {
            params: function () {
                return { title: title, body: body, currentDateChoice: currentDateChoice };
            }
        }
    } );

    return modalInstance.result;


}
