-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 11 nov. 2022 à 17:29
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
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id_objet` int(11) NOT NULL,
  `objet` varchar(20) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `prix_jour` int(30) NOT NULL,
  `prix_semaine` int(30) NOT NULL,
  `Categorie` varchar(40) NOT NULL,
  `id_proprietaire` int(9) NOT NULL,
  `statut` varchar(15) NOT NULL DEFAULT 'Disponible',
  `date_dajout` varchar(14) NOT NULL,
  `image1` varchar(300) NOT NULL DEFAULT 'image',
  `image2` varchar(300) NOT NULL DEFAULT 'image',
  `image3` varchar(300) NOT NULL DEFAULT 'image',
  `image4` varchar(300) NOT NULL DEFAULT 'image',
  `image5` varchar(300) NOT NULL DEFAULT 'image'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id_objet`, `objet`, `description`, `prix_jour`, `prix_semaine`, `Categorie`, `id_proprietaire`, `statut`, `date_dajout`, `image1`, `image2`, `image3`, `image4`, `image5`) VALUES
(177, 'Canon 650D', NULL, 8000, 40000, 'Caméra', 42, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(178, 'Iphone XS', NULL, 7000, 35000, 'Téléphone', 42, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(179, 'Tondeuse à Gazon', NULL, 10000, 50000, 'Machine', 42, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(180, 'Playstation 4', NULL, 10000, 55000, 'Jeu vidéo', 41, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(181, 'Speaker JBL', NULL, 7500, 38000, 'Sono', 41, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(182, 'Cisaille de jardin', NULL, 3500, 25000, 'Outil', 41, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(183, 'Fifa 23 (PS4)', NULL, 3000, 15000, 'Jeu vidéo', 42, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image'),
(184, 'Iphone 13 Pro', '', 15000, 75000, 'Téléphone', 42, 'Disponible', '11-11-2022', 'image', 'image', 'image', 'image', 'image');

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
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `proprietaires`
--

INSERT INTO `proprietaires` (`id_proprietaire`, `nom`, `prenom`, `date_de_naissance`, `sexe`, `telephone`, `password`) VALUES
(41, 'Zinga', 'Clenn', '12-05-1998', 'Garçon', '077456321', 'ZingaClenn'),
(42, 'Obiang', 'Yohann', '21-10-1997', 'Garçon', '077482253', 'YohannObiang');

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
-- Index pour la table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`id_objet`),
  ADD KEY `Categorie` (`Categorie`),
  ADD KEY `id_proprietaire` (`id_proprietaire`);

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
ALTER TABLE `categories`
  MODIFY `id_Categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `objets`
--
ALTER TABLE `objets`
  MODIFY `id_objet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT pour la table `proprietaires`
--
ALTER TABLE `proprietaires`
  MODIFY `id_proprietaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `objets`
--
ALTER TABLE `objets`
  ADD CONSTRAINT `objets_ibfk_1` FOREIGN KEY (`Categorie`) REFERENCES `categories` (`Categorie`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
