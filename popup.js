// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.getElementById('status');
    const checkButton = document.getElementById('checkModification');
    
    checkButton.addEventListener('click', async () => {
      statusEl.textContent = "Vérification en cours…";
      
      // Récupération de l'onglet actif
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab) {
        statusEl.textContent = "Aucun onglet actif.";
        return;
      }
      
      try {
        // Requête fetch avec contournement du cache
        const response = await fetch(tab.url, { cache: 'no-store' });
        const lastModifiedHeader = response.headers.get("Last-Modified");
        
        if (!lastModifiedHeader) {
          statusEl.textContent = "L'en-tête 'Last-Modified' n'est pas disponible sur cette page.";
          return;
        }
        
        // Conversion de l'en-tête en objet Date
        const lastModifiedDate = new Date(lastModifiedHeader);
        if (isNaN(lastModifiedDate.getTime())) {
          statusEl.textContent = "La date de modification reçue n'est pas valide.";
          return;
        }
        
        // Calcul de la durée écoulée
        const now = new Date();
        let diffMs = now - lastModifiedDate; // en millisecondes
        
        // Conversion en jours, heures, minutes, secondes
        const seconds = Math.floor(diffMs / 1000) % 60;
        const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
        const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        // Formatage de l'affichage
        let diffString = "";
        if (days > 0) {
          diffString += days + " jour" + (days > 1 ? "s " : " ");
        }
        if (hours > 0 || days > 0) {
          diffString += hours + " heure" + (hours > 1 ? "s " : " ");
        }
        if (minutes > 0 || hours > 0 || days > 0) {
          diffString += minutes + " minute" + (minutes > 1 ? "s " : " ");
        }
        diffString += seconds + " seconde" + (seconds > 1 ? "s" : "");
        
        statusEl.textContent = "La page a été modifiée il y a " + diffString + ".";
      } catch (e) {
        statusEl.textContent = "Erreur lors de la vérification : " + e.message;
      }
    });
  });
  