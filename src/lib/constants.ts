import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Cruz 4",
  shortName: "Clínica Cruz 4",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa y sin necesidad de seguro médico. Medicina general, exámenes de inmigración, laboratorio y más.",
  baseUrl: "https://www.clinicahispanacruz4.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "10100 Beechnut St Ste 240",
  city: "Houston",
  state: "TX",
  zip: "77072",
  phone: "+12815880033",
  phoneFormatted: "+1 (281) 588-0033",
  // WhatsApp — número EXCLUSIVO para chat. Nunca usarlo en tel:, NAP ni schema.
  // El teléfono de llamadas sigue siendo `phone` / CallRail hace swap solo sobre ese.
  whatsapp: "12817412157", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(281) 741-2157",
  email: "clinicahispanacruz4@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  // NAP anclado al PLACE ID verificado (Places API New) → abre el negocio exacto,
  // aunque el nombre de la ficha GBP cambie. Coords reales del Place.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=10100+Beechnut+St+Ste+240,+Houston,+TX+77072&query_place_id=ChIJ4YfUj5LDQIYRLtyN-0uSnMU",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=10100+Beechnut+St+Ste+240,+Houston,+TX+77072&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ4YfUj5LDQIYRLtyN-0uSnMU",
  placeId: "ChIJ4YfUj5LDQIYRLtyN-0uSnMU",
  coordinates: {
    lat: 29.690304,
    lng: -95.560977,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/clinicahispanacruz4",
  instagram: "https://www.instagram.com/clinicahispcruz4/",
};

