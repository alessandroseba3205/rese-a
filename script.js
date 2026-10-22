const starWarsReviews = [
    {
        title: "Episodio IV: Una Nueva Esperanza (1977)",
        category: "original",
        text: "La obra maestra original que cambió la historia del cine. George Lucas introduce un universo rico, con un viaje del héroe arquetípico perfecto, efectos prácticos revolucionarios y la inolvidable banda sonora de John Williams.",
        rating: "⭐⭐⭐⭐⭐ 5/5"
    },
    {
        title: "Episodio V: El Imperio Contraataca (1980)",
        category: "original",
        text: "Ampliamente considerada la mejor de toda la saga. Con un tono más oscuro y maduro, profundiza en la Fuerza, introduce a Yoda y culmina con uno de los giros de guion más impactantes del cine.",
        rating: "⭐⭐⭐⭐⭐ 5/5"
    },
    {
        title: "Episodio VI: El Retorno del Jedi (1983)",
        category: "original",
        text: "El cierre perfecto para la trilogía original. Aunque la batalla en Endor con los Ewoks polariza a algunos, la confrontación final en la Estrella de la Muerte entre Luke, Vader y el Emperador es magistral.",
        rating: "⭐⭐⭐⭐ 4.5/5"
    },
    {
        title: "Episodio I: La Amenaza Fantasma (1999)",
        category: "prequel",
        text: "Un regreso spectacular pero irregular. La política del Senado ralentiza el ritmo y Jar Jar Binks falla en el alivio cómico, pero la carrera de vainas y el combate 'Duel of the Fates' con Darth Maul son legendarios.",
        rating: "⭐⭐⭐ 3.5/5"
    },
    {
        title: "Episodio II: El Ataque de los Clones (2002)",
        category: "prequel",
        text: "Sufre de diálogos románticos pesados y exceso de CGI de principios de los 2000. Sin embargo, expande el lore galáctico exponencialmente con la introducción de los clones, el planeta Kamino y la batalla de Geonosis.",
        rating: "⭐⭐⭐ 3/5"
    },
    {
        title: "Episodio III: La Venganza de los Sith (2005)",
        category: "prequel",
        text: "La mejor de la trilogía de precuelas. El colapso emocional de Anakin Skywalker, la ejecución de la Orden 66 y el trágico duelo final en el planeta volcánico Mustafar entre Obi-Wan y Anakin son puro cine de Star Wars.",
        rating: "⭐⭐⭐⭐.5 4.5/5"
    },
    {
        title: "Rogue One: Una Historia de Star Wars (2016)",
        category: "spin-off",
        text: "Un spin-off bélico, crudo y brillante que encaja milimétricamente antes del Episodio IV. La fotografía es espectacular, el clímax en Scarif es tenso y la escena final de Darth Vader es de lo mejor de la franquicia.",
        rating: "⭐⭐⭐⭐⭐ 5/5"
    },
    {
        title: "Han Solo: Una Historia de Star Wars (2018)",
        category: "spin-off",
        text: "Una aventura divertida al estilo western espacial que expande el pasado del contrabandista. Alden Ehrenreich hace un trabajo decente emulando a Harrison Ford, aunque la película sufre de resolver misterios innecesarios.",
        rating: "⭐⭐⭐ 3.5/5"
    },
    {
        title: "The Mandalorian (Serie - Temp 1-3)",
        category: "spin-off",
        text: "El resurgir de Star Wars en la pantalla chica. Jon Favreau rescata la esencia clásica con un formato episódico de cazarrecompensas, manteniendo un equilibrio perfecto entre efectos prácticos, misterio y el carisma de Grogu.",
        rating: "⭐⭐⭐⭐.5 4.5/5"
    }
];

