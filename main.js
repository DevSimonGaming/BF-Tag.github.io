document.addEventListener("DOMContentLoaded", () => {
    const sendenButton = document.getElementById("einsatz_senden");

    sendenButton.addEventListener("click", () => {
        const stichwort = document.getElementById("stichwort_select").value.trim();
        const adresse = document.getElementById("adresse").value.trim();
        const meldender = document.getElementById("meldender").value.trim();
        const info = document.getElementById("info").value.trim();
        const freitext = document.getElementById("freitext").value.trim();

        if (!stichwort || !adresse || !meldender || !info || !freitext) {
            alert("Bitte füllen Sie alle Felder aus.");
            return;
        }

        const params = new URLSearchParams({
            stichwort: stichwort,
            adresse: adresse,
            meldender: meldender,
            info: info,
            freitext: freitext
        });

        window.location.href = `einsatz_senden.html?${params.toString()}`;
    });
});