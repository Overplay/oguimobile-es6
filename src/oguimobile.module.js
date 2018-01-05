/**
 *
 * oguimobile.module.js
 *
 * uiOGMobile rewritten for Bellini/Blueline Architecture
 * ES6 module version
 *
 * January 2018
 *
 *
 **/

import uiBootstrap from 'angular-ui-bootstrap'
import UIBHelper from './components/modals/uibhelper'


(function ( window, angular ) {

    /**
     * Definition of the ourglassAPI module
     */
    const ogUiMobileModule = angular.module( 'ogUiMobile', [ uiBootstrap ] );

    ogUiMobileModule.service( 'uibHelper', UIBHelper );


})( window, window.angular );