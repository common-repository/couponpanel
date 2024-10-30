/*! Copyright (C) 2014-2022 Feeds4 - All Rights Reserved
 * 	Unauthorized copying of this file, via any medium, is strictly prohibited
 * 	v1.7.0 CouponPanel (https://www.feeds4.com/couponpanel)
 * 	Written by Feeds4 <wordpress@feeds4.com>, January 2022
 */
 
jQuery(document).ready(function($){
	
	jQuery( 'input:radio[name="cpnl_c_lo"]' ).change(function(){
		jQuery(".cpnl_layout").hide();
		jQuery(".cpnl_layout_" + jQuery(this).val()).show();
		jQuery('#cpnl_layout_preview').prop('src', jQuery(this).attr("data-url") + '/layout_' + jQuery(this).val() + '.png');
		
	});
	
});

jQuery(document).ready(function($){
	
	jQuery('input:radio[name="cpnl_i"]').change(function(){
		
		if (jQuery(this).val() == 'n') {
			jQuery("#cpnl_i").hide( "slow" );
		} else {
			jQuery("#cpnl_i").show( "slow" );
		}
		
	});
	
	if ( jQuery('input[name="cpnl_m_l"]:checked').val() == 's' ) {
		jQuery("#cpnl_s_m_l").show();
	} else {
		jQuery("#cpnl_c_m_l").show();
	}
		
	jQuery('input:radio[name="cpnl_m_l"]').change(function(){
		if (jQuery(this).val() == 'c') {
			jQuery("#cpnl_s_m_l").hide( "fast" );
			jQuery("#cpnl_c_m_l").show( "fast" );
		} else {
			jQuery("#cpnl_c_m_l").hide( "fast" );
			jQuery("#cpnl_s_m_l").show( "fast" );
		}
	});
	
});