// =======================================================
// 1. PREGUNTAS PSICOTÉCNICAS (30)
// =======================================================

const questions = [
    // Artes, creatividad
    { text: "Te gusta expresar ideas a través del arte, música o movimiento.", area: "Artes" },
    { text: "Disfrutas imaginar y crear conceptos visuales o proyectos creativos.", area: "Artes" },
    { text: "Prefieres actividades donde puedas innovar y crear algo único.", area: "Artes" },

    // Ingeniería / Tecnología / Lógica
    { text: "Te interesa entender cómo funcionan los sistemas, máquinas o programas.", area: "Ingeniería" },
    { text: "Eres bueno analizando problemas complejos para encontrar soluciones.", area: "Ingeniería" },
    { text: "Te gusta trabajar con tecnología, computadoras o elementos electrónicos.", area: "Ingeniería" },

    // Ciencias Sociales / Humanidades
    { text: "Te gusta observar el comportamiento humano y comprender por qué las personas actúan como lo hacen.", area: "Sociales" },
    { text: "Disfrutas ayudar a otros a resolver conflictos o comunicar mejor sus ideas.", area: "Sociales" },
    { text: "Te interesa cómo funcionan las sociedades, culturas y su historia.", area: "Sociales" },

    // Educación / Pedagogía
    { text: "Te gustaría enseñar, formar o guiar a otras personas.", area: "Educación" },
    { text: "Tienes paciencia y sabes explicar temas de forma sencilla.", area: "Educación" },
    { text: "Te motiva ver el progreso de otros gracias a tu ayuda.", area: "Educación" },

    // Administración / Negocios / Economía
    { text: "Te gusta organizar, planear y liderar actividades o proyectos.", area: "Administración" },
    { text: "Te interesan temas como economía, negocios o finanzas.", area: "Administración" },
    { text: "Tomas decisiones pensando en eficiencia y estrategia.", area: "Administración" },

    // Ciencias Naturales / Salud / Ambiente
    { text: "Te interesa el cuidado del medio ambiente, animales o la naturaleza.", area: "CienciasNaturales" },
    { text: "Te gusta aprender sobre procesos biológicos, químicos o ambientales.", area: "CienciasNaturales" },
    { text: "Te interesaría trabajar para mejorar la salud o bienestar de otros.", area: "CienciasNaturales" },

    // Comunicación / Lenguaje / Multimedia
    { text: "Te gusta comunicar ideas por medios escritos, visuales o digitales.", area: "Comunicacion" },
    { text: "Disfrutas crear contenido, editar videos o trabajar con medios digitales.", area: "Comunicacion" },
    { text: "Se te facilita transmitir mensajes claros a diferentes personas.", area: "Comunicacion" },

    // Extra psicotécnicas variadas
    { text: "Prefieres trabajos donde puedas tomar decisiones autónomas.", area: "Administración" },
    { text: "Te gustaría trabajar con niños, jóvenes o comunidades.", area: "Educación" },
    { text: "Te sientes cómodo analizando datos para comprender situaciones.", area: "Ingeniería" },
    { text: "Prefieres actividades que involucren creatividad visual o sonora.", area: "Artes" },
    { text: "Te motiva influir positivamente en tu comunidad.", area: "Sociales" },
    { text: "Tienes interés en los problemas globales y su impacto social.", area: "Sociales" },
    { text: "Te gustan los desafíos que requieren pensamiento estructurado.", area: "Ingeniería" },
    { text: "Te interesa aprender sobre cómo operan las organizaciones.", area: "Administración" },
    { text: "Te atraen contenidos digitales, redes sociales o diseño multimedia.", area: "Comunicacion" },
    { text: "Te interesan temas científicos y de investigación.", area: "CienciasNaturales" }
];

// =======================================================
// 2. ÁREAS Y CARRERAS UNAD
// =======================================================