const indianaJonesReviews = [
    {
        title: "En Busca del Arca Perdida (1981)",
        text: "La aventura perfecta de la mano de Spielberg y Lucas. Harrison Ford define al héroe de acción definitivo: inteligente, rudo pero vulnerable. Un ritmo implacable lleno de trampas, arqueología y misticismo.",
        rating: "⭐⭐⭐⭐⭐ 5/5"
    },
    {
        title: "Indiana Jones y el Templo Maldito (1984)",
        text: "Una precuela mucho más oscura, terrorífica y frenética. Aunque introduce personajes un tanto ruidosos, las secuencias de acción en el puente colgante y la mina siguen vigentes hoy en día.",
        rating: "⭐⭐⭐⭐ 4/5"
    },
    {
        title: "Indiana Jones y la Última Cruzada (1989)",
        text: "La química insuperable entre Sean Connery y Harrison Ford eleva esta película a niveles magistrales. Llena de humor, mitología del Santo Grial y una emotiva exploración del vínculo padre e hijo.",
        rating: "⭐⭐⭐⭐⭐ 5/5"
    },
    {
        title: "Indiana Jones y el Reino de la Calavera de Cristal (2008)",
        text: "Un regreso controversial que cambia el misticismo religioso por la ciencia ficción de los 50. A pesar de momentos ridículos (el refrigerador nuclear), mantiene cierta magia clásica de Spielberg.",
        rating: "⭐⭐.5 2.5/5"
    },
    {
        title: "Indiana Jones y el Dial del Destino (2023)",
        text: "Una despedida nostálgica y melancólica para el arqueólogo más famoso del cine. Aunque abusa del rejuvenecimiento digital inicial, logra cerrar con respeto el arco emocional de un Indy envejecido.",
        rating: "⭐⭐⭐.5 3.5/5"
    }
];

// DOM ELEMENTS
const swGrid = document.getElementById('sw-grid');
const indyGrid = document.getElementById('indy-grid');
const navLinks = document.querySelectorAll('.nav-link');
const swSection = document.getElementById('starwars-section');
const indianaSection = document.getElementById('indiana-section');
const filterBtns = document.querySelectorAll('.filter-btn');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');

// RENDER STAR WARS
function renderStarWars(filter = "all") {
    swGrid.innerHTML = "";
    const filteredData = filter === "all" ? starWarsReviews : starWarsReviews.filter(item => item.category === filter);
    
    filteredData.forEach(rev => {
        const card = document.createElement('div');
        card.className = "card";
        
        let label = "Spin-Off";
        if(rev.category === 'original') label = "Trilogía Original";
        if(rev.category === 'prequel') label = "Precuela";

        card.innerHTML = `
            <div class="card-header">
                <span class="card-tag tag-${rev.category}">${label}</span>
                <h3>${rev.title}</h3>
            </div>
            <div class="card-body">
                <p>${rev.text}</p>
                <div class="rating-container">
                    <span>Crítica:</span> ${rev.rating}
                </div>
            </div>
        `;
        swGrid.appendChild(card);
    });
}

// RENDER INDIANA JONES
function renderIndianaJones() {
    indyGrid.innerHTML = "";
    indianaJonesReviews.forEach(rev => {
        const card = document.createElement('div');
        card.className = "card indy-card";
        card.innerHTML = `
            <div class="card-header">
                <span class="card-tag tag-indy">Aventura</span>
                <h3>${rev.title}</h3>
            </div>
            <div class="card-body">
                <p>${rev.text}</p>
                <div class="rating-container">
                    <span>Crítica:</span> ${rev.rating}
                </div>
            </div>
        `;
        indyGrid.appendChild(card);
    });
}

// INITIAL RUN
renderStarWars();
renderIndianaJones();

// MAIN NAVIGATION INTERACTION
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const target = link.getAttribute('data-target');
        
        if(target === 'starwars') {
            swSection.classList.add('active-section');
            indianaSection.classList.remove('active-section');
            heroTitle.innerText = "RESEÑAS GALÁCTICAS";
            heroTitle.style.color = "var(--sw-yellow)";
            heroSubtitle.innerText = "Tu destino definitivo para la crítica de Star Wars, series, spin-offs y las aventuras de Indy.";
        } else {
            indianaSection.classList.add('active-section');
            swSection.classList.remove('active-section');
            heroTitle.innerText = "ARCHIVOS JONES";
            heroTitle.style.color = "var(--indy-gold)";
            heroSubtitle.innerText = "Críticas y análisis exhaustivos de las legendarias expediciones arqueológicas del Dr. Indiana Jones.";
        }
    });
});

// FILTERING LOGIC FOR STAR WARS
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        renderStarWars(filterValue);
    });
});