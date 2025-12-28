/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Floating CTA Button.
		var $ctaButton = $('#cta-button');
		
		if ($ctaButton.length > 0) {
			$window.on('scroll', function() {
				var scrollTop = $window.scrollTop();
				
				if (scrollTop > 100) {
					$ctaButton.addClass('floating');
				} else {
					$ctaButton.removeClass('floating');
				}
			});
		}

	// Portfolio Modals.
		var $modalClose = $('.modal-close');

		// Cloud Integration Modal
		var $cloudModal = $('#cloud-integration-modal');
		var $cloudTriggers = $('.cloud-integration-trigger');
		$cloudTriggers.on('click', function(e) {
			e.preventDefault();
			$cloudModal.addClass('show');
			$body.css('overflow', 'hidden');
		});

		// AI-Powered Automation Modal
		var $aiModal = $('#ai-automation-modal');
		var $aiTriggers = $('.ai-automation-trigger');
		$aiTriggers.on('click', function(e) {
			e.preventDefault();
			$aiModal.addClass('show');
			$body.css('overflow', 'hidden');
		});

		// Data Processing Modal
		var $dataModal = $('#data-processing-modal');
		var $dataTriggers = $('.data-processing-trigger');
		$dataTriggers.on('click', function(e) {
			e.preventDefault();
			$dataModal.addClass('show');
			$body.css('overflow', 'hidden');
		});

		// Workflow Optimization Modal
		var $workflowModal = $('#workflow-optimization-modal');
		var $workflowTriggers = $('.workflow-optimization-trigger');
		$workflowTriggers.on('click', function(e) {
			e.preventDefault();
			$workflowModal.addClass('show');
			$body.css('overflow', 'hidden');
		});

		// RPA Modal
		var $rpaModal = $('#rpa-modal');
		var $rpaTriggers = $('.rpa-trigger');
		$rpaTriggers.on('click', function(e) {
			e.preventDefault();
			$rpaModal.addClass('show');
			$body.css('overflow', 'hidden');
		});

		// Close all modals
		$modalClose.on('click', function() {
			$('.modal').removeClass('show');
			$body.css('overflow', '');
		});

		$window.on('click', function(e) {
			if ($(e.target).hasClass('modal')) {
				$('.modal').removeClass('show');
				$body.css('overflow', '');
			}
		});

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);