// Default Base Data Structure
const defaultProfile = {
    name: "Billapati Yashwanth Reddy",
    role: "Computer Science Student | AI Enthusiast | Innovation Ambassador",
    description: "B.Tech Computer Science student (2028) at Vignan Institute of Technology and Science. Passionate about AI, hackathons, and building innovative tech solutions. Innovation Ambassador recognized by Ministry of Education & AICTE.",
    location: "Hyderabad, India",
    email: "yashwanthreddybillapati@gmail.com",
    phone: "+91 9441819445"
};

const defaultData = {
    strengths: [
        'Positive attitude and strong work ethic',
        'Easily adaptable to new technologies and programming languages',
        'Good communication skills',
        'Leadership skills'
    ],
    education: [
        {
            degree: 'Bachelor of Technology (B.Tech) in CSE',
            institution: 'Vignan Institute of Technology and Science, Hyderabad',
            year: 'Expected Graduation: 2028',
            score: 'CGPA: 8.8'
        },
        {
            degree: 'Intermediate (Class XII)',
            institution: 'Narayana Junior College',
            year: '2024',
            score: 'CGPA: 9.35'
        },
        {
            degree: 'Secondary School Certificate (Class X)',
            institution: 'Dilsukhnagar Public School',
            year: '2022',
            score: 'CGPA: 9.8'
        }
    ],
    projects: [
        {
            title: 'V-Connect',
            subtitle: 'Smart Campus Communication Platform',
            role: 'Ongoing Project',
            description: 'Developing a centralized platform to improve communication between students, faculty, and administration. Designed features for announcements, academic updates, and event notifications.',
            tags: ['Communication', 'Platform', 'Campus'],
            icon: 'fa-university',
            live: '',
            github: 'https://github.com/yashwanth2307/Vignan_connect'
        },
        {
            title: 'AgriConnect',
            subtitle: 'AI-Based Farmer Support System',
            role: 'Project Lead',
            description: 'Led development of a platform providing crop guidance and agricultural insights. Secured 2nd Prize at TKR Hack Conquest 2.0.',
            tags: ['AI', 'Agriculture', 'Marketplace'],
            icon: 'fa-leaf',
            live: '',
            github: 'https://github.com/yashwanth2307/AgriConnect'
        },
        {
            title: 'Portfolio Website',
            subtitle: 'Dynamic Web Experience',
            role: 'Developer',
            description: 'Developed a personal portfolio using HTML, CSS, and JavaScript with premium animations and responsive design.',
            tags: ['HTML/CSS', 'JavaScript', 'UI/UX'],
            icon: 'fa-briefcase',
            live: 'https://protofolio-five-phi.vercel.app',
            github: 'https://github.com/yashwanth2307/Yashwanth-Portfolio'
        },
        {
            title: 'Vacanza Holidays',
            subtitle: 'Open Source Experience (GSoC-aligned)',
            role: 'Contributor',
            description: 'Implemented feature integrating Indian public holidays into the system. Collaborated using GitHub workflows and version control.',
            tags: ['Open Source', 'GSoC', 'Git'],
            icon: 'fa-code-branch',
            live: '',
            github: 'https://github.com/yashwanth2307/holidays'
        }
    ],
    achievements: [
        '1st Prize – TechFusion 2026 Mini Hackathon',
        '2nd Prize – TKR Hack Conquest 2.0'
    ],
    certifications: [
        'GenAI for Everyone – Analytics Vidhya',
        'Introduction to Python – Infosys Springboard',
        'Introduction to C Programming – Infosys Springboard',
        'Introduction to Java – Infosys Springboard',
        '3★ Java Badge – HackerRank',
        '4★ Python Badge – HackerRank',
        'Innovation Ambassador – Ministry of Education (MoE) & AICTE'
    ]
};

// Data version — bump this number whenever you change defaults above
const DATA_VERSION = 2;

