// ==========================================
// 📝 كيفية إضافة مشروع جديد:
// 1. انسخ الكود بين الأقواس {} في الأسفل
// 2. ضع فاصلة , بعد المشروع السابق
// 3. غير البيانات حسب مشروعك
// 4. ضع صورة المشروع في مجلد images/projects/
// ==========================================

const projects = [
    {
        id: 1,
        title: "مطعم بالغردقه",
        description: "انشاء موقع مع نظام حجز متكامل للمطعم متعدد اللغات",
        image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1777448479/about-image_ckq4ui.jpg", // ضع اسم صورتك هنا
        category: "restaurant",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
        liveLink: "https://mahmoudsemeida-bot.github.io/caribbean-bar/",
        githubLink: "https://mahmoudsemeida-bot.github.io/caribbean-bar/"
    },
    {
        id: 2,
        title:"AI Voice Translator",
        description: " حول صوت اي فيديوالى اي لغه في العالم",
        image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1777574035/%D8%AA%D9%86%D8%B2%D9%8A%D9%84_1_toghaj.jpg",
        category: "frontend",
        technologies: ["React", "Chart.js", "Tailwind CSS"],
        liveLink: "https://mahmoudsemeida-bot.github.io/video-translate/",
        githubLink: "https://mahmoudsemeida-bot.github.io/video-translate/"
    },
    {
        id: 3,
        title: "مطعم ومشويات ابن البلد",
        description: "مطعم ابن البلد",
        image: "https://res.cloudinary.com/dinbygyca/image/upload/q_auto/f_auto/v1777574257/%D8%B5%D9%86%D9%8A%D8%A9_%D9%84%D8%AD%D9%85_%D9%85%D9%86%D8%AF%D9%8A_202604141302_zlylhk_wfdxxi.jpg",
        category: "fullstack",
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
        liveLink: "https://mahmoudsemeida-bot.github.io/ebn-elbald/",
        githubLink: "https://mahmoudsemeida-bot.github.io/ebn-elbald/"
    }
    // 👇 أضف مشاريع جديدة هنا بنفس الطريقة 👇
];

// ==========================================
// ⚠️ لا تعدل الكود أدناه إلا إذا كنت تعرف ما تفعل
// ==========================================

// دالة لعرض المشاريع في الصفحة
function displayProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card animate';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/6366f1?text=Project+Image'">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank" class="project-link" title="عرض الموقع">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.githubLink}" target="_blank" class="project-link" title="الكود المصدري">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// دالة لتحويل اسم الفئة إلى عربي
function getCategoryName(category) {
    const categories = {
        'frontend': 'Frontend',
        'fullstack': 'Full Stack',
        'ecommerce': 'تجارة إلكترونية',
        'mobile': 'تطبيقات موبايل'
    };
    return categories[category] || category;
}

// تفعيل أزرار الفلترة
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الكلاس active من جميع الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            // إضافته للزر المضغوط
            btn.classList.add('active');
            // عرض المشاريع حسب الفلتر
            displayProjects(btn.dataset.filter);
        });
    });
});
