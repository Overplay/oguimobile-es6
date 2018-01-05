let template = require( 'ngtemplate-loader!html-loader!./selectlistmodal.template.html' );


/**
 *
 * Provides a UIB  from a list of objects. Returns the result promise.
 *
 * Usage:  uibHelper.selectListModal("My Title", "Body Text", [[ "choice 1" "beer"], ["choice 2", "wine"]],
 * 1)
 *          .then( function(newDate){
 *              // do something with newDate
 *          });
 *
 * @param {string} title
 * @param {string} body
 * @param {string[]} choiceArray [ [ field1, field2, ... ], ... ]
 * @param {number} currentChoiceIdx
 * @returns {Promise}
 */
export default function ( title, body, choiceArray, currentChoiceIdx ) {

    const modalInstance = this.$uibModal.open( {
        templateUrl: template,
        controller:  function ( $scope, $uibModalInstance, params ) {

            $scope.modalUi = {
                title:         params.title, body: params.body, choices: params.choices,
                currentChoice: params.currentChoice, showChoice: !params.body
            };

            $scope.ok = function () {
                $uibModalInstance.close( $scope.modalUi.currentChoice );
            }

            $scope.cancel = function () {
                $uibModalInstance.dismiss( 'cancel' );
            }

        },
        resolve:     {
            params: function () {
                return { title: title, body: body, choices: choiceArray, currentChoice: currentChoiceIdx };
            }
        }
    } );

    return modalInstance.result;


}