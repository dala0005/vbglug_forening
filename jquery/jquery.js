$(document).ready(function(){

	/* CLICK FUNCTIONS */

	/* Click on Panel */
	/* Click on 'Nyheter' */
	/* Click on 'Nyheter' */
	$('#nyheter').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').show();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').hide();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'none');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#000000');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#FFFFFF');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#000000');			 
		}
		return false;
	});

	/* Click on 'Aktiviteter' */
	$('#aktiviteter').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').show();
			 $('#kalender_content').hide();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'none');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#000000');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#FFFFFF');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#000000');		 
		}
		return false;
	});

/* Click on 'Kalender' */
	$('#kalender').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').show();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'none');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#000000');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#FFFFFF');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#000000');			 
		}
		return false;
	});

	/* Click on 'Arkiv' */
	$('#arkiv').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').hide();
			 $('#arkiv_content').show();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'none');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#000000');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#FFFFFF');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#000000');		 
		}
		return false;
	});

	/* Click on 'Om vbglug' */
	$('#om_vbglug').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').hide();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').show();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'none');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#000000');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#FFFFFF');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#000000');			 
		}
		return false;
	});

	/* Click on 'Kontakta oss' */
	$('#kontakta_oss').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').hide();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').show();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'none');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#FFFFFF');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#FFFFFF');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#000000');		 
		}
		return false;
	});

/* Click on 'Styrelsen' */
	$('#styrelsen').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').hide();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').show();
			 $('#bli_medlem_content').hide();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'none');
			 $('#bli_medlem.active').css('pointer-events', 'auto');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#000000');
			 $('#bli_medlem').css('background-color', '#CE9307');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#FFFFFF');
			 $('#bli_medlem').css('color', '#000000');			 
		}
		return false;
	});
/* Click on 'Bli medlem' */
	$('#bli_medlem').on('click', function(){
		/* if pointer-events: auto */
		if ( $(this).hasClass('active')){
			 $('#nyheter_content').hide();
			 $('#aktiviteter_content').hide();
			 $('#kalender_content').hide();
			 $('#arkiv_content').hide();
			 $('#om_vbglug_content').hide();
			 $('#kontakta_oss_content').hide();
			 $('#styrelsen_content').hide();
			 $('#bli_medlem_content').show();

			 /* Set everything to auto except arkiv that will be none */
			 $('#nyheter.active').css('pointer-events', 'auto');
			 $('#aktiviteter.active').css('pointer-events', 'auto');
			 $('#kalender.active').css('pointer-events', 'auto');
			 $('#arkiv.active').css('pointer-events', 'auto');
			 $('#om_vbglug.active').css('pointer-events', 'auto');
			 $('#kontakta_oss.active').css('pointer-events', 'auto');
			 $('#styrelsen.active').css('pointer-events', 'auto');
			 $('#bli_medlem.active').css('pointer-events', 'none');

			 /* set background*/
			 $('#nyheter').css('background-color', '#CE9307');
			 $('#aktiviteter').css('background-color', '#CE9307');
			 $('#kalender').css('background-color', '#CE9307');
			 $('#arkiv').css('background-color', '#CE9307');
			 $('#om_vbglug').css('background-color', '#CE9307');
			 $('#kontakta_oss').css('background-color', '#CE9307');
			 $('#styrelsen').css('background-color', '#CE9307');
			 $('#bli_medlem').css('background-color', '#000000');

			 /* set color */

			 $('#nyheter').css('color', '#000000');
			 $('#aktiviteter').css('color', '#000000');
			 $('#kalender').css('color', '#000000');
			 $('#arkiv').css('color', '#000000');
			 $('#om_vbglug').css('color', '#000000');
			 $('#kontakta_oss').css('color', '#000000');
			 $('#styrelsen').css('color', '#000000');
			 $('#bli_medlem').css('color', '#FFFFFF');			 
		}
		return false;
	});


	/* HOVER FUNCTION */
	$('#nyheter, #aktiviteter, #kalender, #arkiv, #om_vbglug, #kontakta_oss, #styrelsen, #bli_medlem').hover(function(){
		if($(this).hasClass('active')){
			$(this).css('cursor', 'pointer');
			$(this).css('background-color', '#F6D50D');
			$(this).attr('unselectable', 'on');
            $(this).css('user-select', 'none');
            $(this).on('selectstart', false);
		}
		return false;
	});

	/* MOUSE OUT FUNCTION */
	$('#nyheter, #aktiviteter, #kalender, #arkiv, #om_vbglug, #kontakta_oss, #styrelsen, #bli_medlem').mouseout(function(){
		if ($(this).hasClass('active')){
			if( $(this).css('color') == 'rgb(255, 255, 255)') {
				$(this).css('background-color', '#000000');
			}
			else{
				$(this).css('background-color', '#CE9307');
			}
		}
		return false;
	});
});