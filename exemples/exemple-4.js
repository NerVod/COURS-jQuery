cibles = {};
$(function() {
	cibles.$img = $('img');

	// Nous calculons la hauteur de l'image la plus petite pour appliquer cette hauteur au bloc conteneur
	const hauteurDiaporama = function() {
		let hauteur = 10000;
		cibles.$img.each(function() {
			let hauteurImageCible = $(this).height();
			if (hauteurImageCible < hauteur) {
				hauteur = hauteurImageCible;
			}
		});
		$('.diaporama').height(hauteur);
	};
	hauteurDiaporama();
	$(window).resize(hauteurDiaporama);

	// Au chargement, nous masquons toutes les images du diaporama sauf la première
	$('img').hide().first().show().addClass('active');

	setInterval(function(){
		let $diapositiveActuelle = $('.active').fadeOut(1000).removeClass('active');
		if ($diapositiveActuelle.next().length) {
			$diapositiveActuelle = $diapositiveActuelle.next();
		} else {
			$diapositiveActuelle = $diapositiveActuelle.parent().children().first();
		}
		$diapositiveActuelle.fadeIn(1000).addClass('active');
	},3000);
});