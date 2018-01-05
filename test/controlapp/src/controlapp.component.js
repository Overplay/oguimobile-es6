require( './control.scss' );

class Controller {
    constructor( $log, uibHelper, $timeout ) {

        this.$log = $log;
        this.$log.debug( 'loaded Control Controller.' );
        this.uibHelper = uibHelper;
        this.$timeout = $timeout;


    }


    $onInit() {
        this.$log.debug( 'In $onInit' );

        this.uibHelper.dryToast("Hello thar!", 5000);
        this.uibHelper.curtainModal('Eat Snatch!');

        this.$timeout(()=>{

            this.uibHelper.dismissCurtain();

        }, 3000)
        /*
        this.uibHelper.confirmModal('A Test', 'Here lies a test!', true)
            .then(()=>{
                this.$log.debug('Confirm done');
                return this.uibHelper.headsupModal('Heads up', 'How you like this body text?');
            })
            .then(()=>{
                this.$log.debug('Heads up done');
                return this.uibHelper.dateModal( 'Date Modal', 'Pick a date?', new Date() );
            })
            .then( () => {
                this.$log.debug( 'Date done' );
            })
            .catch(()=>{
                this.$log.warn('Escaped');
            })
            */
    }


    $onDestroy() {
        this.$log.debug( 'In $onDestroy' );
    }

    // injection here
    static get $inject() {
        return [ '$log', 'uibHelper', '$timeout' ];
    }
}

export const name = 'controlComponent';

const Component = {
    $name$:       name,
    bindings:     {},
    controller:   Controller,
    controllerAs: '$ctrl',
    template:     `
            <div class="row">
                <div class="col-sm-2">
                   Hello
                </div>
                <div class="col-sm-4">
                    There
                </div>
             </div>
           
            `
};

export default Component
