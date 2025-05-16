// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
let isDarkMode = false;

function setLightMode() {
    body.style.setProperty('--primary-color', '#222831');
    body.style.setProperty('--secondary-color', '#eeeeee');
    body.style.setProperty('--text-color', '#222831');
    body.style.setProperty('--background-color', '#ffffff');
    body.style.setProperty('--accent-color', '#eeeeee');
    body.style.setProperty('--card-background', '#eeeeee');
    body.style.setProperty('--nav-background', '#ffffff');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

function setDarkMode() {
    body.style.setProperty('--primary-color', '#eeeeee');
    body.style.setProperty('--secondary-color', '#222831');
    body.style.setProperty('--text-color', '#eeeeee');
    body.style.setProperty('--background-color', '#222831');
    body.style.setProperty('--accent-color', '#393e46');
    body.style.setProperty('--card-background', '#393e46');
    body.style.setProperty('--nav-background', '#222831');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Set initial mode
setLightMode();

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        setDarkMode();
    } else {
        setLightMode();
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add typing effect to hero section
const heroTitle = document.querySelector('.hero-content h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Add animation to skill items on scroll
const skillItems = document.querySelectorAll('.skill-item');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    observer.observe(item);
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 255, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 255, 0, 0.1)';
    });
});

// Section fade-in on scroll
const sections = document.querySelectorAll('section');
function revealSectionsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('load', revealSectionsOnScroll); 