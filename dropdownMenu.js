document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById("customer_details");
    const dropdown = document.getElementById("profile_option");

    menuButton.addEventListener('click', function () {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});