// Check local storage: if version mismatch, clear stale cache
const storedVersion = localStorage.getItem('portfolio_version');
if (storedVersion !== String(DATA_VERSION)) {
    localStorage.removeItem('portfolio_profile');
    localStorage.removeItem('portfolio_data');
    localStorage.setItem('portfolio_version', String(DATA_VERSION));
}

let UserProfile = JSON.parse(localStorage.getItem('portfolio_profile')) || JSON.parse(JSON.stringify(defaultProfile));
let Data = JSON.parse(localStorage.getItem('portfolio_data')) || JSON.parse(JSON.stringify(defaultData));

function renderHero() {
    const el = (id) => document.getElementById(id);
    if(el('hero-name')) el('hero-name').innerText = UserProfile.name;
    if(el('hero-role')) el('hero-role').innerText = UserProfile.role;
    if(el('hero-desc')) el('hero-desc').innerText = UserProfile.description;
    if(el('hero-location')) el('hero-location').innerText = UserProfile.location;
    if(el('hero-email')) el('hero-email').innerText = UserProfile.email;
    if(el('hero-phone')) el('hero-phone').innerText = UserProfile.phone;
    if(el('footer-name')) el('footer-name').innerText = UserProfile.name;
    if(el('footer-email')) el('footer-email').href = `mailto:${UserProfile.email}`;
}

// Render Functions
function renderStrengths() {
    const container = document.getElementById('strengths-container');
    if (!container) return;
    container.innerHTML = Data.strengths.map(strength => `<li>${strength}</li>`).join('');
}

function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;
    container.innerHTML = Data.education.map(edu => `
        <div class="edu-item glass-panel fade-in">
            <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
            <div class="edu-details">
                <h3>${edu.degree}</h3>
                <h4 class="institute">${edu.institution}</h4>
                <div class="edu-meta">
                    <span class="year"><i class="far fa-calendar-alt"></i> ${edu.year}</span>
                    <span class="score"><i class="fas fa-star text-primary"></i> ${edu.score}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = Data.projects.map(p => {
        const linksObj = [];
        if(p.live) linksObj.push(`<a href="${p.live}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>`);
        if(p.github) linksObj.push(`<a href="${p.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>`);
        const linksHtml = linksObj.length > 0 ? `<div class="project-links">${linksObj.join('')}</div>` : '';

        return `
            <div class="project-card glass-panel fade-in">
                <div class="project-icon">
                    <i class="fas ${p.icon || 'fa-code'}"></i>
                </div>
                <h3 class="project-title">${p.title}</h3>
                <h4 class="project-subtitle">${p.subtitle}</h4>
                <span class="project-role">${p.role}</span>
                <p class="project-desc">${p.description}</p>
                <div class="tags">
                    ${(p.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${linksHtml}
            </div>
        `;
    }).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;
    container.innerHTML = Data.achievements.map(ach => `<li>${ach}</li>`).join('');
}

function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container) return;
    container.innerHTML = Data.certifications.map(cert => `
        <li>
            <i class="fas fa-medal"></i>
            <span>${cert}</span>
        </li>
    `).join('');
}

// Interaction & Animation Setup
const setupObservers = () => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(element => observer.observe(element));
};

const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
};

const setupForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        const btn = form.querySelector('button');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            btn.disabled = false;
            form.reset();
            status.innerHTML = '<span style="color: #4ade80; display: block; margin-top: 1rem;"><i class="fas fa-check-circle"></i> Message sent successfully! I will get back to you soon.</span>';
            setTimeout(() => { status.innerHTML = ''; }, 5000);
        }, 1500);
    });
};

