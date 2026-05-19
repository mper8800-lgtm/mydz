// Пример простого скрипта для взаимодействия с пользователем
document.addEventListener("DOMContentLoaded", function() {
    const tipsSection = document.getElementById("tips");
    
    // Добавление события на клик для получения дополнительных советов
    tipsSection.addEventListener("click", function() {
        alert("Не забывайте о важности резервного копирования данных!");
    });

    // Плавный скролл к разделам
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Обработка отправки формы
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
        contactForm.reset();
    });
});