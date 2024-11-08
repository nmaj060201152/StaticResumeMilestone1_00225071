// TYPESCRIPT
// Function to toggle visibility of sections
var showhidee = function (sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var isVisible = section.style.display === 'block';
        section.style.display = isVisible ? 'none' : 'block';
        // Adjust bulb button color based on visibility
        var button = document.querySelector("button[onclick=\"showhidee('".concat(sectionId, "')\"]"));
        if (button) {
            button.classList.toggle('on', !isVisible); // Toggle yellow color when visible
        }
    }
};
// Function to change the theme color
var changeTheme = function () {
    var themes = ['#FF5733', '#C70039', '#900C3F', '#581845', '#1ABC9C', '#16A085', '#F1C40F', '#F39C12', '#3498DB', '#2980B9', '#9B59B6', '#8E44AD', '#2ECC71', '#27AE60', '#E74C3C', '#C0392B', '#E67E22', '#D35400', '#34495E', '#2C3E50'];
    var randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.backgroundColor = randomTheme;
};
// Function to toggle dark mode
var toggleDarkMode = function () {
    document.body.classList.toggle('dark-mode');
};
// Persistent bulb color toggle on each button
document.querySelectorAll('.bulb').forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('on'); // Toggle persistent "on" state
    });
});
