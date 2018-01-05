/**
 *
 * Import this into the main entry if you want angular 1.5+ capability.
 * Created by mkahn on 10/15/17.
 *
 * */

require ('bootstrap/dist/css/bootstrap.min.css');

import angular from 'angular';
import ogUi from '../../../index'
import controlComponent from './controlapp.component'

const ngModule = angular.module( 'ngApp', [ ogUi ] );

// Register components

ngModule.component( controlComponent.$name$, controlComponent );

ngModule.run( [ '$log',
    function ( $log ) {
        $log.debug('control app test starting...')
    } ] );


angular.bootstrap( document, [ 'ngApp' ] );




