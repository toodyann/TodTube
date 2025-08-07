function toggleSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar');
    const body = document.body;
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
    // Якщо відкрите меню то сховати мобільний пошук
    if (sidebar.classList.contains('open')) {
        const searchForm = document.querySelector('.mobile-search-form');
        searchForm.classList.remove('active');
    }
}
function toggleMobileSearch() {
    const searchForm = document.querySelector('.mobile-search-form');
    const sidebar = document.querySelector('.mobile-sidebar');
    searchForm.classList.toggle('active');
    // Якщо відкритий пошук то сховати меню
    if (searchForm.classList.contains('active')) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }
}
// Закриття меню 
document.addEventListener('click', (e)=>{
    const sidebar = document.querySelector('.mobile-sidebar');
    const searchForm = document.querySelector('.mobile-search-form');
    const menuToggle = document.querySelector('.menu-toggle');
    const searchToggle = document.querySelector('.search-toggle');
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }
    if (!searchForm.contains(e.target) && !searchToggle.contains(e.target) && searchForm.classList.contains('active')) searchForm.classList.remove('active');
});

//# sourceMappingURL=wwww.aec77530.js.map
