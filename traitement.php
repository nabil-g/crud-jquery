<?php

include 'db.php';

// INSERTION DANS LA BASE DE DONNÉES

if(isset($_POST['nom']) AND isset($_POST['message']) AND !empty($_POST['nom']) AND !empty($_POST['message'])) {
								//On supprime les potentielles balises HTML et on enregistre les variables du formulaire dans d'autres variables, plus lisibles.
								$name_us = strip_tags($_POST['nom']);
								$address_us = strip_tags($_POST['mailaddress']);
								$msg_us = strip_tags($_POST['message']);


								//ENREGISTREMENT DES DONNEES DANS LA BASE DE DONNEES

								//On prépare la requete d'insertion avant de lui insérer les variables de l'utilisateur (afin d'eviter des injections SQL).
								$req = $bdd->prepare('INSERT INTO msgsCrud(nom, message, date_m, heure_m)
									VALUES(:nom, :message, CURDATE(), CURTIME())');

								//On exécute la requete avec les variables "nettoyées" des éventuelles injections SQL.
								$req->execute(array(
									'nom' => $name_us,
									'message' => $msg_us,

									));

}

// SUPPRESSION DE LA BASE DE DONNÉES

if(isset($_POST['numero']) AND !empty($_POST['numero'])) {
	//SUPPRESSION DES DONNEES DANS LA BASE DE DONNEES

	//On prépare la requete d'insertion avant de lui insérer les variables de l'utilisateur (afin d'eviter des injections SQL).
	$req = $bdd->prepare('DELETE FROM msgsCrud WHERE ID = ?');

	//On exécute la requete avec les variables "nettoyées" des éventuelles injections SQL.
	$req->execute(array($_POST['numero']));

}

// MISE A JOUR DE LA BASE DE DONNÉES




//LECTURE DE DONNEES DANS LA BASE DE DONNEES

								//On prépare la requete (afin d'eviter des injections SQL).
								$req = $bdd->prepare('SELECT ID, nom, message FROM msgsCrud');

								//On exécute la requete avec les variables "nettoyées" des éventuelles injections SQL.
								$req->execute(array());

                echo '<tr><th>N°</th><th>Nom</th><th>Message</th><th>Actions</th></tr>';

								//On utilise une boucle pr lister tous les elements de la table (je les intègre en même temps dans un tableau HTML)
								// echo '<table id="tabhisto"><tr><th>N°</th><th>Nom</th><th>Adresse e-mail</th><th>Date</th><th>Heure</th><th>Message</th></tr>';
								while ($donnees = $req->fetch()) {
									echo '<tr><td class="num">' . $donnees['ID']."</td><td>". $donnees['nom'] . "</td><td>" . $donnees['message'] . '</td><td><a href="#" onclick="modifier(this, ' . $donnees['ID'] .')">Modifier</a><a href="#" onclick="supprimer(' . $donnees['ID'] .')">Supprimer</a></td></tr>';

								}



								$req->closeCursor();



 ?>
