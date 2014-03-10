document.addEvent('domready', function(){

	"use strict";

	var Poker = {

	},

	Storage = {

	},

	Time = {

		now: function(){

			var date = new Date(),
				hours =  this.pad(date.getHours()),
				minutes = this.pad(date.getMinutes()),
				seconds = this.pad(date.getSeconds());

			return hours + ':' + minutes + ':' + seconds;
		},

		getSeconds: function(){

			var date = new Date();

			return (date.getSeconds() * 1000) + date.getMilliseconds();
		},

		pad: function(nr){

			var str = String(nr),
				pad = "00";

			return pad.substring(0, pad.length - str.length) + str;
		}
	},

	Page = {

		setCurrentTime: function(){

			$('current_time').set('html', Time.now());
		},

		setProgress: function(current, max){

			var degrees = (current / max) * 360,
				left = degrees - 180;

			if(left > 0){

				$('right_part').setStyle('transform', 'rotate(180deg)');
				$('left_part').setStyle('transform', 'rotate(' + left + 'deg)');
			}
			else{

				$('right_part').setStyle('transform', 'rotate(' + degrees + 'deg)');
				$('left_part').setStyle('transform', 'rotate(0deg)');
			}
		}
	};

	Page.setCurrentTime();
	Page.setProgress(Time.getSeconds(), 60000);

	setInterval(function(){

		Page.setCurrentTime();
		Page.setProgress(Time.getSeconds(), 60000);
	}, 1);
});



