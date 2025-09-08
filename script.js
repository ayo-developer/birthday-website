// 🎵 Optional: Play a birthday song automatically
window.addEventListener("load", () => {
    let audio = new Audio("Simi-Happy-Birthday-Ft-Adekunle-Gold-And-DeJa-(TrendyBeatz.com).mp3"); // put your mp3 file in the same folder
    audio.play().catch(() => {
        console.log("Autoplay blocked — click anywhere to start music 🎶");
    });

    // Allow manual play on click if blocked
    document.body.addEventListener("click", () => {
        audio.play();
    });
});
