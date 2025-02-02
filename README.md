# Cachecker

**Cachecker** est une extension de navigateur conçue pour les développeurs. Elle permet de vérifier rapidement si la page affichée est bien à jour en affichant la durée écoulée depuis la dernière modification, d'après l'en-tête `Last-Modified` renvoyé par le serveur.

## À quoi sert Cachecker ?

Lors du développement ou en production, il peut arriver que le navigateur affiche une version obsolète d'une page à cause du cache. **Cachecker** aide à identifier ce problème en affichant dans un popup le temps écoulé depuis la dernière modification de la page. Cela permet de :
- Vérifier que vos modifications récentes sont bien prises en compte.
- Diagnostiquer les problèmes liés à un cache persistant.
- Gagner du temps en éliminant les doutes sur la version chargée.

## Fonctionnalités

- **Affichage du temps écoulé**  
  Le popup indique la durée depuis la dernière modification de la page, basée sur l'en-tête `Last-Modified`.

- **Interface minimaliste**  
  Une interface simple et intuitive pour une vérification rapide.

- **Assistance au débogage**  
  Aide à repérer rapidement si la page affichée est obsolète à cause du cache.

## Installation

### Pour Google Chrome

1. Ouvrez Chrome et accédez à `chrome://extensions/`.
2. Activez le **Mode développeur** (coin supérieur droit).
3. Cliquez sur **Charger l'extension non empaquetée** et sélectionnez le dossier contenant les fichiers de l'extension.

### Pour Mozilla Firefox

1. Ouvrez Firefox et rendez-vous sur `about:debugging#/runtime/this-firefox`.
2. Cliquez sur **Charger un module complémentaire temporaire** et sélectionnez le fichier `manifest.json` de l'extension.

## Utilisation

1. Rendez-vous sur la page web que vous développez ou que vous souhaitez vérifier.
2. Cliquez sur l'icône **Cachecker** dans la barre d'outils du navigateur.
3. Le popup affichera la durée écoulée depuis la dernière modification de la page (d'après l'en-tête `Last-Modified`).
4. Si le temps affiché ne correspond pas à vos récentes modifications, cela peut indiquer que le cache empêche l'affichage de la version mise à jour. Pensez alors à vider le cache du navigateur.

## Contribuer

Pour toute proposition, contactez-nous sur [cmoikvolelorange@gmail.com](mailto:cmoikvolelorange@gmail.com)

---
