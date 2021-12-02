cibles = {};
let compteur = 1;
$(function() {
	cibles.$img = $('img');
	cibles.$img.each(function(i) {
		$(this).attr('id','image' + (i + 1));
	});
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
	$('img:not(:first-child)').hide();

	setInterval(function(){
		$('#image' + compteur).hide();
		if (compteur == cibles.$img.length) {
			compteur = 1;
		} else {
			compteur++;
		}
		$('#image' + compteur).show();
	},2000);
});