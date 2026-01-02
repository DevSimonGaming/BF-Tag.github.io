// Fahrzeuge.js

// Funktion, um Fahrzeugnamen von der API zu holen
async function getFahrzeugNamen() {
    const apiUrl = "https://bradtke.de/jf/api/get_fahrzeug_schluessel_liste.php"; // API-Endpunkt

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der API: ${response.status}`);
        }

        const data = await response.json();

        // Extrahiere nur die Namen der Fahrzeuge
        const namen = data.schluesselliste.map(fahrzeug => fahrzeug.name);

        return namen;
    } catch (error) {
        console.error("Fehler beim Laden der Fahrzeugliste:", error);
        return [];
    }
}

// Export der Funktion, damit sie in HTML oder anderen JS-Dateien nutzbar ist
export { getFahrzeugNamen };