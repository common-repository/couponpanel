/*! Copyright (C) 2014-2022 Feeds4 - All Rights Reserved
 * 	Unauthorized copying of this file, via any medium, is strictly prohibited
 * 	v1.7.0 CouponPanel (https://www.feeds4.com/couponpanel)
 * 	Written by Feeds4 <wordpress@feeds4.com>, January 2022
 */
 
jQuery(document).ready(function($) {
	
	jQuery(".cpnl-click").click(function(event) {
		event.preventDefault();
		var cid = jQuery(this).attr("data-cpnl-cid");
		var sid = jQuery(this).attr("data-cpnl-sid");
		var url = jQuery(this).attr("data-cpnl-url");
		var mod = jQuery(this).attr("data-cpnl-mod");
		if (url) {
			url = atob(url);
		}
		if ( mod == "false" ) {
			if (url) {
				window.open(url, '_blank');
			}
				return 
		}
		if ( mod == "true" ) {
			if (cid) {
				window.localStorage.setItem('cpnl-mopop-cid', cid);
			}
			if (sid) {
				window.localStorage.setItem('cpnl-mopop-sid', sid);
				url = url+"&sid="+sid;
			}
			window.open(window.location.href, '_blank');
			window.open(url, '_self');
			return
		}
		return
	});
	
	jQuery(".cpnl-mid").click(function(event) {
		event.preventDefault();
		var id = jQuery(this).attr("data-cpnl-mid");
		if (id) {
			if ( id == "all" ) {
				jQuery(".cpnl-coupon").show();
			} else {
				jQuery(".cpnl-coupon").hide();
				jQuery(".cpnl-"+id).show();
			}
		}
	});
	
	if (window.localStorage.getItem('cpnl-mopop-cid')) {
		var cid = window.localStorage.getItem('cpnl-mopop-cid');
		var sid = window.localStorage.getItem('cpnl-mopop-sid');
		if (cid) {
			jQuery('#cpnl_modal').modal('toggle');
			jQuery.ajax({
				type: 'POST',
				url: cpnl_a_u.ajaxurl,
				dataType: 'json',
				data: {
					action: 'cpnl_m_o',
					cid: cid,
					sid: sid,
				},
				success: function(response) {
					var cpnl = response.html;
					jQuery('.modal-data').html(cpnl);
				},			
			});
		}
		window.localStorage.removeItem('cpnl-mopop-cid');
		if (sid) {
			window.localStorage.removeItem('cpnl-mopop-sid');
		}
	}
	
});