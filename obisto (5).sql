-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 15 nov. 2022 à 12:42
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `obisto`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_Categorie` int(11) NOT NULL,
  `Categorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_Categorie`, `Categorie`) VALUES
(14, 'Caméra'),
(15, 'Jeu vidéo'),
(18, 'Machine'),
(17, 'Outil'),
(13, 'sono'),
(16, 'Téléphone');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `id_commande` int(11) NOT NULL,
  `id_objet` int(11) NOT NULL,
  `objet` varchar(20) DEFAULT NULL,
  `date_debut` varchar(16) NOT NULL,
  `date_fin` varchar(16) NOT NULL,
  `periode` int(3) NOT NULL,
  `prix_total` int(15) NOT NULL,
  `nom_destinataire` varchar(100) NOT NULL,
  `prenom_destinataire` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `quartier` varchar(50) NOT NULL,
  `id_proprietaire` int(11) NOT NULL,
  `date_de_commande` varchar(16) NOT NULL,
  `statut` varchar(30) NOT NULL DEFAULT 'Reçu'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id_commande`, `id_objet`, `objet`, `date_debut`, `date_fin`, `periode`, `prix_total`, `nom_destinataire`, `prenom_destinataire`, `email`, `phone`, `quartier`, `id_proprietaire`, `date_de_commande`, `statut`) VALUES
(1, 184, 'Iphone 13 Pro', '10/12/2022', '19/12/2022', 9, 135000, 'Bilong', 'Junior', 'bilongjunior@gmail.com', '066775552', 'Cité Akosso', 42, '14/11/2022', 'Reçu'),
(2, 181, 'Speaker JBL', '8/12/2022', '10/12/2022', 2, 15000, 'Mboutsou', 'Vinny', 'mboutsouvinny@gmail.com', '062589614', 'Boulevard Ondimba', 41, '15/11/2022', 'Reçu');

-- --------------------------------------------------------

--
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id_objet` int(11) NOT NULL,
  `objet` varchar(20) DEFAULT NULL,
  `caution` varchar(30) DEFAULT 'Aucune',
  `etat` varchar(30) NOT NULL DEFAULT 'Excellent',
  `prix_jour` int(30) NOT NULL,
  `prix_semaine` int(30) NOT NULL,
  `Categorie` varchar(40) NOT NULL,
  `id_proprietaire` int(9) NOT NULL,
  `statut` varchar(15) NOT NULL DEFAULT 'Disponible',
  `date_dajout` varchar(14) NOT NULL,
  `image1` varchar(300) NOT NULL DEFAULT 'image.png',
  `image2` varchar(300) NOT NULL DEFAULT 'image.png',
  `image3` varchar(300) NOT NULL DEFAULT 'image.png',
  `image4` varchar(300) NOT NULL DEFAULT 'image.png',
  `image5` varchar(300) NOT NULL DEFAULT 'image.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id_objet`, `objet`, `caution`, `etat`, `prix_jour`, `prix_semaine`, `Categorie`, `id_proprietaire`, `statut`, `date_dajout`, `image1`, `image2`, `image3`, `image4`, `image5`) VALUES