const areasToCareers = {
    "Artes": [
        "Música",
        "Diseño Industrial",
        "Comunicación Social",
        "Ingeniería Multimedia"
    ],
    "Ingeniería": [
        "Ingeniería de Sistemas",
        "Ingeniería Electrónica",
        "Ingeniería Industrial",
        "Ingeniería de Telecomunicaciones",
        "Ingeniería en Energías",
        "Ingeniería Ambiental",
        "Ingeniería de Alimentos"
    ],
    "Sociales": [
        "Psicología",
        "Sociología",
        "Ciencia Política",
        "Gestión Deportiva",
        "Historia"
    ],
    "Educación": [
        "Licenciatura en Educación Infantil",
        "Licenciatura en Lenguas Extranjeras",
        "Licenciatura en Matemáticas",
        "Licenciatura en Filosofía",
        "Licenciatura en Etnoeducación"
    ],
    "Administración": [
        "Administración de Empresas",
        "Contaduría Pública",
        "Economía",
        "Finanzas y Comercio Internacional",
        "Marketing y Negocios Digitales",
        "Negocios Internacionales",
        "Administración en Salud",
        "Administración Pública"
    ],
    "CienciasNaturales": [
        "Agronomía",
        "Zootecnia",
        "Ingeniería Agroforestal",
        "Administración Ambiental",
        "Profesional en Seguridad y Salud en el Trabajo"
    ],
    "Comunicacion": [
        "Comunicación Social",
        "Filosofía",
        "Música",
        "Historia",
        "Ingeniería Multimedia"
    ]
};

// =======================================================
// 3. SISTEMA DEL TEST
// =======================================================

let currentIndex = 0;

let scores = {
    Artes: 0,
    Ingeniería: 0,
    Sociales: 0,
    Educación: 0,
    Administración: 0,
    CienciasNaturales: 0,
    Comunicacion: 0
};

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-btn");

// =======================
// Cargar preguntas
// =======================

if (questionBox) loadQuestion();

function loadQuestion() {
    let q = questions[currentIndex];

    questionBox.innerHTML = `
        <div class="question-card">
            <p>${q.text}</p>

            <div class="options">
                <label><input type="radio" name="answer" value="1"> Nunca</label>
                <label><input type="radio" name="answer" value="2"> Casi Nunca</label>
                <label><input type="radio" name="answer" value="3"> Aveces</label>
                <label><input type="radio" name="answer" value="4"> Casi Siempre</label>
                <label><input type="radio" name="answer" value="5"> Siempre</label>
            </div>
        </div>
    `;

    // Actualizar progreso
    document.getElementById("progress-text").textContent =
        `Pregunta ${currentIndex + 1} de ${questions.length}`;

    document.getElementById("progress-bar").style.width =
        ((currentIndex) / questions.length) * 100 + "%";
}

// =======================
// Botón Siguiente
// =======================

nextBtn?.addEventListener("click", () => {
    let selected = document.querySelector("input[name='answer']:checked");

    if (!selected) {
        alert("Por favor selecciona una respuesta antes de continuar.");
        return;
    }

    let area = questions[currentIndex].area;
    let score = parseInt(selected.value);

    scores[area] += score;
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        finishTest();
    }
});

// =======================
// Finalizar test
// =======================

function finishTest() {
    // 1. Determinar área con mayor puntaje
    let bestArea = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    // 2. Obtener TODAS las carreras del área ganadora
    let careers = areasToCareers[bestArea];

    // 3. Seleccionar 3 carreras recomendadas
    let recommended = careers.slice(0, 3);

    // 4. Determinar Escuela UNAD asociada al área
    const areaToSchool = {
        "Artes": "Escuela de Ciencias Sociales, Artes y Humanidades",
        "Ingeniería": "Escuela de Ciencias Básicas, Tecnología e Ingeniería",
        "Sociales": "Escuela de Ciencias Sociales, Artes y Humanidades",
        "Educación": "Escuela de Ciencias de la Educación",
        "Administración": "Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios",
        "CienciasNaturales": "Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente",
        "Comunicacion": "Escuela de Ciencias Sociales, Artes y Humanidades"
    };

    let school = areaToSchool[bestArea];

    // 5. Guardar todo en localStorage
    localStorage.setItem("results", JSON.stringify({
        scores,
        bestArea,
        recommended,
        school
    }));

    // 6. Redirigir
    window.location.href = "results.html";
}



// FIN DEL ARCHIVO
