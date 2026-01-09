    
        // Toggle dropdown menu
        const navToggle = document.getElementById('navToggle');
        const dropdownMenu = document.getElementById('dropdownMenu');

        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-menu')) {
                dropdownMenu.classList.remove('active');
            }
        });

        // Close dropdown when clicking on a menu item
        const menuItems = document.querySelectorAll('.dropdown-menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                dropdownMenu.classList.remove('active');
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    