(177, 'Canon 650D', 'Aucune', 'Neuf', 8000, 40000, 'Caméra', 42, 'Disponible', '11-11-2022', 'canon.jfif', 'image.png', 'image.png', 'image.png', 'image.png'),
(178, 'Iphone XS', '50000fcfa', 'Excellent', 7000, 35000, 'Téléphone', 42, 'Disponible', '11-11-2022', 'IphoneX.jpg', 'image.png', 'image.png', 'image.png', 'image.png'),
(179, 'Tondeuse à Gazon', '55000fcfa', 'Bon', 10000, 50000, 'Machine', 42, 'Disponible', '11-11-2022', 'image.png', 'image.png', 'image.png', 'image.png', 'image.png'),
(180, 'Playstation 4', '75000fcfa', 'Excellent', 10000, 55000, 'Jeu vidéo', 41, 'Disponible', '11-11-2022', 'ps4slim.jpg', 'image.png', 'image.png', 'image.png', 'image.png'),
(181, 'Speaker JBL', 'Aucune', 'Bon', 7500, 38000, 'Sono', 41, 'Disponible', '11-11-2022', 'jbl.jfif', 'image.png', 'image.png', 'image.png', 'image.png'),
(182, 'Cisaille de jardin', 'Aucune', 'Assez bon', 3500, 25000, 'Outil', 41, 'Disponible', '11-11-2022', 'Scisaille.jpg', 'image.png', 'image.png', 'image.png', 'image.png'),
(183, 'Fifa 22 (PS4)', 'Aucune', 'Excellent', 3000, 15000, 'Jeu vidéo', 42, 'Disponible', '11-11-2022', 'fifa.jpeg', 'image.png', 'image.png', 'image.png', 'image.png'),
(184, 'Iphone 13 Pro', '200000fcfa', 'Neuf', 15000, 75000, 'Téléphone', 42, 'Disponible', '11-11-2022', 'iphone13.jfif', 'image.png', 'image.png', 'image.png', 'image.png'),
(185, 'Playstation 4 fat (5', '', 'Bon', 6500, 40000, 'Jeu vidéo', 42, 'Disponible', '13-11-2022', 'ps4.jfif', 'PS4.png', 'image.png', 'image.png', 'image.png'),
(186, 'Moulinex', 'Aucune', 'Excellent', 2000, 10000, 'Machine', 42, 'Disponible', '13-11-2022', 'Mixeur.jpeg', 'image.png', 'image.png', 'image.png', 'image.png');

-- --------------------------------------------------------

--
-- Structure de la table `proprietaires`
--

CREATE TABLE `proprietaires` (
  `id_proprietaire` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_de_naissance` varchar(50) NOT NULL,
  `sexe` varchar(50) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `email_proprio` varchar(150) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `proprietaires`
--

INSERT INTO `proprietaires` (`id_proprietaire`, `nom`, `prenom`, `date_de_naissance`, `sexe`, `telephone`, `email_proprio`, `password`) VALUES
(41, 'Zinga', 'Clenn', '12-05-1998', 'Garçon', '077456321', 'zingaclenn@gmail.com', 'ZingaClenn'),
(42, 'Obiang', 'Yohann', '21-10-1997', 'Garçon', '077482253', 'yohanndian@gmail.com', 'YohannObiang');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_Categorie`),
  ADD UNIQUE KEY `Categorie` (`Categorie`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id_commande`),
  ADD KEY `id_objet` (`id_objet`),
  ADD KEY `id_proprietaire` (`id_proprietaire`),
  ADD KEY `objet` (`objet`);

--
-- Index pour la table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`id_objet`),
  ADD KEY `Categorie` (`Categorie`),
  ADD KEY `id_proprietaire` (`id_proprietaire`),
  ADD KEY `objet` (`objet`);

--
-- Index pour la table `proprietaires`
--
ALTER TABLE `proprietaires`
  ADD PRIMARY KEY (`id_proprietaire`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `commandes`
  MODIFY `id_commande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `objets`
--
ALTER TABLE `objets`
  MODIFY `id_objet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT pour la table `proprietaires`
--
ALTER TABLE `proprietaires`
  MODIFY `id_proprietaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`id_objet`) REFERENCES `objets` (`id_objet`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `commandes_ibfk_2` FOREIGN KEY (`id_proprietaire`) REFERENCES `proprietaires` (`id_proprietaire`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `objets`
--
ALTER TABLE `objets`
  ADD CONSTRAINT `objets_ibfk_1` FOREIGN KEY (`Categorie`) REFERENCES `categories` (`Categorie`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `objets_ibfk_2` FOREIGN KEY (`id_proprietaire`) REFERENCES `proprietaires` (`id_proprietaire`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
