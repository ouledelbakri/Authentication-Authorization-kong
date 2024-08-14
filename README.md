# Projet de Migration API Gateway chez Gestform

## Description
Ce projet vise à moderniser l'infrastructure API de Gestform en migrant d'une API Gateway développée en interne vers une solution plus performante, évolutive et sécurisée, basée sur **Kong**. Cette migration inclut également l'intégration de **Keycloak** pour la gestion des identités et l'utilisation de **Docker** pour déployer une infrastructure conteneurisée. Des outils comme **Prometheus** et **Grafana** sont mis en place pour la surveillance des performances.

## Objectifs
1. **Évaluation de l'infrastructure API existante** : Identifier les points faibles pour faciliter la migration.
2. **Sélection et implémentation de Kong** : Déployer une nouvelle API Gateway adaptée aux besoins de Gestform.
3. **Gestion des identités avec Keycloak** : Centraliser la gestion des utilisateurs pour une meilleure sécurité.
4. **Surveillance des performances** : Utiliser Prometheus et Grafana pour monitorer l'infrastructure.
5. **Test et migration progressive** : Assurer une migration sans interruption des services.

## Technologies Utilisées
- **Kong** : API Gateway performante et scalable.
- **Keycloak** : Gestion des identités et des accès.
- **Docker** : Conteneurisation des services.
- **Prometheus & Grafana** : Outils de monitoring et de visualisation des performances.

## Installation et Déploiement
1. **Cloner le dépôt** : `git clone https://github.com/gestform/migration-api-gateway.git`
2. **Configurer les environnements** : Mettre à jour les fichiers de configuration pour Docker, Kong, et Keycloak.
3. **Déployer les conteneurs** : Utiliser Docker Compose pour déployer l'infrastructure.
4. **Vérifier les logs** : Assurer que tous les services sont déployés correctement en vérifiant les logs Docker.

## Contributeurs
- **Yassine Ouled el Bakri** : Chef de projet et développeur principal.
- **Damien Marangoni** : Tuteur entreprise.

## License
Ce projet est sous licence Gestform. 
