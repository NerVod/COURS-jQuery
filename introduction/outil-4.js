function monOutil(elements) {
	function init(elements) {
		this.balises = document.querySelectorAll(elements);
	};
	let outil = new init(elements);

	outil.actions = outil.__proto__;

	outil.actions.balayage = function(actionARealiser) {
		for (let i=0;i<outil.balises.length;i++) {
			actionARealiser(outil.balises[i]);
		}
	};

	outil.actions.masquer = function() {
		this.balayage(function(uneCible) {
			uneCible.style.display = 'none';
		});
	};

	outil.actions.texte = function(leTexte) {
		this.balayage(function(uneCible) {
			uneCible.innerHTML = leTexte;
		});
	};
	return outil;
};