// Reviews reales vienen LIVE de getGooglePlaceData() (Places API New).
// Fallback estático con los valores reales de Places, comprobados el 2026-09-29.
// Solo cubre el conteo visible: el JSON-LD no publica rating ni reseñas sin la API.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 622,
  averageRating: 5,
  placeId: "ChIJ4YfUj5LDQIYRLtyN-0uSnMU",
};

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    "descriptionEn": "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    "longDescription": "Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Cruz 4 diseñamos un plan claro y te acompañamos paso a paso, en español.\n\n**¿Qué incluye?**\n- Evaluación inicial y exámenes de laboratorio\n- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos\n- Ajuste de medicamentos según tu evolución\n- Plan de alimentación y actividad física\n- Educación sobre tu condición en tu idioma\n\n**Por qué es importante el control**\nUna diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Cruz 4 we design a clear plan and support you every step of the way, in Spanish.\n\n**What's included?**\n- Initial evaluation and lab work\n- Monitoring of glucose, blood pressure, cholesterol and triglycerides\n- Medication adjustment based on your progress\n- Nutrition and physical-activity plan\n- Education about your condition in your language\n\n**Why control matters**\nPoorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos"
    ],
    "featuresEn": [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La tiroides es una glándula pequeña en la base del cuello que marca el ritmo del cuerpo: la energía, la temperatura, el peso y hasta el ánimo. Sus problemas son frecuentes, sobre todo en mujeres, y avanzan tan despacio que muchas personas los confunden con estrés o con la edad.\n\n**Cuando la tiroides trabaja lento (hipotiroidismo)**\n- Cansancio y sueño aunque duerma bien\n- Frío cuando los demás están cómodos\n- Aumento de unos kilos sin comer más\n- Piel seca, cabello que se cae, uñas frágiles\n- Estreñimiento, reglas más abundantes, ánimo decaído\n\n**Cuando trabaja de más (hipertiroidismo)**\n- Palpitaciones o corazón acelerado en reposo\n- Pérdida de peso con buen apetito\n- Nerviosismo, temblor en las manos, insomnio\n- Calor y sudor excesivos\n\n**Cómo la revisamos**\nEl primer paso es un análisis de sangre de TSH, la hormona que regula la tiroides. Según el resultado, el médico añade T4 libre u otras pruebas. Si al revisar el cuello se nota un bulto, puede indicar un ultrasonido. La muestra se toma en nuestro laboratorio durante la consulta.\n\n**Tratamiento y control**\nEl hipotiroidismo se trata con una pastilla diaria de hormona tiroidea. Funciona mejor tomada en ayunas, con agua, y separada del calcio, el hierro y los antiácidos. Después de cada cambio de dosis se repite la TSH a las seis u ocho semanas; cuando está estable, basta una revisión al año. El hipertiroidismo suele necesitar la valoración de un endocrinólogo, y en ese caso le orientamos con la referencia.\n\n**Embarazo y tiroides**\nSi está embarazada o planea estarlo y ya toma tratamiento para la tiroides, avísele al médico cuanto antes: la dosis casi siempre cambia durante el embarazo.",
    "longDescriptionEn": "The thyroid is a small gland at the base of the neck that sets the body's pace: energy, temperature, weight and even mood. Thyroid problems are common, especially in women, and they progress so slowly that many people mistake them for stress or aging.\n\n**When the thyroid runs slow (hypothyroidism)**\n- Tiredness and sleepiness despite a full night's sleep\n- Feeling cold when everyone else is comfortable\n- Gaining a few pounds without eating more\n- Dry skin, thinning hair, brittle nails\n- Constipation, heavier periods, low mood\n\n**When it runs fast (hyperthyroidism)**\n- Palpitations or a racing heart at rest\n- Weight loss despite a good appetite\n- Nervousness, shaky hands, insomnia\n- Feeling hot and sweating a lot\n\n**How we check it**\nThe first step is a TSH blood test, the hormone that regulates the thyroid. Depending on the result, the doctor adds free T4 or other tests. If a lump is felt in the neck, an ultrasound may be ordered. The sample is drawn in our lab during the visit.\n\n**Treatment and follow-up**\nHypothyroidism is treated with a daily thyroid hormone pill. It works best on an empty stomach with water, kept apart from calcium, iron and antacids. After any dose change, TSH is rechecked in six to eight weeks; once stable, a yearly check is enough. Hyperthyroidism usually needs an endocrinologist's evaluation, and in that case we help you with the referral.\n\n**Pregnancy and the thyroid**\nIf you're pregnant or planning to be and already take thyroid medication, tell the doctor early: the dose almost always changes during pregnancy.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "En Houston casi no hay mes sin alergias. El cedro llega en invierno, los robles y otros árboles en primavera, el pasto en verano y la ambrosía en otoño. A eso se suma el moho, que con la humedad de la ciudad está presente todo el año. Por eso tanta gente vive con la nariz tapada sin saber exactamente por qué.\n\n**Lo que atendemos**\n- Rinitis alérgica: estornudos, nariz que escurre, picazón de ojos y garganta\n- Congestión que dura semanas o empeora en ciertas épocas\n- Ronchas (urticaria) y comezón en la piel\n- Reacciones a picaduras de insectos que no ponen en riesgo la vida\n- Alergias que empeoran el asma\n\n**Cómo es la consulta**\nEl médico le pregunta cuándo empiezan los síntomas, dónde está cuando empeoran y qué ha probado. Con eso, y la revisión de nariz, garganta, oídos y pulmones, casi siempre se identifica el tipo de alergia. Cuando está indicado, se piden análisis de laboratorio. Si hace falta identificar el alérgeno exacto con pruebas especializadas, le orientamos con la referencia al alergólogo.\n\n**Tratamiento**\nSegún el caso: antihistamínicos que no dan sueño, aerosoles nasales para la inflamación, gotas para los ojos o tratamiento para la piel. Le explicamos cómo usarlos bien, porque un aerosol nasal mal aplicado pierde buena parte del efecto, y qué cambios en casa reducen los síntomas: lavar la ropa de cama con agua caliente, cerrar las ventanas los días de mucho polen y ducharse al volver de la calle.\n\n**Cuándo es una emergencia**\nHinchazón de labios o lengua, dificultad para respirar, voz ronca de repente o mareo después de una picadura, un alimento o un medicamento requieren llamar al 911. Eso no se atiende en consulta.",
    "longDescriptionEn": "In Houston there's hardly a month without allergies. Cedar arrives in winter, oaks and other trees in spring, grass in summer and ragweed in fall. Add mold, which the city's humidity keeps around all year. That's why so many people live with a stuffy nose for months without knowing exactly what sets it off or how to calm it.\n\n**What we treat**\n- Allergic rhinitis: sneezing, runny nose, itchy eyes and throat\n- Congestion that lasts weeks or flares in certain seasons\n- Hives and itchy skin\n- Insect sting reactions that aren't life-threatening\n- Allergies that make asthma worse\n\n**What the visit looks like**\nThe doctor asks when symptoms start, where you are when they get worse and what you've tried. That, plus an exam of the nose, throat, ears and lungs, usually pins down the type of allergy. When indicated, lab tests are ordered. If the exact allergen needs to be identified with specialized testing, we help you with a referral to an allergist.\n\n**Treatment**\nDepending on the case: non-drowsy antihistamines, nasal sprays for inflammation, eye drops or skin treatment. We show you how to use them properly, since a nasal spray aimed the wrong way loses much of its effect, and which changes at home cut symptoms: washing bedding in hot water, keeping windows shut on high-pollen days and showering after coming in.\n\n**When it's an emergency**\nSwollen lips or tongue, trouble breathing, a suddenly hoarse voice or dizziness after a sting, a food or a medication mean calling 911. That isn't handled in a clinic visit.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español"
    ],
    "featuresEn": [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Cruz 4 hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.\n\n**¿Qué incluye?**\n- Prueba rápida de influenza (flu)\n- Prueba de COVID-19\n- Evaluación de síntomas respiratorios\n- Tratamiento de gripe, tos, bronquitis e infecciones de garganta\n- Indicaciones de recuperación y cuidado\n\n**No dejes que avance**\nSi la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Cruz 4 we run rapid tests and provide same-day treatment, no appointment needed.\n\n**What's included?**\n- Rapid influenza (flu) test\n- COVID-19 test\n- Respiratory symptom evaluation\n- Treatment of flu, cough, bronchitis and throat infections\n- Recovery and care instructions\n\n**Don't let it progress**\nIf the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Examen Físico Escolar y Deportivo en Houston",
    "titleEn": "School & Sports Physicals in Houston",
    "shortTitle": "Examen Físico",
    "description": "Examen físico escolar y deportivo en Houston, TX. Sin cita, con el formulario de la escuela, la UIL o la liga firmado en la visita, en español.",
    "descriptionEn": "School and sports physicals in Houston, TX. Walk in — your school or team form completed the same day, in Spanish, at an affordable price.",
    "longDescription": "Cada agosto las escuelas y los equipos de Houston piden lo mismo: un examen físico reciente y un formulario firmado por un médico. En Clínica Hispana Cruz 4 lo resolvemos sin cita y explicando cada paso en español, tanto al alumno como a los padres.\n\n**Qué revisa el médico**\n- Peso, estatura y presión arterial\n- Vista, y oído cuando el formulario lo pide\n- Corazón y pulmones, con atención a soplos o ritmos irregulares\n- Columna, para detectar desviaciones como la escoliosis\n- Articulaciones, fuerza y flexibilidad antes de hacer deporte\n- Historial: desmayos o dolor de pecho al hacer ejercicio, asma, alergias y familiares con problemas del corazón a edad temprana\n\n**Formularios que llenamos**\nEl formulario de evaluación previa a la participación que piden las escuelas de Texas para los deportes de la UIL, los de inscripción escolar, guardería y campamentos de verano, y los de ligas de fútbol, béisbol o basquetbol. Traiga el formulario impreso con la parte de los padres ya contestada; así la visita es más corta.\n\n**Si la escuela pide algo más**\nLa prueba de tuberculosis que piden algunos programas es cutánea: se aplica en esta visita y se lee entre 48 y 72 horas después, así que hay que volver una vez. La vacuna Tdap, que Texas exige al entrar a séptimo grado, se la ponemos aquí mismo. Para otras vacunas del calendario escolar revisamos la cartilla y le decimos cuáles faltan y dónde conseguirlas.\n\n**Qué traer**\n- El formulario que le dio la escuela o el equipo\n- Lentes, si el niño los usa\n- La cartilla de vacunas\n- La lista de medicamentos y alergias\n\n**Consejo de temporada**\nJulio y agosto son los meses más llenos. Si su hijo ya sabe en qué deporte o escuela estará, venir en junio evita la fila y deja tiempo por si el médico pide una revisión adicional antes de firmar.",
    "longDescriptionEn": "Every August, Houston schools and sports teams ask for the same thing: a recent physical and a form signed by a doctor. At Clínica Hispana Cruz 4 we take care of it without an appointment, explaining each step in Spanish to both the student and the parents.\n\n**What the doctor checks**\n- Weight, height and blood pressure\n- Vision, and hearing when the form asks for it\n- Heart and lungs, listening for murmurs or irregular rhythms\n- The spine, to catch curvatures such as scoliosis\n- Joints, strength and flexibility before sports\n- History: fainting or chest pain during exercise, asthma, allergies and relatives with early heart problems\n\n**Forms we complete**\nThe pre-participation evaluation form Texas schools require for UIL sports, school enrollment, daycare and summer camp forms, and soccer, baseball or basketball league forms. Bring the printed form with the parent section already filled in; the visit goes faster.\n\n**If the school asks for more**\nThe TB test some programs require is a skin test: it's placed at this visit and read 48 to 72 hours later, so plan on one return trip. The Tdap vaccine, which Texas requires for seventh-grade entry, we give right here. For other school vaccines we review the shot record and tell you which are missing and where to get them.\n\n**What to bring**\n- The school or team form\n- Glasses, if your child wears them\n- The vaccination record\n- A list of medications and allergies\n\n**Seasonal tip**\nJuly and August are the busiest months. If your child already knows their sport or school, coming in June skips the line and leaves time in case the doctor wants an extra check before signing.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston",
      "examen fisico para la escuela houston",
      "examenes fisicos cerca de mi",
      "examen fisico deportivo houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston",
      "back to school physical houston",
      "sports physical near me houston"
    ],
    "features": [
      "Examen físico completo con signos vitales",
      "Formularios de escuela, UIL y ligas deportivas",
      "Prueba de tuberculosis y vacuna Tdap disponibles",
      "Explicación en español para padres y alumnos"
    ],
    "featuresEn": [
      "Full physical with vital signs",
      "School, UIL and sports-league forms",
      "TB skin test and Tdap vaccine available",
      "Explained in Spanish for parents and students"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "title": "Atención Ginecológica: Papanicolaou y Cultivos",
    "titleEn": "Gynecology Care: Pap Smear & Cultures",
    "shortTitle": "Ginecología",
    "description": "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    "descriptionEn": "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    "longDescription": "Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Cruz 4 ofrecemos atención ginecológica en español, con la privacidad y el respeto que mereces.\n\n**¿Qué incluye?**\n- Papanicolaou y chequeo ginecológico\n- Cultivos vaginales para identificar infecciones\n- Tratamiento de infecciones vaginales (hongos, bacterias)\n- Evaluación de molestias y flujo anormal\n- Referencias cuando se necesita un especialista\n\n**No te quedes con la duda**\nComezón, ardor, flujo diferente o mal olor son señales de que algo necesita atención. Un cultivo permite un diagnóstico correcto y un tratamiento que sí resuelve.\n\n**Ginecología en una clínica hispana cerca de ti**\nSi buscas ginecología en Houston, en nuestra clínica hispana te atendemos cerca de ti: en español, sin cita previa y con precios accesibles, en el suroeste de Houston.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Your health as a woman deserves a space of trust. At Clínica Hispana Cruz 4 we offer gynecology care in Spanish, with the privacy and respect you deserve.\n\n**What's included?**\n- Pap smear and gynecological checkup\n- Vaginal cultures to identify infections\n- Treatment of vaginal infections (yeast, bacteria)\n- Evaluation of discomfort and abnormal discharge\n- Referrals when a specialist is needed\n\n**Don't stay in doubt**\nItching, burning, unusual discharge or odor are signs that something needs attention. A culture allows an accurate diagnosis and treatment that truly resolves it.\n\n**Gynecology at a Hispanic clinic near you**\nIf you are looking for gynecology care in Houston, our Hispanic clinic is near you: care in Spanish, walk-ins welcome and affordable pricing, on the southwest side of Houston.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish"
    ],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Cruz 4 realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo (orina o sangre)\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Cruz 4 we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Pregnancy test (urine or blood)\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Cruz 4 te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana Cruz 4 we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Cruz 4 lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Cruz 4 we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Exámenes del Hombre: PSA y Testosterona",
    "titleEn": "Men's Health Exams: PSA & Testosterone",
    "shortTitle": "Salud del Hombre",
    "description": "Exámenes del hombre en Houston, TX: PSA y testosterona. Laboratorio y atención en español, con precios accesibles.",
    "descriptionEn": "Men's health exams in Houston, TX: PSA and testosterone. Lab work and care in Spanish, with affordable pricing.",
    "longDescription": "La salud del hombre muchas veces se posterga. En Clínica Hispana Cruz 4 facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.\n\n**¿Qué incluye?**\n- Examen de antígeno prostático (PSA)\n- Medición del nivel de testosterona\n- Chequeo general y de signos vitales\n- Evaluación de síntomas urinarios o de energía\n- Referencia a especialista si se requiere\n\n**Por qué es importante**\nEl PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Men's health is often postponed. At Clínica Hispana Cruz 4 we make it easy to get the exams that help catch important changes early, with results explained in Spanish.\n\n**What's included?**\n- Prostate antigen (PSA) test\n- Testosterone level measurement\n- General checkup and vital signs\n- Evaluation of urinary or energy symptoms\n- Referral to a specialist if needed\n\n**Why it matters**\nPSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "examen de testosterona houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "testosterone test houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Análisis y Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    "longDescription": "Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Cruz 4 tomamos tus muestras en el momento y te explicamos los resultados en español, sin tecnicismos.\n\n**¿Qué incluye?**\n- Biometría hemática completa (conteo de células)\n- Química sanguínea (glucosa, colesterol, triglicéridos)\n- Pruebas de tiroides, hígado y riñón\n- Paneles para chequeo general o seguimiento\n- Resultados rápidos en la mayoría de los casos\n\n**Para qué sirven**\nLos análisis ayudan a detectar problemas antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de trabajo o escuela.\n\n**Análisis de sangre en una clínica hispana cerca de ti**\n¿Necesitas un análisis de sangre en Houston? En nuestra clínica hispana te tomamos la muestra sin cita previa, con precios accesibles y resultados explicados en español.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "A good diagnosis starts with a good lab. At Clínica Hispana Cruz 4 we draw your samples on the spot and explain your results in Spanish, without the jargon.\n\n**What's included?**\n- Complete blood count (CBC)\n- Blood chemistry (glucose, cholesterol, triglycerides)\n- Thyroid, liver and kidney tests\n- Panels for general checkups or follow-up\n- Fast results in most cases\n\n**Why they matter**\nBlood tests help detect problems before symptoms appear, follow up on a chronic condition or complete a work or school exam.\n\n**Blood work at a Hispanic clinic near you**\nNeed blood work in Houston? At our Hispanic clinic we draw your sample with no appointment needed, at affordable prices, with results explained in Spanish.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston",
      "examenes de sangre cerca de mi",
      "analisis de sangre cerca de mi",
      "laboratorio clinico houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    "longDescription": "El examen de orina ayuda a detectar infecciones urinarias y otras condiciones. En Clínica Hispana Cruz 4 te hacemos la prueba y, si hay infección, empezamos el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Examen general de orina (urianálisis)\n- Evaluación de síntomas\n- Diagnóstico de infección urinaria\n- Tratamiento adecuado el mismo día\n- Indicaciones para evitar que regrese\n\n**Síntomas frecuentes**\nArdor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. No esperes: una infección sin tratar puede llegar a los riñones.\n\n**Tratamiento de infecciones urinarias en una clínica hispana cerca de ti**\nSomos una clínica hispana cerca de ti en Houston: te hacemos el examen de orina y, si hay infección, sales con tu tratamiento el mismo día, sin cita previa y en español.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "A urine test helps detect urinary infections and other conditions. At Clínica Hispana Cruz 4 we run the test and, if there's an infection, we start treatment the same day.\n\n**What's included?**\n- General urinalysis\n- Symptom evaluation\n- Diagnosis of urinary infection\n- Appropriate same-day treatment\n- Tips to prevent it from coming back\n\n**Common symptoms**\nBurning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. Don't wait: an untreated infection can reach the kidneys.\n\n**UTI treatment at a Hispanic clinic near you**\nWe are a Hispanic clinic near you in Houston: we run your urine test and, if there is an infection, you leave with treatment the same day, no appointment needed and in Spanish.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Cuando el estómago lleva días dando guerra, con evacuaciones sueltas, cólicos o inflamación, muchas veces la respuesta está en el intestino, y el análisis de heces es la forma más directa de encontrarla. Es un estudio sencillo, sin agujas, que se hace con una muestra que usted recoge.\n\n**Qué puede detectar**\n- Parásitos intestinales, como giardia o amibas, frecuentes después de viajar o por agua contaminada\n- Bacterias que causan infecciones del estómago\n- Sangre que no se ve a simple vista, una señal que siempre hay que investigar\n- Signos de inflamación del intestino o de mala digestión de las grasas\n\n**Cuándo lo pide el médico**\n- Diarrea de más de unos días, sobre todo con fiebre o moco\n- Dolor abdominal o gases persistentes sin causa clara\n- Pérdida de peso sin explicación o anemia\n- Niños con comezón en el ano por las noches o que no suben de peso\n- Detección de cáncer de colon a partir de los 45 años, con la prueba de sangre oculta que el médico indique\n\n**Cómo recoger la muestra**\nLe damos un frasco limpio y le explicamos cómo recoger la muestra. Lo importante: que la muestra no se mezcle con orina ni con agua del inodoro, que el frasco quede bien cerrado y que la traiga pronto a la clínica. Si el médico pide varias muestras, se recogen en días distintos. Algunos medicamentos, como los antidiarreicos o ciertos antibióticos, pueden alterar el resultado; avísenos si los está tomando.\n\n**Después del resultado**\nEl equipo médico le explica en español qué se encontró y qué tratamiento necesita. Muchos parásitos se eliminan con un tratamiento corto, y a veces conviene tratar a toda la familia al mismo tiempo para que no vuelvan.",
    "longDescriptionEn": "Diarrhea that won't quit, belly pain that comes and goes or gas that isn't normal for you: sometimes the cause lies in the gut, and the most direct way to find it is a stool test. It's a simple, needle-free study done with a sample you collect yourself.\n\n**What it can detect**\n- Gut parasites like giardia or amoebas, which often follow a trip or a drink of unsafe water\n- Bacteria that cause stomach infections\n- Blood you can't see with the naked eye, a sign that always needs follow-up\n- Signs of bowel inflammation or poor fat digestion\n\n**When the doctor orders it**\n- Diarrhea lasting more than a few days, especially with fever or mucus\n- Persistent belly pain or gas with no clear cause\n- Unexplained weight loss or anemia\n- Children with an itchy bottom at night or who aren't gaining weight\n- Colon cancer screening from age 45, using the hidden-blood test the doctor recommends\n\n**How to collect the sample**\nWe give you a clean container and explain how to collect the sample. What matters: keep the sample free of urine and toilet water, close the container tightly and bring it to the clinic soon. If the doctor asks for several samples, they're collected on different days. Some medicines, like anti-diarrheals or certain antibiotics, can change the result, so let us know if you're taking any.\n\n**After the result**\nThe medical team explains in Spanish what was found and which treatment you need. Many parasites clear with a short course of treatment, and sometimes it's best to treat the whole family at once so they don't come back.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Cruz 4 hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Cruz 4 we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Cruz 4 la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Cruz 4 we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Cruz 4 ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y factores de riesgo\n- Pruebas de las infecciones más comunes\n- Análisis de laboratorio\n- Tratamiento y orientación si el resultado es positivo\n- Total confidencialidad\n\n**Cuándo hacerte la prueba**\nSi tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Taking care of your sexual health is an act of responsibility. At Clínica Hispana Cruz 4 we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.\n\n**What's included?**\n- Symptom and risk-factor assessment\n- Testing for the most common infections\n- Laboratory analysis\n- Treatment and guidance if the result is positive\n- Complete confidentiality\n\n**When to get tested**\nIf you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español"
    ],
    "featuresEn": [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Cruz 4 la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana Cruz 4 we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Cruz 4 lo realizamos como parte de chequeos y exámenes médicos.\n\n**¿Qué incluye?**\n- Estudio del ritmo y la actividad del corazón\n- Interpretación por personal médico\n- Útil para exámenes de trabajo, deporte o cirugía\n- Resultados explicados en español\n\n**Cuándo se recomienda**\nSi tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Cruz 4 we perform it as part of checkups and medical exams.\n\n**What's included?**\n- Study of your heart's rhythm and activity\n- Interpretation by medical staff\n- Useful for work, sports or surgery exams\n- Results explained in Spanish\n\n**When it's recommended**\nIf you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español"
    ],
    "featuresEn": [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Cruz 4 contamos con equipo moderno y personal que te explica todo en español.\n\n**¿Qué incluye?**\n- Ultrasonido abdominal (hígado, vesícula, riñones)\n- Ultrasonido pélvico\n- Ultrasonido de embarazo (control y seguimiento)\n- Evaluación de tiroides y tejidos blandos\n\n**Sin radiación y sin dolor**\nA diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Cruz 4 we have modern equipment and staff who explain everything in Spanish.\n\n**What's included?**\n- Abdominal ultrasound (liver, gallbladder, kidneys)\n- Pelvic ultrasound\n- Pregnancy ultrasound (monitoring and follow-up)\n- Thyroid and soft-tissue evaluation\n\n**No radiation, no pain**\nUnlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español"
    ],
    "featuresEn": [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "title": "Examen Físico DOT - Licencia CDL",
    "titleEn": "DOT Physical Exam - CDL License",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    "descriptionEn": "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    "longDescription": "Quien maneja un vehículo comercial necesita una tarjeta médica vigente, el certificado que se obtiene con el examen físico DOT. En Clínica Hispana Cruz 4 lo hacemos sin cita, con cada paso explicado en español, y si todo está en orden sale con su certificado el mismo día.\n\n**Qué revisa el examinador**\n- Vista: 20/40 o mejor por ojo (se permiten lentes) y reconocer el rojo, el verde y el ámbar\n- Oído: escuchar una voz susurrada a cinco pies, con o sin aparato\n- Presión arterial y pulso\n- Análisis de orina en busca de proteína, sangre o azúcar\n- Corazón, pulmones, abdomen, columna y reflejos\n- El historial médico que usted llena en el formulario federal\n\n**Cuánto dura el certificado**\nHasta dos años cuando todo está en rango. Si hay una condición que vigilar, como presión alta o diabetes, el certificado puede ser por menos tiempo. No es un rechazo: significa volver antes para comprobar que sigue controlada.\n\n**Si tiene diabetes, presión alta o apnea del sueño**\nTome sus medicamentos como siempre el día del examen; suspenderlos sube la presión y acorta el certificado. Si usa insulina, traiga el formulario federal para conductores con diabetes tratada con insulina, llenado por el médico que lo atiende, con no más de 45 días. Si usa CPAP, traiga el reporte de uso. Si sus números salen altos, podemos darle seguimiento en nuestro programa de condiciones crónicas para que llegue mejor a la próxima revisión.\n\n**Qué traer**\n- Licencia de conducir\n- Lentes o aparato auditivo que use para manejar\n- Lista de medicamentos con dosis\n- Reportes de sus especialistas, si tiene alguna condición\n\n**Pensado para choferes**\nAbrimos los siete días hasta las 9 de la noche, para que el examen no le cueste un día de trabajo.",
    "longDescriptionEn": "Anyone driving a commercial vehicle needs a current medical card, the certificate you earn by passing the DOT physical. At Clínica Hispana Cruz 4 we do it without an appointment, with each step explained in Spanish or English, and if everything checks out you leave with your certificate the same day.\n\n**What the examiner checks**\n- Eyesight: 20/40 or better per eye (corrective lenses allowed) plus red, green and amber recognition\n- Hearing: a whispered voice at five feet, with or without a hearing aid\n- Blood pressure and pulse\n- A urine dipstick screening for kidney or sugar problems\n- Heart, lungs, abdomen, spine and reflexes\n- The medical history you fill out on the federal form\n\n**How long the card lasts**\nUp to two years when everything is in range. When the examiner wants to keep an eye on something like blood pressure or diabetes, the card can be issued for a shorter term. That isn't a denial: it means coming back sooner to show it's still under control.\n\n**Living with diabetes, hypertension or sleep apnea?**\nTake your medications as usual on exam day; skipping them raises blood pressure and shortens the card. If you use insulin, bring the federal form for insulin-treated drivers, completed by your treating clinician no more than 45 days earlier. If you use CPAP, bring the usage report. If your numbers run high, we can follow up in our chronic care program so you're in better shape at the next exam.\n\n**What to bring**\n- Driver's license\n- The glasses or hearing aid you drive with\n- A medication list with doses\n- Reports from your specialists, if you have a condition\n\n**Built for drivers**\nWe're open seven days until 9 at night, so the exam doesn't cost you a workday.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston"
    ],
    "features": [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español"
    ],
    "featuresEn": [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish"
    ],
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693",
    "titleEn": "Immigration Medical Exam I-693",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Revisión de vacunas, análisis y formulario en sobre sellado.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccine review, lab work and the form in a sealed envelope.",
    "longDescription": "Quien solicita la residencia permanente desde dentro del país necesita el formulario I-693, el informe del examen médico de inmigración. En Clínica Hispana Cruz 4 lo realiza un médico designado por USCIS, con el proceso explicado en español de principio a fin.\n\n**Cómo es el proceso aquí**\nEn la primera visita el médico revisa su historial, hace el examen físico, compara sus comprobantes de vacunas con los que exigen los CDC para su edad y toma las muestras para las pruebas de tuberculosis, sífilis y gonorrea que correspondan. Cuando todos los resultados están listos y las vacunas completas, usted firma el formulario frente al médico y se lo entregamos en un sobre sellado para enviarlo a USCIS.\n\n**Qué traer**\n- Pasaporte u otra identificación con foto\n- Todos los comprobantes de vacunas que tenga, de aquí y de su país\n- Lista de medicamentos y reportes de enfermedades crónicas\n- Lentes, si los usa\n- Si antes le salió positiva una prueba de tuberculosis, ese reporte o la radiografía\n\n**Sobre las vacunas**\nCada comprobante que traiga es una dosis que no hay que repetir. La vacuna contra la influenza en temporada y la Tdap se aplican en la clínica. Si le falta alguna otra, le decimos cuál y dónde ponérsela, y la anotamos cuando traiga el comprobante.\n\n**Antes de agendar**\nUSCIS limita el tiempo que puede pasar entre la firma del médico y la presentación de su solicitud, y esa regla ha cambiado en los últimos años. Confirme la vigente con su abogado o en la página oficial del I-693 antes de venir, para que el examen no quede fuera de plazo.\n\n**Un detalle importante**\nNo abra el sobre. USCIS solo lo acepta cerrado tal como se lo entregamos.",
    "longDescriptionEn": "Anyone applying for permanent residence from inside the country needs Form I-693, the immigration medical exam report. At Clínica Hispana Cruz 4 it's performed by a USCIS-designated physician, with the whole process explained in Spanish or English.\n\n**How the process works here**\nAt the first visit the doctor reviews your history, does the physical exam, compares your vaccine records with what the CDC requires for your age and draws samples for the tuberculosis, syphilis and gonorrhea tests that apply. Once every result is back and your vaccines are complete, you sign the form in front of the doctor and we hand it to you in a sealed envelope to send to USCIS.\n\n**What to bring**\n- Passport or another photo ID\n- Every vaccine record you have, from here and from your home country\n- A medication list and reports on any chronic conditions\n- Glasses, if you wear them\n- If you've had a positive TB test before, that report or the chest X-ray\n\n**About vaccines**\nEvery record you bring is a dose you won't have to repeat. The flu shot in season and Tdap are given at the clinic. If you're missing another one, we tell you which and where to get it, and we record it once you bring proof.\n\n**Before you book**\nUSCIS limits how much time can pass between the doctor's signature and filing your application, and that rule has changed in recent years. Confirm the current one with your attorney or on the official I-693 page before coming in, so the exam doesn't fall outside the window.\n\n**One important detail**\nDon't open the envelope. USCIS only accepts it sealed exactly as we hand it to you.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico designado por USCIS (Civil Surgeon)",
      "Formulario I-693 entregado en sobre sellado",
      "Revisión de vacunas según los CDC",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "USCIS-designated physician (Civil Surgeon)",
      "Form I-693 delivered in a sealed envelope",
      "Vaccine review per CDC requirements",
      "Process explained in Spanish"
    ],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Cruz 4 aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.\n\n**¿Qué incluye?**\n- Vacuna anual contra la influenza (flu)\n- Toxoide tetánico (refuerzo del tétanos)\n- Aplicación por personal médico\n- Orientación sobre cuándo aplicar refuerzos\n- Atención en español\n\n**Por qué vacunarte**\nLa vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Cruz 4 we administer the influenza vaccine and tetanus toxoid safely and quickly.\n\n**What's included?**\n- Annual influenza (flu) vaccine\n- Tetanus toxoid (tetanus booster)\n- Administered by medical staff\n- Guidance on when boosters are due\n- Care in Spanish\n\n**Why get vaccinated**\nThe flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana Cruz 4 los aplicamos con personal médico y en un ambiente cómodo y seguro.\n\n**¿Qué incluye?**\n- Evaluación breve para elegir el suero adecuado\n- Hidratación intravenosa\n- Vitaminas y minerales\n- Aplicación y monitoreo por personal médico\n- Atención en español\n\n**Cuándo pueden ayudar**\nDespués de un periodo de cansancio, deshidratación o malestar, un suero vitaminado puede ayudarte a recuperar energía. Te orientamos sobre si es adecuado para ti.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana Cruz 4 we administer them with medical staff in a comfortable, safe setting.\n\n**What's included?**\n- A brief evaluation to choose the right drip\n- Intravenous hydration\n- Vitamins and minerals\n- Administration and monitoring by medical staff\n- Care in Spanish\n\n**When they can help**\nAfter a period of fatigue, dehydration or feeling unwell, a vitamin drip can help you recover energy. We advise you on whether it's right for you.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Cruz 4 cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Cruz 4 we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Cruz 4 limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Cruz 4 we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Cruz 4 realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Cruz 4 we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Stethoscope",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Cruz 4 lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.\n\n**¿Qué incluye?**\n- Evaluación del absceso o infección de piel\n- Drenaje con anestesia local\n- Limpieza y desinfección de la zona\n- Tratamiento de la infección cuando se requiere\n- Indicaciones de cuidado y seguimiento\n\n**No lo dejes pasar**\nUn bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Cruz 4 we treat it safely to relieve the discomfort and prevent the infection from spreading.\n\n**What's included?**\n- Evaluation of the abscess or skin infection\n- Drainage with local anesthesia\n- Cleaning and disinfection of the area\n- Treatment of the infection when needed\n- Care and follow-up instructions\n\n**Don't let it go**\nA red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Cruz 4 la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Cruz 4 we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia dentro de la clínica en Houston, TX: te llevas los medicamentos que indicó tu consulta y productos de venta libre.",
    "descriptionEn": "In-clinic pharmacy in Houston, TX: take home the medications prescribed at your visit plus over-the-counter products.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana Cruz 4 puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.\n\n**¿Qué incluye?**\n- Entrega, antes de irte, de lo que se recetó en tu visita\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n\n**¿Por qué usar nuestra farmacia?**\nTe ahorras una segunda parada: te atiende el equipo médico y sales con el medicamento que te indicó. Te explicamos en español la dosis, los horarios y los cuidados.\n\n**¿Por qué elegir Clínica Hispana Cruz 4?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 10100 Beechnut St Ste 240, Houston, TX 77072, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire y comunidades cercanas.",
    "longDescriptionEn": "After your visit at Clínica Hispana Cruz 4 you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.\n\n**What's included?**\n- The medications our medical team prescribed at your visit, before you leave\n- Brand-name and generic medications\n- Over-the-counter (OTC) medications for colds, pain, allergies and more\n- Staff guidance on how to take your medications\n\n**Why use our pharmacy?**\nYou skip the second stop: our medical team sees you and you leave with the medication it prescribed. We explain the dosage, schedule and precautions in Spanish.\n\n**Why choose Clínica Hispana Cruz 4?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 10100 Beechnut St Ste 240, Houston, TX 77072, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Alief, Sharpstown, Mission Bend, Westchase, Gulfton, Bellaire and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "medicamentos en la clínica houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "medications at the clinic houston"
    ],
    "features": [
      "Medicamentos indicados en tu consulta",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Medications prescribed at your visit",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish"
    ],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: "consulta-general",
    title: "Consulta Médica General",
    badge: "Más Popular",
    description: "Evaluación médica completa con nuestros especialistas.",
    includes: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Diagnóstico profesional",
      "Receta médica si es necesario",
    ],
  },
  {
    id: "paquete-diabetes",
    title: "Paquete Control Diabetes",
    badge: "Ahorre $50",
    description: "Todo lo necesario para mantener su diabetes bajo control.",
    includes: [
      "Consulta médica",
      "Examen de glucosa en ayunas",
      "Hemoglobina A1C",
      "Plan de alimentación",
    ],
  },
  {
    id: "chequeo-completo",
    title: "Chequeo Completo",
    badge: "Recomendado",
    description: "Evaluación integral de su estado de salud.",
    includes: [
      "Examen físico completo",
      "Panel de laboratorio básico",
      "Revisión de presión y glucosa",
      "Recomendaciones personalizadas",
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.greenCard", href: "/#green-card" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contact" },
];