// Admin Panel Logic
const setupAdminPanel = () => {
    const urlParams = window.location.pathname;
    
    if (urlParams.includes('/edit') || window.location.search.includes('edit')) {
        const password = prompt('Enter Admin Password to enable editing mode:');
        if (password === 'admin') {
            const panel = document.getElementById('admin-panel');
            if(panel) {
                panel.style.display = 'flex';

                let editingEduIndex = null;
                let editingProjIndex = null;

                // Tab logic
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.querySelectorAll('.tab-btn').forEach(b => {
                            b.classList.remove('active');
                            b.style.background = 'rgba(255,255,255,0.05)';
                            b.style.border = '1px solid var(--card-border)';
                        });
                        e.target.classList.add('active');
                        e.target.style.background = 'var(--primary)';
                        e.target.style.border = 'none';

                        document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
                        document.getElementById(e.target.getAttribute('data-target')).style.display = 'block';
                    });
                });

                // Populate forms
                document.getElementById('edit-name').value = UserProfile.name;
                document.getElementById('edit-phone').value = UserProfile.phone;
                document.getElementById('edit-email').value = UserProfile.email;
                document.getElementById('edit-location').value = UserProfile.location;
                
                document.getElementById('edit-strengths').value = Data.strengths.join('\n');
                document.getElementById('edit-achievements').value = Data.achievements.join('\n');
                document.getElementById('edit-certifications').value = Data.certifications.join('\n');

                // Render Edu List in admin
                const renderAdminEdu = () => {
                    const list = document.getElementById('edu-list');
                    list.innerHTML = Data.education.map((e, index) => `
                        <div style="background: rgba(255,255,255,0.02); padding: 0.5rem 1rem; display: flex; justify-content: space-between; align-items: center; border-radius: 0.5rem; border: 1px solid var(--card-border);">
                            <div>
                                <strong style="color:var(--text-main)">${e.degree}</strong> - <span style="color:var(--text-muted)">${e.institution}</span>
                            </div>
                            <div>
                                <button type="button" onclick="window.editEdu(${index})" style="background: transparent; border: none; color: #38bdf8; cursor: pointer; padding: 0.2rem; margin-right: 0.5rem;"><i class="fas fa-edit"></i></button>
                                <button type="button" onclick="window.removeEdu(${index})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; padding: 0.2rem;"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('');
                };

                // Render Proj List in admin
                const renderAdminProj = () => {
                    const list = document.getElementById('proj-list');
                    list.innerHTML = Data.projects.map((p, index) => `
                        <div style="background: rgba(255,255,255,0.02); padding: 0.5rem 1rem; display: flex; justify-content: space-between; align-items: center; border-radius: 0.5rem; border: 1px solid var(--card-border);">
                            <div>
                                <strong style="color:var(--text-main)">${p.title}</strong> - <span style="color:var(--text-muted)">${p.role}</span>
                            </div>
                            <div>
                                <button type="button" onclick="window.editProj(${index})" style="background: transparent; border: none; color: #38bdf8; cursor: pointer; padding: 0.2rem; margin-right: 0.5rem;"><i class="fas fa-edit"></i></button>
                                <button type="button" onclick="window.removeProj(${index})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; padding: 0.2rem;"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('');
                };

                window.removeEdu = (index) => { Data.education.splice(index, 1); renderAdminEdu(); };
                window.removeProj = (index) => { Data.projects.splice(index, 1); renderAdminProj(); };

                window.editEdu = (index) => {
                    editingEduIndex = index;
                    const e = Data.education[index];
                    document.getElementById('add-edu-degree').value = e.degree || '';
                    document.getElementById('add-edu-inst').value = e.institution || '';
                    document.getElementById('add-edu-year').value = e.year || '';
                    document.getElementById('add-edu-score').value = e.score || '';
                    document.getElementById('btn-add-edu').innerText = "Update Education";
                };

                window.editProj = (index) => {
                    editingProjIndex = index;
                    const p = Data.projects[index];
                    document.getElementById('add-proj-title').value = p.title || '';
                    document.getElementById('add-proj-sub').value = p.subtitle || '';
                    document.getElementById('add-proj-role').value = p.role || '';
                    document.getElementById('add-proj-desc').value = p.description || '';
                    document.getElementById('add-proj-tags').value = (p.tags || []).join(', ');
                    document.getElementById('add-proj-live').value = p.live || '';
                    document.getElementById('add-proj-git').value = p.github || '';
                    document.getElementById('btn-add-proj').innerText = "Update Project";
                };

                renderAdminEdu();
                renderAdminProj();

                // Add Actions
                document.getElementById('btn-add-edu').addEventListener('click', () => {
                    const degree = document.getElementById('add-edu-degree');
                    const inst = document.getElementById('add-edu-inst');
                    const year = document.getElementById('add-edu-year');
                    const score = document.getElementById('add-edu-score');
                    if(!degree.value || !inst.value) { alert("Degree and Institution are required!"); return; }
                    
                    const eduObj = { degree: degree.value, institution: inst.value, year: year.value, score: score.value };
                    if (editingEduIndex !== null) {
                        Data.education[editingEduIndex] = eduObj;
                        editingEduIndex = null;
                        document.getElementById('btn-add-edu').innerText = "Add Education";
                    } else {
                        Data.education.push(eduObj);
                    }
                    
                    degree.value = ''; inst.value = ''; year.value = ''; score.value = '';
                    renderAdminEdu();
                });

                document.getElementById('btn-add-proj').addEventListener('click', () => {
                    const title = document.getElementById('add-proj-title');
                    if(!title.value) { alert("Project Title is required!"); return; }
                    
                    const projObj = {
                        title: title.value,
                        subtitle: document.getElementById('add-proj-sub').value,
                        role: document.getElementById('add-proj-role').value,
                        description: document.getElementById('add-proj-desc').value,
                        tags: document.getElementById('add-proj-tags').value.split(',').map(t => t.trim()).filter(t => t),
                        icon: 'fa-code',
                        live: document.getElementById('add-proj-live').value,
                        github: document.getElementById('add-proj-git').value
                    };
                    
                    if (editingProjIndex !== null) {
                        projObj.icon = Data.projects[editingProjIndex].icon || 'fa-code';
                        Data.projects[editingProjIndex] = projObj;
                        editingProjIndex = null;
                        document.getElementById('btn-add-proj').innerText = "Add Project";
                    } else {
                        Data.projects.push(projObj);
                    }

                    title.value = ''; document.getElementById('add-proj-sub').value = '';
                    document.getElementById('add-proj-role').value = ''; document.getElementById('add-proj-desc').value = '';
                    document.getElementById('add-proj-tags').value = ''; document.getElementById('add-proj-live').value = '';
                    document.getElementById('add-proj-git').value = '';
                    renderAdminProj();
                });

                // Save Form Logic
                document.getElementById('admin-save').addEventListener('click', (e) => {
                    e.preventDefault();
                    UserProfile.name = document.getElementById('edit-name').value;
                    UserProfile.phone = document.getElementById('edit-phone').value;
                    UserProfile.email = document.getElementById('edit-email').value;
                    UserProfile.location = document.getElementById('edit-location').value;

                    Data.strengths = document.getElementById('edit-strengths').value.split('\n').map(l=>l.trim()).filter(l=>l);
                    Data.achievements = document.getElementById('edit-achievements').value.split('\n').map(l=>l.trim()).filter(l=>l);
                    Data.certifications = document.getElementById('edit-certifications').value.split('\n').map(l=>l.trim()).filter(l=>l);

                    localStorage.setItem('portfolio_profile', JSON.stringify(UserProfile));
                    localStorage.setItem('portfolio_data', JSON.stringify(Data));
                    
                    alert("Portfolio data saved successfully!");
                    window.location.href = '/';
                });

                document.getElementById('admin-close').addEventListener('click', () => {
                    window.location.href = '/';
                });

                document.getElementById('admin-reset').addEventListener('click', () => {
                    if(confirm("Are you sure you want to reset to default static data? This cannot be undone.")) {
                        localStorage.removeItem('portfolio_profile');
                        localStorage.removeItem('portfolio_data');
                        window.location.href = '/';
                    }
                });
            }
        } else {
            alert('Incorrect password. Access denied.');
            window.location.href = '/';
        }
    }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderStrengths();
    renderEducation();
    renderProjects();
    renderAchievements();
    renderCertifications();

    setupObservers();
    setupSmoothScroll();
    setupForm();
    
    setupAdminPanel();
});