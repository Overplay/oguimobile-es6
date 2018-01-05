import confirmModalF from './confirmation/confirmation.modal'
import headsUpModalF from './headsup/headsup.modal'
import dateModalF from './date/date.modal'
import selectListModalF from './selectlist/selectlist.modal'
import stringEditModalF from './stringedit/stringedit.modal'
import inputBoxesModalF from './inputboxes/inputboxes.modal'

let dryToastTemplate = require( 'ngtemplate-loader!html-loader!./drytoast/dry-toast.template.html' );
let _toast;

let curtainTemplate = require( 'ngtemplate-loader!html-loader!./curtain/curtain.template.html' );
let _curtain; // an angular.element

function removeCurtain(){
    if (_curtain){
        angular.element( document ).find( 'body' ).eq( 0 ).removeClass( 'curtain-open' );
        _curtain.remove();
        _curtain = null;
    }
}

export default class UIBHelper {

    constructor( $log, $uibModal, $timeout, $templateCache ) {

        this.$log = $log;
        this.$uibModal = $uibModal;
        this.$timeout = $timeout;
        this.$templateCache = $templateCache;

        // Strap on the individual modals here and bind to `this` (critical)

        // Confirm dialog
        this.confirmModal = confirmModalF.bind( this );
        // Heads up dialog
        this.headsupModal = headsUpModalF.bind( this );
        // synonym for heads up
        this.headsUpModal = headsUpModalF.bind( this );
        // date modal
        this.dateModal = dateModalF.bind(this);
        // select list
        this.selectListModal = selectListModalF.bind(this);
        // string edit
        this.stringEditModal = stringEditModalF.bind(this);
        // input boxes
        this.inputBoxesModal = inputBoxesModalF.bind(this);

    }

    /**
     * Throws up a toast like Android
     * @param {string} msg
     * @param {number} delay in ms
     * @returns {{dismiss: dismissT}}
     */
    dryToast(msg, delay){

        // NOTE: This code is here vs a separate file since it needed a bunch of angular
        // dependencies.

        let toastHTML = this.$templateCache.get( dryToastTemplate );
        const m = msg || "Have a nice day :)";
        toastHTML = toastHTML.replace( '$$message$$', m );
        _toast = angular.element( toastHTML );

        const body = angular.element( document ).find( 'body' ).eq( 0 );

        body.append( _toast );

        const d = delay | 1000;

        function dismissT() {
            _toast.remove();
        }

        this.$timeout( dismissT, d );

        return {
            dismiss: dismissT
        }
    }

    curtainModal ( title ) {

        // NOTE: This code is here vs a separate file since it needed a bunch of angular
        // dependencies.

        let chtml = this.$templateCache.get( curtainTemplate );
        chtml = chtml.replace( '$$message$$', title || '' );
        _curtain = angular.element( chtml );

        const body = angular.element( document ).find( 'body' ).eq( 0 );

        body.append( _curtain );
        body.addClass( 'curtain-open' );

        return {
            dismiss: removeCurtain
        }

    }

    dismissCurtain() {
        removeCurtain();
    }
}

UIBHelper.$inject = [ '$log', '$uibModal', '$timeout', '$templateCache' ];
