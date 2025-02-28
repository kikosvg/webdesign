document.addEventListener("DOMContentLoaded", () => {
    
    const maintainButton = document.querySelector(".reveal-btn");
    maintainButton.addEventListener("click", () => {
        const maintainInfo = document.getElementById("maintain-info");

        
        maintainInfo.textContent =
            "Maintaining your fake nails is essential to ensure they remain in great condition, look stylish, and protect your natural nails. Minimize soaking your hands in water, wear gloves when doing household chores, and avoid using your nails as tools.";

        
        maintainButton.style.display = "none";
    });

    
    const trendsButton = document.getElementById("update-content");
    trendsButton.addEventListener("click", () => {
        const trendsInfo = document.querySelector(".dynamic-text");

        
        trendsInfo.textContent =
            "In 2024, nail trends include metallic and chrome finishes, offering a sleek and futuristic aesthetic. Other trends include 3D nail art, coquette-inspired styles featuring bows and checkered patterns, and the resurgence of press-on nails for quick and easy application.";

        
        trendsButton.style.display = "none";
    });
});
