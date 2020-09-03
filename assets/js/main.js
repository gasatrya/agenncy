( function( $ ) {

	$( function() {

		// Responsive popup
		$( '.zoom-link' ).magnificPopup( {
			type: 'image',
			retina: {
				ratio: 2
			}
		} );

		// One page nav
		$( '.navbar-nav, .intro-content-inner' ).onePageNav( {
			scrollSpeed: 1000
		} );

	} );

	/**
	 * Add custom class when scrolling
	 */
	$( window ).scroll( function() {
		if ( window.scrollY > 15 ) {
			$( "nav.navbar" ).addClass( "slidenav" );
		} else {
			$( "nav.navbar" ).removeClass( "slidenav" );
		}
	} );

	/**
	 * Preloader
	 */
	$( window ).load( function() {
		"use strict";
		$( ".status" ).fadeOut();
		$( ".preloader" ).delay( 1000 ).fadeOut( "slow" );
	} )

	/**
	 * Flexlider
	 */
	$( window ).load( function() {
		$( '.flexslider' ).flexslider( {
			animation: "slide",
			controlNav: false,
			pauseOnHover: true,
			pauseOnAction: false,
			prevText: "",
			nextText: "",
		} );
	} );

}( jQuery ) );

/**
 * Initialize AOS
 */
AOS.init({
	duration: 1000
});
