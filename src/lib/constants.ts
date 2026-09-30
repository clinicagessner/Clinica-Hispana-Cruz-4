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
    "longDescription": "La diabetes, la presión alta y el colesterol elevado casi nunca duelen, y por eso es fácil dejarlos para después. El daño avanza en silencio en el corazón, los riñones, los ojos y los nervios. En Clínica Hispana Cruz 4 le damos seguimiento continuo en español, con laboratorio en la misma clínica y el precio claro antes de cada consulta.\n\n**Qué controlamos**\n- Diabetes tipo 2 y prediabetes\n- Presión arterial alta\n- Colesterol y triglicéridos elevados\n- Problemas de tiroides que afectan el peso y la energía\n\n**La primera visita**\nRevisamos su historial, los medicamentos que toma y cómo come, trabaja y duerme. Medimos presión, peso y cintura, y pedimos los análisis necesarios: glucosa, hemoglobina A1C, perfil de colesterol y función del riñón. Las muestras se toman ahí mismo y el laboratorio entrega resultados rápidos. Con ellos armamos un plan que usted entienda y pueda cumplir.\n\n**Metas que vamos a seguir**\nPara muchas personas con diabetes, una A1C por debajo de 7 %. Para la presión, por lo general menos de 130/80. El médico ajusta estas metas según su edad y su salud general, y le explica qué significa cada número en sus resultados.\n\n**El seguimiento**\nMientras los números no estén en meta, las revisiones son cada uno a tres meses; cuando se estabilizan, se espacian. En cada visita ajustamos la dosis o el medicamento si hace falta, en lugar de esperar a que aparezca una complicación. Si toma metformina desde hace años, también revisamos la vitamina B12.\n\n**Lo que usted hace en casa**\nTomar los medicamentos todos los días, aunque se sienta bien. Llevar un registro de la presión o del azúcar si tiene aparato. Cambiar refrescos y jugos por agua, y caminar media hora al día. Pequeños cambios sostenidos valen más que una dieta estricta que dura dos semanas.\n\n**Cuándo no esperar a la cita**\nDolor de pecho, dificultad para hablar, debilidad de un lado del cuerpo o una glucosa muy alta con vómito o confusión son una emergencia: llame al 911.",
    "longDescriptionEn": "Diabetes, high blood pressure and high cholesterol rarely hurt, which makes them easy to put off. The damage builds quietly in the heart, kidneys, eyes and nerves. At Clínica Hispana Cruz 4 we provide ongoing follow-up in Spanish, with a lab inside the clinic and a clear price before every visit.\n\n**What we manage**\n- Type 2 diabetes and prediabetes\n- High blood pressure\n- High cholesterol and triglycerides\n- Thyroid problems that affect weight and energy\n\n**The first visit**\nWe review your history, the medications you take and how you eat, work and sleep. We measure blood pressure, weight and waist, and order the labs you need: glucose, hemoglobin A1C, a cholesterol panel and kidney function. Samples are drawn on the spot and the lab returns fast results. With them we build a plan you understand and can stick to.\n\n**Goals we'll track**\nFor many people with diabetes, an A1C below 7%. For blood pressure, usually under 130/80. The doctor adjusts these targets for your age and overall health and explains what each number on your results means.\n\n**Follow-up**\nUntil your numbers reach the goal, checkups are every one to three months; once they're stable, visits are spaced out. At each visit we adjust the dose or medication when needed, instead of waiting for a complication. If you've taken metformin for years, we also check your vitamin B12.\n\n**What you do at home**\nTake your medications every day, even when you feel fine. Keep a log of your blood pressure or sugar if you have a monitor. Swap soda and juice for water, and walk half an hour a day. Small changes you keep up beat a strict diet that lasts two weeks.\n\n**When not to wait for your visit**\nChest pain, trouble speaking, weakness on one side of the body or very high blood sugar with vomiting or confusion are emergencies: call 911.",
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
    "longDescription": "Fiebre, tos, dolor de cuerpo y garganta irritada: al principio la influenza, el COVID y un resfriado fuerte se parecen mucho. Saber cuál es cambia el tratamiento, sobre todo en los primeros días. En Clínica Hispana Cruz 4 hacemos pruebas rápidas durante la consulta y el diagnóstico sale el mismo día, sin cita.\n\n**Qué atendemos**\n- Influenza y COVID-19, con prueba rápida\n- Resfriados que no mejoran después de una semana\n- Bronquitis y tos persistente\n- Sinusitis con dolor de cara y congestión espesa\n- Crisis leves de asma o alergias que afectan la respiración\n\n**Por qué no esperar**\nEl medicamento antiviral para la influenza rinde más si se empieza durante los dos primeros días de síntomas. Los que más ganan con ese tratamiento temprano son los adultos mayores, las embarazadas, los niños pequeños y quien vive con una enfermedad crónica del pulmón, del corazón o del azúcar.\n\n**Cómo es la prueba**\nCon un hisopo se toma una muestra de la nariz; molesta unos segundos. El resultado está listo durante la visita y con él el médico decide el tratamiento. Si la prueba sale negativa pero los síntomas son claros, el médico puede tratarle igual o repetirla en uno o dos días.\n\n**Antibióticos, solo cuando sirven**\nLa mayoría de las infecciones respiratorias las causan virus, y el antibiótico no les hace efecto. Se indica cuando hay señales de una infección bacteriana, como una sinusitis que empeora tras mejorar o una neumonía.\n\n**En casa**\nDescanso, muchos líquidos y medicamento para la fiebre. Quédese en casa hasta pasar un día completo sin fiebre y sin medicamento para bajarla. Tápese al toser y lávese las manos seguido.\n\n**Cuándo es urgencia**\nDificultad para respirar, labios morados, dolor de pecho, confusión o fiebre que no baja en un bebé requieren atención inmediata en urgencias o llamar al 911.",
    "longDescriptionEn": "Fever, cough, body aches and a scratchy throat: at first, flu, COVID and a bad cold look a lot alike. Knowing which one you have changes the treatment, especially in the first days. At Clínica Hispana Cruz 4 we run rapid tests during the visit and you get a diagnosis the same day, no appointment needed.\n\n**What we treat**\n- Flu and COVID-19, with rapid testing\n- Colds that don't improve after a week\n- Bronchitis and lingering cough\n- Sinusitis with facial pain and thick congestion\n- Mild asthma flares or allergies that affect breathing\n\n**Why not wait**\nAntiviral flu medicine does the most good if it's started in the first two days after symptoms begin. Seniors, expectant mothers, small children and anyone with a chronic lung, heart or blood-sugar condition stand to gain the most, since complications hit them harder.\n\n**How the test works**\nA swab takes a sample from the nose; it's uncomfortable for a few seconds. The result is ready during the visit and guides the doctor's treatment. If the test is negative but symptoms are clear, the doctor may treat anyway or repeat it in a day or two.\n\n**Antibiotics only when they help**\nMost respiratory infections are caused by viruses, and antibiotics have no effect on them. They're prescribed when there are signs of a bacterial infection, such as sinusitis that worsens after improving, or pneumonia.\n\n**At home**\nRest, plenty of fluids and fever medicine. Stay home until a full day passes with no fever and no fever-reducing medicine. Cough into your elbow and keep soap and water close.\n\n**When it's urgent**\nTrouble breathing, bluish lips, chest pain, confusion or a fever that won't come down in a baby need immediate care at the ER or a 911 call.",
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
    "longDescription": "Comezón, ardor, un flujo distinto o el Papanicolaou que ya toca: son consultas que muchas mujeres posponen porque cuesta explicarlas o porque no saben a dónde ir. En Clínica Hispana Cruz 4 las atiende nuestro equipo médico en español, en un consultorio privado, sin cita y con el precio claro antes de empezar.\n\n**Qué atendemos**\n- Papanicolaou y revisión ginecológica de rutina\n- Cultivos vaginales cuando hay flujo, olor o molestias\n- Tratamiento de infecciones por hongos y bacterias\n- Pruebas de infecciones de transmisión sexual\n- Prueba de embarazo y orientación sobre el siguiente paso\n- Métodos anticonceptivos y retiro del implante del brazo\n\n**Cómo es la visita**\nPrimero conversamos: qué siente, desde cuándo, cómo son sus reglas y qué método usa. Después viene la revisión, siempre explicada antes de hacerla y con la puerta cerrada. Si hace falta un cultivo o un Papanicolaou, la muestra se toma en ese momento y le avisamos en cuanto llegan los resultados. Puede venir acompañada si así se siente más cómoda.\n\n**Cada cuánto el Papanicolaou**\nDesde los 21 años, cada tres años si los resultados son normales. A partir de los 30 se puede combinar con la prueba del virus del papiloma humano y espaciarlo más. Si hay síntomas, no espere a que toque.\n\n**Para prepararse**\nLo ideal es venir cuando no esté en su regla y evitar duchas vaginales, óvulos o relaciones sexuales dos días antes, porque alteran la muestra.\n\n**Atención completa, paso a paso**\nLa mayoría de los problemas ginecológicos se resuelven aquí. Cuando un resultado pide un estudio más especializado o un control de embarazo, la referencia al ginecólogo es parte del servicio: le orientamos y le entregamos sus resultados para que llegue con todo listo.",
    "longDescriptionEn": "Itching, burning, an unusual discharge or a Pap smear that's due: these are visits many women put off because they're hard to explain or they don't know where to go. At Clínica Hispana Cruz 4 our medical team handles them in Spanish, in a private exam room, without an appointment and with a clear price before we start.\n\n**What we treat**\n- Pap smears and routine gynecological checkups\n- Vaginal cultures when there's discharge, odor or discomfort\n- Treatment for yeast and bacterial infections\n- Testing for sexually transmitted infections\n- Pregnancy testing and guidance on next steps\n- Birth control options and removal of the arm implant\n\n**What the visit looks like**\nFirst we talk: what you're feeling, since when, what your periods are like and what method you use. Then comes the exam, always explained beforehand and with the door closed. If a culture or Pap smear is needed, the sample is taken right then and we let you know as soon as the results come in. You're welcome to bring someone along if that makes you more comfortable.\n\n**How often to get a Pap smear**\nFrom age 21, every three years if results are normal. From 30 on it can be paired with human papillomavirus testing and spaced out further. If you have symptoms, don't wait until it's due.\n\n**How to prepare**\nIdeally come when you're not on your period and avoid douching, vaginal suppositories or sex for two days beforehand, since they affect the sample.\n\n**Complete care, step by step**\nMost gynecological concerns are resolved here. When a result calls for more specialized testing or prenatal care, the referral to a gynecologist is part of the service: we guide you and hand over your results so you arrive fully prepared.",
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
    "longDescription": "Un retraso, náuseas por la mañana o una prueba casera con una segunda raya tenue: cuando hay dudas sobre un embarazo, lo mejor es confirmarlo cuanto antes. En Clínica Hispana Cruz 4 hacemos la prueba en la consulta, el equipo médico le explica el resultado en español y le orienta sobre lo que sigue, con privacidad y sin juicios.\n\n**Orina o sangre**\nLa prueba de orina detecta la hormona del embarazo, llamada hCG, y es muy confiable a partir del primer día de retraso. La prueba en sangre puede detectarla unos días antes y, si se hace en cantidad, ayuda a ver si el embarazo avanza como debe cuando hay sangrado o dolor. El médico le dice cuál conviene según su caso.\n\n**Para que el resultado sea más claro**\n- Si le es posible, recoja la orina al despertar: tiene más hormona y el resultado es más nítido\n- Si la prueba sale negativa pero la regla sigue sin llegar, repítala en una semana\n- Algunos medicamentos para la fertilidad pueden alterar el resultado; avísenos si los toma\n\n**Si el resultado es positivo**\nLe explicamos cuántas semanas podría tener y qué hacer en los primeros días: empezar ácido fólico, revisar los medicamentos que toma, dejar el alcohol y el tabaco. Un ultrasonido temprano permite confirmar que el embarazo está dentro del útero y ver el latido. Para el control prenatal completo le orientamos con la referencia a un ginecólogo u obstetra.\n\n**Señales que no deben esperar**\nDolor fuerte en un lado del vientre, sangrado abundante, mareo o desmayo con una prueba positiva pueden indicar un embarazo fuera del útero. Es una emergencia: vaya a urgencias o llame al 911.\n\n**Si el resultado es negativo**\nSi no busca embarazarse, es buen momento para hablar de métodos anticonceptivos. Si lo busca, podemos revisar juntos qué estudios y hábitos ayudan antes de intentarlo.",
    "longDescriptionEn": "A late period, morning nausea or a home test with a faint second line: when a pregnancy is in question, it's best to confirm it early. At Clínica Hispana Cruz 4 we test during the visit, the medical team explains the result in Spanish and guides you on what comes next, privately and without judgment.\n\n**Urine or blood**\nA urine test detects the pregnancy hormone, called hCG, and is very reliable from the first day of a missed period. A blood test can pick it up a few days earlier and, when measured as a quantity, helps show whether a pregnancy is progressing normally if there's bleeding or pain. The doctor tells you which one fits your situation.\n\n**For a clearer result**\n- If you can, use your first morning urine, which is more concentrated\n- If the test is negative but your period still hasn't come, repeat it in a week\n- Some fertility medications can affect the result; tell us if you take them\n\n**If the result is positive**\nWe explain roughly how many weeks along you may be and what to do in the first days: start folic acid, review your medications, stop alcohol and tobacco. An early ultrasound confirms the pregnancy is inside the uterus and shows the heartbeat. For full prenatal care we help you with a referral to a gynecologist or obstetrician.\n\n**Signs that shouldn't wait**\nSevere pain on one side of the belly, heavy bleeding, dizziness or fainting with a positive test can point to a pregnancy outside the uterus. That's an emergency: go to the ER or call 911.\n\n**If the result is negative**\nIf you're not trying to conceive, it's a good moment to talk about birth control. If you are, we can go over which tests and habits help before you start trying.",
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
    "longDescription": "Elegir un método anticonceptivo es una decisión personal que depende de su salud, sus planes y lo que le resulta práctico en el día a día. En Clínica Hispana Cruz 4 le explicamos las opciones en español, sin prisas y sin juicios, y le ayudamos a empezar el método que elija.\n\n**Métodos que manejamos en la clínica**\n- Pastillas anticonceptivas: una diaria, idealmente siempre a la misma hora del día. Además de prevenir el embarazo, suelen regular la regla y reducir los cólicos\n- Inyección anticonceptiva: una aplicación cada tres meses. Útil para quien olvida las pastillas; puede cambiar el patrón de sangrado\n- Retiro del implante del brazo cuando ya cumplió su tiempo o quiere cambiar de método\n\n**Cómo es la consulta**\nRevisamos su historial: presión arterial, migrañas, tabaquismo, embarazos anteriores y medicamentos que toma, porque algunas condiciones hacen que un método no sea seguro. Con eso, el médico le recomienda las opciones que le convienen y le explica cómo empezar, qué efectos esperar y qué hacer si olvida una dosis.\n\n**Cómo compararlos**\nPiense en tres preguntas: ¿recordaré tomar algo a diario?, ¿quiero embarazarme en el próximo año?, ¿me molesta que cambie mi sangrado? Las respuestas orientan la elección mejor que cualquier lista.\n\n**Protección contra infecciones**\nLas pastillas, la inyección y el implante previenen el embarazo, pero no las infecciones de transmisión sexual. El condón sigue siendo la única protección contra ellas.\n\n**Seguimiento**\nEn los primeros meses es normal tener manchado o cambios en la regla. Una revisión de control permite ajustar el método si no le sienta bien, en lugar de abandonarlo y quedar sin protección.\n\n**Otros métodos**\nSi le interesa el DIU o el implante, le explicamos cómo funcionan, qué ventajas tienen para su caso y cuáles son los siguientes pasos.",
    "longDescriptionEn": "Choosing a birth control method is a personal decision that depends on your health, your plans and what's practical day to day. At Clínica Hispana Cruz 4 we walk you through the options in Spanish, unhurried and without judgment, and help you start the method you choose.\n\n**Methods we handle at the clinic**\n- Birth control pills: one a day, ideally at a fixed hour. Besides preventing pregnancy, they often regulate periods and ease cramps\n- The birth control shot: one injection every three months. Useful if you tend to forget pills; it can change your bleeding pattern\n- Removal of the arm implant when it has run its course or you want to switch methods\n\n**What the visit looks like**\nWe review your history: blood pressure, migraines, smoking, past pregnancies and current medications, because some conditions make a method unsafe. From there, the doctor recommends the options that suit you and explains how to start, what side effects to expect and what to do if you miss a dose.\n\n**How to compare them**\nAsk yourself three questions: will I remember something daily? Do I want to get pregnant in the next year? Does a change in my bleeding bother me? The answers guide the choice better than any list.\n\n**Protection against infections**\nPills, the shot and the implant prevent pregnancy, but not sexually transmitted infections. Condoms remain the only protection against those.\n\n**Follow-up**\nSpotting or period changes are normal in the first months. A follow-up visit lets us adjust the method if it doesn't agree with you, instead of dropping it and being left unprotected.\n\n**Other methods**\nIf you're interested in an IUD or the implant, we explain how they work, what they offer in your case and the next steps.",
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
    "longDescription": "El implante anticonceptivo del brazo protege durante varios años, pero llega un momento en que hay que retirarlo: porque venció, porque quiere embarazarse, por molestias o simplemente porque prefiere otro método. En Clínica Hispana Cruz 4 lo retiramos en la consulta, con anestesia local y explicándole cada paso en español.\n\n**Antes del retiro**\nEl médico palpa el brazo para localizar el implante y le pregunta desde cuándo lo tiene y qué método piensa usar después. Si el implante no se siente al tacto, puede necesitarse un estudio de imagen antes de intentar quitarlo. Traiga, si la tiene, la tarjeta o el papel con la fecha en que se lo pusieron.\n\n**Cómo se hace**\n- Se limpia la piel y se aplica anestesia local, que se siente como un piquete breve\n- Se hace una incisión muy pequeña cerca de un extremo del implante\n- Se empuja suavemente y se retira la varilla completa\n- Se cierra con una tira adhesiva y un vendaje de presión\nCasi siempre toma pocos minutos. Usted puede irse enseguida y retomar su rutina sin esperar.\n\n**Cuidados después**\n- Deje el vendaje de presión uno o dos días y la tira adhesiva hasta que la herida cierre\n- Es normal un moretón o sensibilidad por algunos días\n- Consulte si nota enrojecimiento que crece, pus, fiebre o dolor que empeora\n\n**Protección tras el retiro**\nLa fertilidad vuelve rápido al quitar el implante. Si no quiere embarazarse, empiece otro método de inmediato; lo podemos dejar organizado en la misma visita, por ejemplo con pastillas o inyección.\n\n**Si quiere un implante nuevo**\nDígalo en la consulta de retiro. Le explicamos las opciones y los pasos para que no quede sin protección entre un método y otro.",
    "longDescriptionEn": "The arm contraceptive implant protects for several years, but eventually it has to come out: because it expired, you want to get pregnant, it's causing discomfort or you simply prefer another method. At Clínica Hispana Cruz 4 we remove it during the visit, under local anesthesia, explaining each step in Spanish.\n\n**Before removal**\nThe doctor feels the arm to locate the implant and asks how long you've had it and which method you plan to use next. If the implant can't be felt, an imaging study may be needed before attempting removal. If you have it, bring the card or paper with the date it was placed.\n\n**How it's done**\n- The skin is cleaned and local anesthetic is given, which feels like a brief pinch\n- A very small incision is made near one end of the implant\n- It's gently pushed out and the whole rod is removed\n- The cut is closed with an adhesive strip and a pressure bandage\nIt usually takes a few minutes. You can leave right away and get back to your routine without waiting.\n\n**Aftercare**\n- Keep the pressure bandage on for one or two days and the adhesive strip until the cut closes\n- A bruise or tenderness for a few days is normal\n- Get checked if redness spreads, there's pus, fever or pain that worsens\n\n**Protection after removal**\nFertility returns quickly once the implant is out. If you don't want to get pregnant, start another method right away; we can set it up at the same visit, for example with pills or the shot.\n\n**If you want a new implant**\nMention it at the removal visit. We explain the options and next steps so you're not left unprotected between methods.",
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
    "title": "Exámenes del Hombre: PSA y Chequeo de Próstata",
    "titleEn": "Men's Health Exams: PSA & Prostate Checkup",
    "shortTitle": "Salud del Hombre",
    "description": "Exámenes del hombre en Houston, TX: PSA, chequeo de próstata y laboratorio. Atención en español, sin cita y con precios accesibles.",
    "descriptionEn": "Men's health exams in Houston, TX: PSA, prostate checkup and lab work. Care in Spanish, walk-in and affordable.",
    "longDescription": "Es común que un hombre aguante molestias durante meses y solo consulte cuando ya le impiden trabajar. El problema es que las condiciones que más les afectan, como la presión alta, la diabetes o los cambios de la próstata, avanzan sin avisar. En Clínica Hispana Cruz 4 nuestro equipo de medicina general hace los exámenes del hombre en español, sin cita y con el precio claro antes de empezar.\n\n**Próstata y PSA**\nPara conocer su nivel de PSA basta un piquete en el brazo, igual que en cualquier análisis de rutina. Un valor alto no significa cáncer: también sube con el crecimiento normal de la próstata con la edad o con una infección. El panel federal de prevención (USPSTF) aconseja que, de los 55 a los 69 años, la decisión de hacerse el PSA se tome hablando con el médico sobre beneficios y riesgos; si hay antecedentes familiares, la conversación empieza antes.\n\n**Síntomas urinarios que conviene revisar**\n- Despertarse más de una vez cada noche por ganas de ir al baño\n- Chorro débil o que se corta\n- Sensación de no vaciar la vejiga\n- Ardor o sangre en la orina\n\n**Energía, ánimo y hormonas**\nEl cansancio constante, la falta de deseo sexual o el aumento de la barriga tienen varias causas posibles: sueño, azúcar, tiroides o un nivel bajo de testosterona. Cuando los síntomas lo justifican, el médico indica los análisis hormonales adecuados, que se toman temprano por la mañana.\n\n**Lo que no debe faltar en el chequeo**\nPresión arterial, glucosa, colesterol y peso. Son los números que más predicen un infarto o una complicación en los próximos años, y se revisan en la misma visita en nuestro laboratorio.\n\n**Atención completa**\nLa mayoría de los hallazgos se atienden aquí. Cuando un resultado pide estudios más especializados, la referencia al urólogo es parte del servicio: le orientamos y le entregamos sus resultados para que llegue con todo listo.",
    "longDescriptionEn": "Many men only see a doctor when something keeps them from working. The problem is that the conditions that affect them most, such as high blood pressure, diabetes or prostate changes, progress without warning. At Clínica Hispana Cruz 4 our general medicine team does men's health exams in Spanish, walk-in, with a clear price before we start.\n\n**Prostate and PSA**\nPSA, short for prostate-specific antigen, is measured in a routine blood draw. A high value doesn't mean cancer: it also rises with normal prostate growth as men age or with an infection. According to the U.S. Preventive Services Task Force, between ages 55 and 69 the decision to get a PSA test is made by talking with the doctor about benefits and risks; with a family history, that conversation starts earlier.\n\n**Urinary symptoms worth checking**\n- Waking up more than once a night needing the bathroom\n- A weak or stop-and-start stream\n- Feeling that the bladder doesn't empty\n- Burning or blood in the urine\n\n**Energy, mood and hormones**\nConstant fatigue, low sex drive or a growing belly have several possible causes: sleep, blood sugar, thyroid or low testosterone. When symptoms warrant it, the doctor orders the right hormone tests, which are drawn early in the morning.\n\n**What every checkup should include**\nBlood pressure, glucose, cholesterol and weight. These numbers best predict a heart attack or complications in coming years, and they're checked at the same visit in our lab.\n\n**Complete care**\nMost findings are handled here. When a result calls for more specialized testing, the referral to a urologist is part of the service: we guide you and hand over your results so you arrive fully prepared.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "chequeo del hombre houston"
    ],
    "keywordsEn": [
      "men's health exam houston",
      "psa test houston",
      "prostate exam houston",
      "men's checkup houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Chequeo de próstata y síntomas urinarios",
      "Análisis hormonales según síntomas",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate-specific antigen (PSA)",
      "Prostate and urinary symptom checkup",
      "Hormone tests based on symptoms",
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
    "longDescription": "Tener laboratorio dentro de la clínica cambia la visita: el médico le revisa, pide los análisis que hacen falta y la muestra se toma en ese mismo momento, sin mandarle a otro edificio ni pedirle que vuelva otro día solo para el piquete. Los resultados salen rápido y el equipo médico se los explica en español.\n\n**Análisis que más pedimos**\n- Biometría hemática: glóbulos rojos, blancos y plaquetas, para anemia o infecciones\n- Química sanguínea y panel metabólico: glucosa, riñón, hígado y sales del cuerpo\n- Hemoglobina glucosilada (A1C), que refleja cómo ha estado el azúcar durante unos tres meses\n- Perfil de lípidos: colesterol y triglicéridos\n- Función tiroidea (TSH)\n- Otros según el caso, como PSA en hombres o pruebas de embarazo en sangre\n\n**Cuándo tiene sentido hacerse análisis**\n- En el chequeo anual, según la edad y los antecedentes familiares\n- Para seguir la diabetes, la presión alta o el colesterol cada pocos meses\n- Cuando hay cansancio, pérdida de peso, sed excesiva u otros síntomas sin explicar\n- Para exámenes de trabajo, escuela o inmigración que piden estudios específicos\n\n**Cómo prepararse**\nPara glucosa en ayunas y triglicéridos, de 8 a 12 horas sin comer, solo agua. La A1C, la biometría y la TSH no necesitan ayuno. Tome sus medicamentos de siempre salvo que el médico indique otra cosa, y si usa insulina pregunte cómo ajustarla ese día.\n\n**La toma de muestra**\nEs un piquete en el brazo que dura menos de un minuto. Si le dan miedo las agujas o se ha mareado antes, avísenos y lo hacemos acostado. Tomar agua desde la mañana ayuda a encontrar la vena.\n\n**Precio claro**\nLe decimos cuánto cuesta cada análisis antes de tomar la muestra, sin necesidad de seguro. En promociones publicamos paquetes de estudios con consulta a precio fijo.",
    "longDescriptionEn": "Having a lab inside the clinic changes the visit: the doctor examines you, orders the tests you need and the sample is drawn right then, without sending you to another building or asking you to come back just for the needle. Results come back quickly and the medical team explains them in Spanish.\n\n**Tests we order most**\n- Complete blood count: red and white cells and platelets, for anemia or infection\n- Chemistry and metabolic panel: glucose, kidneys, liver and body salts\n- Hemoglobin A1C, the average blood sugar over the past three months\n- Lipid panel: cholesterol and triglycerides\n- Thyroid function (TSH)\n- Others as needed, such as PSA for men or blood pregnancy tests\n\n**When lab work makes sense**\n- At the yearly checkup, based on age and family history\n- To track diabetes, high blood pressure or cholesterol every few months\n- With fatigue, weight loss, excessive thirst or other unexplained symptoms\n- For work, school or immigration exams that require specific tests\n\n**How to prepare**\nFasting glucose and triglycerides need an overnight fast of 8 to 12 hours; plain water is fine. A1C, the blood count and TSH don't require fasting. Take your usual medications unless the doctor says otherwise, and if you use insulin ask how to adjust it that day.\n\n**The blood draw**\nIt's a quick stick in the arm that takes under a minute. If needles scare you or you've fainted before, tell us and we'll do it with you lying down. Drinking water from the morning on makes the vein easier to find.\n\n**A clear price**\nWe tell you what each test costs before drawing the sample, no insurance needed. Our promotions page lists fixed-price lab-and-visit packages.",
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
    "longDescription": "Ardor al orinar, ganas de ir al baño cada rato aunque salga poquito, orina turbia o con olor fuerte: una infección de orina se siente enseguida y no conviene esperar a que se quite sola. En Clínica Hispana Cruz 4 hacemos el examen de orina en la consulta y, si hay infección, empieza el tratamiento el mismo día.\n\n**Cómo es la visita**\nEl médico pregunta por los síntomas, desde cuándo los tiene y si ya tuvo infecciones antes. Usted deja una muestra de orina en un frasco estéril; se analiza en la clínica y con el resultado se decide el tratamiento. Si las infecciones se repiten o el caso lo requiere, se manda un cultivo para saber exactamente qué bacteria es y qué antibiótico la elimina.\n\n**Cómo dar una buena muestra**\n- Lávese las manos y limpie la zona de adelante hacia atrás\n- Deje caer el primer chorro en el inodoro y recoja la orina de la mitad\n- Cierre bien el frasco sin tocar el interior\n\n**Señales de que la infección subió al riñón**\nFiebre, escalofríos, dolor en la espalda o el costado, náusea o vómito. Si tiene esto, consulte ese día y no espere a ver si mejora: la infección de riñón necesita tratamiento más fuerte.\n\n**Situaciones que merecen más atención**\n- Embarazo: una infección urinaria, aunque no dé síntomas, debe tratarse\n- Hombres: son menos frecuentes y conviene buscar la causa\n- Diabetes: el azúcar alta favorece las infecciones\n- Tres o más infecciones al año: hay que investigar por qué se repiten\n\n**Para que no regrese**\nBeba agua a lo largo del día, vaya al baño en cuanto sienta la necesidad, vacíe la vejiga después de tener relaciones y termine el antibiótico aunque ya se sienta bien. Los remedios caseros como el jugo de arándano no sustituyen el tratamiento.",
    "longDescriptionEn": "Burning when you pee, needing to go constantly even if little comes out, cloudy or strong-smelling urine: a urinary infection makes itself felt right away and isn't worth waiting out. At Clínica Hispana Cruz 4 we test your urine during the visit and, if there's an infection, treatment starts the same day.\n\n**What the visit looks like**\nThe doctor asks about your symptoms, how long you've had them and whether you've had infections before. You leave a urine sample in a sterile cup; it's tested at the clinic and the result guides the treatment. If infections keep coming back or the case calls for it, a culture is sent to identify the exact bacteria and which antibiotic clears it.\n\n**How to give a good sample**\n- Wash your hands and clean front to back\n- Start peeing into the toilet, then catch the midstream urine in the cup\n- Close the cup tightly without touching the inside\n\n**Signs the infection reached the kidney**\nFever, chills, pain in the back or side, nausea or vomiting. If you have these, get seen that day rather than waiting to improve: a kidney infection needs stronger treatment.\n\n**Situations that deserve closer attention**\n- Pregnancy: a urinary infection must be treated even without symptoms\n- Men: infections are less common and the cause should be looked for\n- Diabetes: high blood sugar makes infections more likely\n- Three or more infections a year: it's worth finding out why they recur\n\n**Keeping it from coming back**\nDrink enough water, don't hold it in, urinate after sex and finish the antibiotic even if symptoms clear early. Home remedies like cranberry juice don't replace treatment.",
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
    "longDescription": "Un dolor de garganta fuerte puede venir de un virus, que se cura solo, o de la bacteria estreptococo, que necesita antibiótico. Por fuera se parecen mucho, y la única manera de saberlo con certeza es hacer la prueba. En Clínica Hispana Cruz 4 hacemos la prueba rápida durante la consulta y el resultado está en minutos.\n\n**Señales que hacen pensar en estreptococo**\n- Dolor de garganta que empieza de golpe, con dolor al tragar\n- Fiebre\n- Amígdalas rojas e hinchadas, a veces con puntos blancos\n- Ganglios del cuello inflamados y adoloridos\n- En niños, dolor de barriga, dolor de cabeza o vómito\nSi hay tos, nariz que escurre o ronquera, es más probable que sea un virus.\n\n**Cómo se hace**\nCon un hisopo largo se frota suavemente la parte de atrás de la garganta y las amígdalas. Da unas ganas breves de hacer arcadas, pero dura segundos. La muestra se analiza en la clínica mientras espera.\n\n**Si sale positiva**\nEl médico indica el antibiótico adecuado. La mayoría se siente mejor en uno o dos días, pero hay que terminar el tratamiento completo para evitar complicaciones como la fiebre reumática, que puede afectar el corazón. Después de 12 horas de antibiótico y sin fiebre, la persona ya no suele contagiar y puede volver a la escuela o al trabajo.\n\n**Si sale negativa**\nEn adultos, casi siempre se trata de un virus y el tratamiento es para aliviar: líquidos, descanso y medicamento para el dolor y la fiebre. En niños, cuando la sospecha es alta, el médico puede pedir un cultivo para confirmar.\n\n**En casa**\nCambie el cepillo de dientes al terminar el antibiótico, no comparta vasos ni cubiertos y lávese las manos con frecuencia, sobre todo si hay niños en la casa.",
    "longDescriptionEn": "A severe sore throat can come from a virus, which clears on its own, or from strep bacteria, which needs antibiotics. From the outside they look very similar, and the only way to know for sure is to test. At Clínica Hispana Cruz 4 we run the rapid test during the visit and the result is ready in minutes.\n\n**Signs that point to strep**\n- Throat pain that starts suddenly, with pain when swallowing\n- Fever\n- Red, swollen tonsils, sometimes with white spots\n- Swollen, tender neck glands\n- In children, stomachache, headache or vomiting\nIf there's a cough, runny nose or hoarseness, a virus is more likely.\n\n**How it's done**\nA long swab gently rubs the back of the throat and the tonsils. It causes a brief gag, but it lasts seconds. The sample is tested at the clinic while you wait.\n\n**If it's positive**\nThe doctor prescribes the right antibiotic. Most people feel better in a day or two, but the full course must be finished to avoid complications such as rheumatic fever, which can affect the heart. After 12 hours on antibiotics and no fever, a person usually stops being contagious and can return to school or work.\n\n**If it's negative**\nIn adults it's almost always a virus and treatment is for relief: fluids, rest and medicine for pain and fever. In children, when suspicion is high, the doctor may order a culture to confirm.\n\n**At home**\nReplace the toothbrush after finishing the antibiotic, don't share cups or utensils and wash hands often, especially with kids in the house.",
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
    "longDescription": "Hospitales, guarderías, escuelas, asilos y algunos trámites piden una prueba de tuberculosis reciente. En Clínica Hispana Cruz 4 aplicamos la prueba cutánea, llamada PPD o TST, y hacemos la lectura del resultado, con todo explicado en español.\n\n**Cómo funciona**\nEn la cara interna del antebrazo se aplica, con una aguja muy fina, una gota de líquido bajo la piel. Molesta apenas un instante y la ampolla que forma se reabsorbe sola. La prueba no se lee ese día: hay que regresar entre 48 y 72 horas después para que el personal mida si se formó una zona endurecida. Si no vuelve en ese plazo, la prueba se tiene que repetir.\n\n**Mientras espera la lectura**\n- No cubra la zona con curitas ni cremas\n- Puede bañarse y mojarla con normalidad\n- Evite rascarse, aunque le dé comezón\n- Anote el día y la hora exactos de su regreso\n\n**Qué significa el resultado**\nNegativo: no hubo reacción y se entrega la constancia para su trámite. Positivo: indica que el cuerpo ha tenido contacto con la bacteria en algún momento, no que la persona esté enferma ni que contagie. El siguiente paso suele ser una radiografía de tórax para descartar enfermedad activa, y según el caso se valora un tratamiento para la infección latente.\n\n**Si recibió la vacuna BCG**\nMuchas personas nacidas en Latinoamérica la recibieron de niños. Haberla recibido a veces provoca una reacción en la piel aunque no haya contacto con la bacteria. Avísele al médico; en ese caso una prueba en sangre puede ser más útil para aclarar el resultado.\n\n**Qué traer**\nIdentificación, el formulario de su trabajo o escuela si se lo pidieron y, si ya se hizo la prueba antes, el resultado anterior. Si alguna vez le salió positiva, díganoslo antes de aplicarla: no se debe repetir.",
    "longDescriptionEn": "Hospitals, daycares, schools, nursing homes and some paperwork require a recent tuberculosis test. At Clínica Hispana Cruz 4 we place the skin test, known as PPD or TST, and read the result, with everything explained in Spanish.\n\n**How it works**\nA small amount of fluid is injected just under the skin of the forearm; it feels like a quick pinch and leaves a small bubble that fades within minutes. The test isn't read that day: you come back 48 to 72 hours later so staff can measure whether a firm, raised area formed. If you don't return within that window, the test has to be repeated.\n\n**While you wait for the reading**\n- Don't cover the spot with bandages or creams\n- You can shower and get it wet as usual\n- Avoid scratching, even if it itches\n- Write down the exact day and time of your return\n\n**What the result means**\nNegative: there was no reaction and you get the paperwork for your requirement. Positive: the body has been in contact with the bacteria at some point, not that the person is sick or contagious. The next step is usually a chest X-ray to rule out active disease, and depending on the case, treatment for latent infection is considered.\n\n**If you had the BCG vaccine**\nMany people born in Latin America received it as children. That vaccine can make the skin test read positive. Let the doctor know; in that case a blood test may be more useful to clarify the result.\n\n**What to bring**\nID, your work or school form if you were given one and, if you've been tested before, the previous result. If you've ever tested positive, tell us before the test is placed: it shouldn't be repeated.",
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
    "longDescription": "Hacerse pruebas de infecciones de transmisión sexual es parte normal del cuidado de la salud, no una confesión. Muchas de estas infecciones no dan síntomas, y detectarlas a tiempo evita complicaciones y contagios. En Clínica Hispana Cruz 4 las pruebas son confidenciales, en español y sin juicios.\n\n**Cuándo hacerse las pruebas**\n- Empezó a salir con alguien nuevo o tiene varias parejas\n- Si su pareja tiene síntomas o un diagnóstico reciente\n- Si nota flujo, ardor, llagas, verrugas o bultos en la zona genital\n- Antes de dejar de usar condón con una pareja estable\n- Durante el embarazo, porque algunas infecciones pueden pasar al bebé\n- Los CDC recomiendan además una prueba de VIH al menos una vez en la vida a toda persona de 13 a 64 años\n\n**Qué se revisa**\nSegún sus síntomas y su riesgo, el médico indica las pruebas que corresponden, que pueden incluir clamidia, gonorrea, sífilis, VIH, hepatitis o herpes. Se hacen con muestra de orina, de sangre o con un hisopo, y usted solo paga las que realmente necesita.\n\n**Cómo es la consulta**\nLe haremos algunas preguntas directas sobre sus relaciones y sus síntomas. No son para juzgar: sirven para elegir las pruebas correctas. Todo lo que diga queda entre usted y el equipo médico.\n\n**Si un resultado sale positivo**\nClamidia, gonorrea y sífilis se curan con antibióticos. Otras, como el VIH o el herpes, no se curan pero se controlan muy bien con tratamiento. En todos los casos le explicamos qué sigue, y es importante que su pareja también se revise para no volver a contagiarse.\n\n**Mientras espera resultados**\nEvite las relaciones sexuales o use condón hasta saber el resultado y, si le dan tratamiento, hasta que lo termine y el médico lo indique.",
    "longDescriptionEn": "Getting tested for sexually transmitted infections is a normal part of health care, not a confession. Many of these infections cause no symptoms, and catching them early prevents complications and spreading them. At Clínica Hispana Cruz 4 testing is confidential, in Spanish and judgment-free.\n\n**When to get tested**\n- You've started seeing someone new, or you're seeing several people\n- If your partner has symptoms or a recent diagnosis\n- If you notice discharge, burning, sores, warts or bumps in the genital area\n- You and a steady partner plan to go without condoms\n- During pregnancy, since some infections can pass to the baby\n- The CDC also recommends an HIV test at least once in life for everyone 13 to 64\n\n**What gets checked**\nBased on your symptoms and risk, the doctor orders the right tests, which may include chlamydia, gonorrhea, syphilis, HIV, hepatitis or herpes. They're done with a urine sample, a blood sample or a swab, and you only pay for the ones you actually need.\n\n**What the visit is like**\nWe'll ask a few direct questions about your partners and symptoms. They're not to judge: they help choose the right tests. Everything you say stays between you and the medical team.\n\n**If a result is positive**\nChlamydia, gonorrhea and syphilis are cured with antibiotics. Others, such as HIV or herpes, aren't cured but are controlled very well with treatment. Either way we explain what comes next, and it's important for your partner to be checked too so you don't get reinfected.\n\n**While you wait for results**\nAvoid sex or use condoms until you know the result and, if you're treated, until you finish and the doctor gives the all-clear.",
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
    "longDescription": "Una oferta de trabajo, un requisito de la empresa o un trámite personal pueden depender de una prueba de alcohol y drogas. En Clínica Hispana Cruz 4 la hacemos sin cita, de forma discreta y explicando cada paso en español, para que sepa qué esperar antes de llegar.\n\n**Cómo funciona la prueba**\nLa muestra más común es de orina. Según lo que pida su empleador, se puede buscar un panel de varias sustancias, como marihuana, cocaína, anfetaminas, opioides o benzodiacepinas. La prueba de alcohol mide si hay consumo reciente. Si su empleador le dio un formulario, se llena junto con la toma de la muestra.\n\n**Qué traer**\n- Identificación oficial con foto\n- La orden o el formulario de su empleador, si le dieron uno, con el tipo de prueba que necesitan\n- La lista de medicamentos con receta que toma\n\n**Medicamentos y resultados**\nAlgunos medicamentos legales, como ciertos analgésicos, jarabes para la tos o pastillas para la ansiedad, pueden dar positivo en la detección inicial. Por eso es importante declararlos. Un positivo en la detección inicial normalmente se confirma en laboratorio con un estudio más preciso antes de darlo por definitivo.\n\n**Discreción**\nEl resultado es información médica privada. Se entrega a usted o a quien usted autorice, como el empleador que pidió la prueba.\n\n**Para conductores comerciales**\nAunque suelen pedirse juntos, el físico DOT y el antidoping son requisitos independientes. Si su empresa le pide ambas cosas, pregúntenos cómo organizarlas en la misma visita y qué formulario necesita traer para la prueba.",
    "longDescriptionEn": "A job offer, a company requirement or a personal matter can hinge on an alcohol and drug test. At Clínica Hispana Cruz 4 we do it without an appointment, discreetly, and explain each step in Spanish so you know what to expect before you arrive.\n\n**How the test works**\nThe most common sample is urine, and the collection itself takes only a few minutes. Depending on what your employer asks for, a panel of several substances can be screened, such as marijuana, cocaine, amphetamines, opioids or benzodiazepines. The alcohol test checks for recent use. If your employer gave you a form, it's completed along with the sample.\n\n**What to bring**\n- Official photo ID\n- Your employer's order or form, if you were given one, stating the test they need\n- Names of any prescribed drugs you're currently on\n\n**Medications and results**\nSome legal medications, such as certain pain relievers, cough syrups or anxiety pills, can trigger a positive on the initial screen. That's why declaring them matters. A positive on the initial screen is normally confirmed by a lab with a more precise test before it's considered final.\n\n**Privacy**\nThe result is private medical information. It goes to you or to whoever you authorize, such as the employer that requested the test.\n\n**For commercial drivers**\nThe DOT physical doesn't include a drug test; they're separate requirements. If your company asks for both, ask us how to schedule them in the same visit and which form you need to bring for the test, so you only make one trip.",
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
    "longDescription": "El electrocardiograma, o EKG, registra la actividad eléctrica del corazón. Muestra si late a buen ritmo, si hay latidos irregulares y si existen señales de esfuerzo o daño en el músculo cardiaco. Se hace en la clínica en pocos minutos y no duele.\n\n**Cómo se hace**\nSe acuesta en la camilla y se colocan unos parches adhesivos en el pecho, los brazos y las piernas. Los parches se conectan al equipo, usted se queda quieto y respira con normalidad durante un momento, y listo. No pasa electricidad al cuerpo: el aparato solo escucha.\n\n**Para qué se usa**\n- Aleteo en el pecho, latidos que se sienten fuera de compás o un pulso que se dispara estando quieto\n- Mareos o desmayos\n- Control de la presión alta y la diabetes, que con los años afectan al corazón\n- Chequeos de trabajo o deporte, y valoración antes de algunos procedimientos\n- Seguimiento cuando se empieza un medicamento que puede cambiar el ritmo del corazón\n\n**Cómo prepararse**\nNo hace falta ayuno. El día del estudio evite cremas o aceites en el pecho, porque impiden que los parches se peguen bien, y use ropa fácil de abrir por delante. Si tiene mucho vello en el pecho, a veces hay que recortar un poco en los puntos de los parches.\n\n**El resultado**\nEl equipo médico revisa el trazo y le explica en español qué muestra. Si encuentra algo que requiere más estudios, como un ecocardiograma o una prueba de esfuerzo, le orientamos con la referencia al cardiólogo.\n\n**Cuándo no esperar**\nUn dolor de pecho fuerte o que se extiende al brazo o la mandíbula, con falta de aire o sudor frío, es una emergencia: llame al 911 en lugar de venir a la clínica.",
    "longDescriptionEn": "An electrocardiogram, or EKG, records the heart's electrical activity. It shows whether the heart beats at a healthy pace, whether there are irregular beats and whether there are signs of strain or damage to the heart muscle. It's done at the clinic in a few minutes and doesn't hurt.\n\n**How it's done**\nYou lie on the exam table and adhesive patches are placed on your chest, arms and legs. The patches connect to the machine, you stay still and breathe normally for a moment, and that's it. No electricity goes into your body: the device only listens.\n\n**What it's used for**\n- Palpitations, a feeling that the heart skips beats or races for no reason\n- Dizziness or fainting\n- Monitoring high blood pressure and diabetes, which affect the heart over the years\n- Work or sports checkups, and evaluation before some procedures\n- Follow-up when starting a medication that can change heart rhythm\n\n**How to prepare**\nNo fasting needed. On the day of the test, skip lotions or oils on your chest, since they keep the patches from sticking, and wear clothes that open easily in front. If you have a lot of chest hair, a little may need trimming where the patches go.\n\n**The result**\nThe medical team reviews the tracing and explains in Spanish what it shows. If something calls for more testing, such as an echocardiogram or a stress test, we help you with a referral to a cardiologist.\n\n**When not to wait**\nSevere chest pain, or pain that spreads to the arm or jaw with shortness of breath or a cold sweat, is an emergency: call 911 instead of coming to the clinic.",
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
    "longDescription": "El ultrasonido usa ondas de sonido para formar una imagen del interior del cuerpo en tiempo real. No tiene radiación, no duele y se hace en la misma clínica, así que muchas veces el médico puede ver en ese momento lo que antes requería mandarle a otro lugar.\n\n**Estudios que hacemos**\n- Abdominal: hígado, vesícula, páncreas, riñones y bazo, por ejemplo cuando hay dolor después de comer grasa o sospecha de piedras\n- Pélvico: útero y ovarios, útil ante reglas muy abundantes, dolor pélvico o para revisar quistes\n- De embarazo: confirmar que el embarazo está dentro del útero, calcular las semanas y ver el latido\n- De tiroides y tejidos blandos: bultos en el cuello, ganglios o masas bajo la piel\n\n**Cómo prepararse**\nDepende de la zona:\n- Abdominal: seis a ocho horas sin comer, para que la vesícula esté llena y el intestino tenga menos gas\n- Pélvico: llegar con la vejiga llena, tomando unos cuatro vasos de agua una hora antes y sin orinar\n- Tiroides, tejidos blandos y embarazo avanzado: no requieren preparación especial\nSi no está seguro, llámenos antes y le decimos exactamente qué hacer.\n\n**Durante el estudio**\nAcostado, recibe un poco de gel en la piel, y sobre él se mueve el aparato que capta las imágenes. Puede sentir un poco de presión, sobre todo con la vejiga llena. La mayoría de los estudios duran entre 15 y 30 minutos.\n\n**El resultado**\nEl equipo médico revisa las imágenes y le explica en español lo que se encontró y qué sigue. Si el hallazgo necesita otro estudio, como una tomografía, o la valoración de un especialista, le orientamos con la referencia y le entregamos el reporte.\n\n**Seguro en el embarazo**\nAl no usar radiación, el ultrasonido se considera seguro para la madre y el bebé en cualquier etapa.",
    "longDescriptionEn": "Ultrasound uses sound waves to build a real-time image of the inside of the body. There's no radiation, it doesn't hurt and it's done right at the clinic, so the doctor can often see on the spot what used to mean sending you somewhere else.\n\n**Studies we perform**\n- Abdominal: liver, gallbladder, pancreas, kidneys and spleen, for example with pain after fatty meals or suspected stones\n- Pelvic: uterus and ovaries, useful with very heavy periods, pelvic pain or to check cysts\n- Pregnancy: confirming the pregnancy is inside the uterus, estimating the weeks and seeing the heartbeat\n- Thyroid and soft tissue: neck lumps, lymph nodes or masses under the skin\n\n**How to prepare**\nIt depends on the area:\n- Abdominal: nothing to eat for six to eight hours beforehand; a fasting gallbladder and a quieter bowel give a clearer picture\n- Pelvic: arrive with a full bladder, drinking about four glasses of water an hour before and not urinating\n- Thyroid, soft tissue and later pregnancy: no special preparation\nUnsure which applies to you? A quick phone call before your visit settles it.\n\n**During the scan**\nYou lie on the exam table, a warm gel goes on the skin and the transducer glides over the area. Firm pressure is common, particularly when the bladder is full. Most scans take 15 to 30 minutes.\n\n**The result**\nThe medical team reviews the images and explains in Spanish what was found and what comes next. If a finding needs another study, such as a CT scan, or a specialist's evaluation, we help you with the referral and give you the report.\n\n**Safe in pregnancy**\nBecause it uses no radiation, ultrasound is considered safe for mother and baby at any stage.",
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
    "longDescription": "En Clínica Hispana Cruz 4 aplicamos dos vacunas que casi todos los adultos necesitan en algún momento: la de la influenza cada temporada y la Tdap, que protege contra el tétanos, la difteria y la tos ferina. Sin cita y con la explicación en español.\n\n**Vacuna contra la influenza**\nLos CDC recomiendan vacunarse cada año a partir de los seis meses de edad, porque el virus cambia y la protección de la vacuna anterior baja con los meses. Lo ideal es ponérsela en septiembre u octubre, antes de que la gripe empiece a circular con fuerza en Houston, pero sigue siendo útil durante toda la temporada. Tienen prioridad los adultos mayores, las futuras mamás y quien vive con una enfermedad crónica del pulmón, del corazón o del azúcar.\n\n**Tdap y refuerzo del tétanos**\nTodo adulto debería tener al menos una dosis de Tdap en su vida y luego un refuerzo contra el tétanos cada diez años. Además:\n- Durante el tercer trimestre de cada embarazo conviene una Tdap: los anticuerpos pasan al bebé y lo cuidan de la tos ferina en sus primeras semanas\n- Texas exige la Tdap para entrar a séptimo grado\n- Después de una herida sucia o profunda, si su último refuerzo fue hace más de cinco años, puede necesitar uno\n\n**Antes de vacunarse**\nDíganos si tiene fiebre, si alguna vez tuvo una reacción fuerte a una vacuna o si está embarazada. Un resfriado leve no impide vacunarse.\n\n**Después**\nLo normal es un poco de dolor o enrojecimiento en el brazo y, a veces, cansancio o febrícula por un día. Le entregamos el comprobante de la vacuna; guárdelo con su cartilla, porque lo piden la escuela, el trabajo y el examen de inmigración.",
    "longDescriptionEn": "At Clínica Hispana Cruz 4 we give two vaccines nearly every adult needs at some point: the flu shot each season and Tdap, which protects against tetanus, diphtheria and whooping cough. No appointment, with everything explained in Spanish.\n\n**Flu vaccine**\nThe CDC recommends a yearly flu shot for everyone six months and older, because the virus changes and protection from last year's shot fades over the months. The best time is September or October, before flu starts spreading hard in Houston, but it still helps throughout the season. Priority groups include seniors, expectant mothers and anyone living with a chronic lung, heart or blood-sugar condition.\n\n**Tdap and tetanus boosters**\nEvery adult should have at least one Tdap dose in their lifetime, then a tetanus booster every ten years. Also:\n- A Tdap shot in the third trimester of each pregnancy passes antibodies to the baby, guarding against whooping cough in the first weeks\n- Texas requires Tdap for seventh-grade entry\n- After a dirty or deep wound, if your last booster was more than five years ago, you may need one\n\n**Before your shot**\nTell us if you have a fever, have ever had a strong reaction to a vaccine or are pregnant. A runny nose without fever is not a reason to postpone.\n\n**Afterward**\nSome soreness or redness in the arm is normal, and sometimes tiredness or a low fever for a day. We give you proof of vaccination; keep it with your shot record, since schools, employers and the immigration exam ask for it.",
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
    "longDescription": "Un corte con un cuchillo de cocina, una herramienta del trabajo o una caída en la calle: cuando los bordes de la herida quedan separados, cerrarla con puntos ayuda a que sane más rápido, con menos riesgo de infección y una cicatriz más discreta. En Clínica Hispana Cruz 4 atendemos estas heridas sin cita y con la explicación en español.\n\n**Cuándo una herida necesita puntos**\n- Los bordes se abren al mover la zona\n- Es más profunda de lo que parece, o se ve grasa o músculo\n- Mide más de un centímetro y medio o está en la cara, las manos o una articulación\n- Sigue sangrando después de diez minutos de presión firme\n\n**Mientras llega a la clínica**\nPresione la herida con una tela limpia sin levantarla a cada rato para mirar. Si puede, enjuáguela con agua de la llave. No ponga café, azúcar, pasta de dientes ni remedios caseros: ensucian la herida y dificultan cerrarla. Cuanto antes llegue, mejor, porque las heridas se cierran con más seguridad en las primeras horas.\n\n**Cómo lo hacemos**\nEl médico revisa la profundidad y que no haya tendones o nervios lastimados. Tras lavarla bien y adormecer la zona, los bordes se unen con puntos; en cortes chicos puede bastar un pegamento quirúrgico o unas tiras adhesivas. Al final le preguntamos por su vacuna del tétanos: si el último refuerzo tiene más de cinco años y la herida estaba sucia, se la ponemos aquí mismo.\n\n**Cuándo se quitan los puntos**\nDepende de la zona: en la cara, a los pocos días; en brazos, pecho y cuero cabelludo, alrededor de una semana; en piernas y pies, algo más. Le damos la fecha al terminar y el retiro se hace en la clínica.\n\n**En casa**\nDurante el primer día o dos no la moje; después puede lavarla con suavidad con agua y jabón. Consulte si aparece enrojecimiento que crece, calor, pus, mal olor o fiebre.\n\n**Cuándo ir a urgencias**\nSangrado que no para con presión, pérdida de movimiento o sensibilidad en un dedo, mordidas profundas o heridas por objetos muy contaminados.",
    "longDescriptionEn": "A cut from a kitchen knife, a work tool or a fall on the street: when the edges of a wound gape apart, closing it with stitches helps it heal faster, with less risk of infection and a less noticeable scar. At Clínica Hispana Cruz 4 we treat these wounds without an appointment, explaining everything in Spanish.\n\n**When a wound needs stitches**\n- The edges pull apart when you move the area\n- It's deeper than it looks, or you can see fat or muscle\n- It's longer than about half an inch, or it's on the face, hands or a joint\n- It keeps bleeding after ten minutes of firm pressure\n\n**On your way to the clinic**\nPress on the wound with a clean cloth without lifting it every few seconds to look. If you can, rinse it under tap water. Don't apply coffee, sugar, toothpaste or home remedies: they contaminate the wound and make it harder to close. The sooner you arrive the better, since wounds close more safely in the first hours.\n\n**How we do it**\nThe doctor checks the depth and makes sure no tendons or nerves are hurt. The wound is cleaned thoroughly, local anesthetic is given and it's closed with stitches, or with skin glue or adhesive strips if it's small. At the end we ask about your tetanus shot: if your last booster was over five years ago and the wound was dirty, we give it right here.\n\n**When stitches come out**\nIt depends on the area: on the face, after a few days; on the arms, chest and scalp, about a week; on the legs and feet, a bit longer. We give you the date before you leave, and removal is done at the clinic.\n\n**At home**\nFor the first day or two, don't get it wet; after that, a gentle wash with soap and water is fine. Come back if redness spreads, or there's warmth, pus, a bad smell or fever.\n\n**When to go to the ER**\nBleeding that won't stop with pressure, loss of movement or feeling in a finger, deep bites or wounds from heavily contaminated objects.",
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
    "longDescription": "Algunas heridas no se resuelven en una sola visita. Una quemadura leve, una herida después de una cirugía, un raspón grande o una llaga que tarda en cerrar necesitan limpiezas y cambios de vendaje hasta sanar. En Clínica Hispana Cruz 4 hacemos esas curaciones en español, sin cita, y vigilamos que la herida avance como debe.\n\n**Qué atendemos**\n- Heridas después de una cirugía o un procedimiento\n- Quemaduras leves de cocina o del trabajo\n- Raspones extensos y heridas que dejaron piel expuesta\n- Llagas o úlceras que tardan en cerrar, sobre todo en los pies o las piernas\n- Heridas que se infectaron después de otro tratamiento\n\n**Cómo es una curación**\nSe retira el vendaje anterior y se revisa la herida: tamaño, color, secreción y si hay señales de infección. Se limpia con suero y se cubre con el apósito adecuado para ese tipo de herida. Le indicamos cada cuánto volver y cómo cuidarla entre una visita y otra.\n\n**Pacientes con diabetes**\nLas heridas en los pies de una persona con diabetes pueden empeorar rápido y sin dolor, porque la sensibilidad está disminuida. Revise sus pies todos los días y, ante cualquier corte, ampolla o cambio de color, consulte pronto. En estos casos también revisamos cómo está su azúcar, porque un mal control frena la cicatrización.\n\n**Señales de que algo no va bien**\n- La piel de alrededor se pone roja y esa zona crece de un día a otro\n- Pus, mal olor o más secreción que antes\n- Dolor que aumenta en lugar de disminuir\n- Fiebre o escalofríos\n- Una herida que no muestra mejoría después de dos semanas\n\n**Cuidados en casa**\nLávese las manos antes de tocar el vendaje, no lo moje si se lo indicaron y no aplique cremas o remedios que no le hayamos recomendado. Comer bien y no fumar ayudan a que la piel se regenere.",
    "longDescriptionEn": "Some wounds aren't resolved in a single visit. A minor burn, a wound after surgery, a large scrape or a sore that's slow to close need cleanings and dressing changes until they heal. At Clínica Hispana Cruz 4 we provide that wound care in Spanish, without an appointment, and watch that the wound progresses as it should.\n\n**What we treat**\n- Wounds after surgery or a procedure\n- Minor kitchen or work burns\n- Large scrapes and wounds that left skin exposed\n- Sores or ulcers that are slow to close, especially on the feet or legs\n- Wounds that became infected after other treatment\n\n**What a wound care visit looks like**\nThe old dressing comes off and the wound is examined: size, color, drainage and any sign of infection. It's cleaned with saline and covered with the right dressing for that kind of wound. We tell you how often to return and how to care for it between visits.\n\n**Patients with diabetes**\nFoot wounds in someone with diabetes can worsen quickly and painlessly, because sensation is reduced. Check your feet every day and, at any cut, blister or color change, get seen promptly. In these cases we also check your blood sugar control, since poor control slows healing.\n\n**Signs something isn't right**\n- Redness spreading around the wound\n- Pus, a bad smell or more drainage than before\n- Pain that increases instead of easing\n- Fever or chills\n- A wound that shows no improvement after two weeks\n\n**Care at home**\nWash your hands before touching the dressing, keep it dry if you were told to, and don't apply creams or remedies we haven't recommended. Eating well and not smoking help the skin rebuild.",
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
    "longDescription": "Un lunar que roza con la ropa, un quiste que se inflama una y otra vez o una bolita de grasa bajo la piel que ha ido creciendo: muchas de estas molestias se resuelven con un procedimiento corto en el consultorio, con anestesia local y sin hospitalización. En Clínica Hispana Cruz 4 las realizamos explicándole cada paso en español.\n\n**Qué retiramos**\n- Lunares y verrugas que molestan, sangran o cambiaron de aspecto\n- Quistes sebáceos, esas bolitas bajo la piel que a veces se inflaman y supuran\n- Lipomas, acumulaciones de grasa blandas que se mueven al tocarlas\n- Otras lesiones pequeñas de la piel, según la valoración del médico\n\n**Antes del procedimiento**\nEl médico revisa la lesión y le explica qué se va a hacer, cuánto dura y qué cicatriz esperar. Díganos si toma anticoagulantes, aspirina o suplementos como el omega 3, si tiene alergia a algún anestésico o si tiene diabetes. Un quiste muy inflamado a veces se trata primero y se retira cuando baja la inflamación.\n\n**Cómo se hace**\nSe limpia la piel, se aplica anestesia local y, una vez dormida la zona, se retira la lesión con un corte pequeño. Se cierra con puntos cuando hace falta y se cubre con un vendaje. La mayoría de los procedimientos se completan en menos de una hora y puede irse a casa por su propio pie.\n\n**Si el médico lo considera necesario**\nCuando una lesión tiene un aspecto que conviene estudiar, el médico puede indicar que la pieza retirada se analice en un laboratorio de patología, y le explica el resultado cuando esté listo.\n\n**Recuperación**\nEs normal un poco de dolor y un moretón los primeros días; un analgésico común suele bastar. Evite el esfuerzo con esa zona hasta que le quitemos los puntos. Consulte si aparece fiebre, pus o enrojecimiento que se extiende.\n\n**Señales de alarma en un lunar**\nUn lunar asimétrico, de bordes irregulares, con varios colores, de más de seis milímetros o que cambia de tamaño merece revisión, aunque no moleste.",
    "longDescriptionEn": "A mole that rubs against clothing, a cyst that keeps flaring up or a fatty lump under the skin that's been growing: many of these problems are solved with a short in-office procedure, under local anesthesia and with no hospital stay. At Clínica Hispana Cruz 4 we perform them, explaining each step in Spanish.\n\n**What we remove**\n- Moles and warts that bother you, bleed or have changed in appearance\n- Sebaceous cysts, the lumps under the skin that sometimes swell and drain\n- Lipomas, soft fatty lumps that move when touched\n- Other small skin lesions, based on the doctor's assessment\n\n**Before the procedure**\nThe doctor examines the lesion and explains what will be done, how long it takes and what scar to expect. Tell us if you take blood thinners, aspirin or supplements such as fish oil, have an allergy to any anesthetic, or have diabetes. A badly inflamed cyst is sometimes treated first and removed once the swelling goes down.\n\n**How it's done**\nThe skin is cleaned, local anesthetic is given and, once the area is numb, the lesion is removed through a small incision. It's closed with stitches when needed and covered with a bandage. Most procedures take under an hour and you can walk out on your own.\n\n**When the doctor thinks it's needed**\nIf a lesion looks like it should be studied, the doctor may have the removed tissue examined by a pathology lab and will explain the result once it's ready.\n\n**Recovery**\nSome soreness and a bruise in the first days are normal; an ordinary pain reliever is usually enough. Avoid straining that area until the stitches come out. Get checked if you develop fever, pus or spreading redness.\n\n**Warning signs in a mole**\nA mole that's asymmetric, has irregular borders or several colors, is larger than a pencil eraser or changes in size deserves a look, even if it doesn't bother you.",
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
    "longDescription": "Un absceso es una bolsa de pus bajo la piel: un bulto rojo, caliente y cada vez más doloroso que muchas veces empieza como un grano o un pelo enterrado. Cuando ya tiene pus, las pastillas solas no bastan y la forma de curarlo es abrirlo y drenarlo. En Clínica Hispana Cruz 4 lo hacemos con anestesia local, sin cita y explicándole cada paso en español.\n\n**Cómo reconocerlo**\n- Bulto que crece en uno o dos días y duele al tocarlo\n- Piel roja, tensa y caliente alrededor\n- Una punta blanca o amarilla en el centro\n- A veces fiebre o malestar general\nAparecen con frecuencia en axilas, ingles, glúteos y cara interna de los muslos.\n\n**Lo que no conviene hacer**\nNo lo apriete ni lo pinche con agujas en casa. Puede empujar la infección más adentro, extenderla o dejar una cicatriz más grande. Las compresas tibias sí ayudan mientras llega a la consulta.\n\n**Cómo es el drenaje**\nTras desinfectar la piel y adormecerla, el médico abre un orificio pequeño por donde sale el pus. Se lava por dentro y, según el tamaño, se deja una gasa para que siga drenando unos días. Se cubre con un vendaje y le explicamos cómo cambiarlo.\n\n**Después del drenaje**\nEl alivio suele sentirse casi de inmediato, porque baja la presión. Según el caso, el médico indica antibiótico, sobre todo si hay fiebre, mucho enrojecimiento alrededor o diabetes. Muchos abscesos requieren una revisión en dos o tres días para retirar la gasa y confirmar que va sanando.\n\n**Cuándo buscar atención urgente**\nFiebre alta, una línea roja que sube desde el absceso, un absceso en la cara cerca de los ojos o la nariz, o enrojecimiento que se extiende rápido.\n\n**Si le salen seguido**\nLos abscesos que se repiten pueden estar relacionados con la diabetes o con una bacteria que vive en la piel. Vale la pena revisarlo con el médico para cortar el ciclo.",
    "longDescriptionEn": "An abscess is a pocket of pus under the skin: a red, warm, increasingly painful lump that often starts as a pimple or an ingrown hair. Once it has pus, pills alone won't do it, and the cure is to open and drain it. At Clínica Hispana Cruz 4 we do this under local anesthesia, without an appointment, explaining each step in Spanish.\n\n**How to recognize it**\n- A lump that grows over a day or two and hurts to touch\n- Red, tight, warm skin around it\n- A white or yellow head in the center\n- Sometimes fever or feeling unwell\nThey often show up in the armpits, groin, buttocks and inner thighs.\n\n**What not to do**\nDon't squeeze it or poke it with needles at home. That can push the infection deeper, spread it or leave a bigger scar. Warm compresses do help until you're seen.\n\n**How drainage works**\nThe area is cleaned, local anesthetic is given and a small opening is made to release the pus. It's rinsed inside and, depending on the size, gauze is left in so it keeps draining for a few days. It's covered with a bandage and we show you how to change it.\n\n**After drainage**\nRelief is usually felt almost immediately, because the pressure drops. Depending on the case, the doctor prescribes antibiotics, especially with fever, lots of surrounding redness or diabetes. Many abscesses need a recheck in two or three days to remove the gauze and confirm healing.\n\n**When to seek urgent care**\nHigh fever, a red streak running up from the abscess, an abscess on the face near the eyes or nose, or redness spreading fast.\n\n**If they keep coming back**\nRecurring abscesses can be linked to diabetes or a bacteria living on the skin. It's worth reviewing with the doctor to break the cycle.",
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
    "longDescription": "Salir de la consulta con el medicamento en la mano ahorra una segunda parada y evita que el tratamiento se quede para después. En Clínica Hispana Cruz 4 la farmacia está dentro de la clínica: le entregamos lo que el equipo médico le indicó en su consulta y tenemos productos de venta libre para los malestares más comunes.\n\n**Qué encuentra aquí**\n- Los medicamentos que se le indicaron en su consulta con nosotros, entregados antes de irse\n- Opciones genéricas, que suelen costar menos que las de marca\n- Productos de venta libre para fiebre, dolor, gripe, tos y alergias\n- Explicación en español de cómo y cuándo tomar cada medicamento\n\n**Lo que conviene preguntar al recibir su medicamento**\n- ¿Cada cuántas horas y por cuántos días?\n- ¿Con comida o en ayunas?\n- ¿Qué efectos son normales y cuáles son motivo de consulta?\n- ¿Choca con algo que ya tomo, incluidos suplementos o remedios naturales?\n\n**Antibióticos**\nTómelos completos aunque se sienta mejor antes de terminar. Cortarlos a la mitad deja bacterias vivas que pueden volver más fuertes. No guarde lo que sobre para otra ocasión ni lo comparta.\n\n**Si ya toma otros medicamentos**\nTraiga la lista o los frascos a la consulta. Así el médico revisa que lo nuevo no interfiera con lo que ya usa para la presión, el azúcar o el colesterol.\n\n**Recetas de otros consultorios**\nLa farmacia de la clínica entrega los medicamentos indicados en las consultas que se hacen aquí. Si trae una receta de otro médico, le orientamos sobre a qué farmacia llevarla o, si lo prefiere, puede pasar a consulta con nuestro equipo.",
    "longDescriptionEn": "Leaving the visit with your medication in hand saves a second stop and keeps treatment from being put off. At Clínica Hispana Cruz 4 the pharmacy is inside the clinic: we hand you what the medical team prescribed during your visit, and we stock over-the-counter products for the most common complaints.\n\n**What you'll find here**\n- The medications prescribed at your visit with us, handed to you before you leave\n- Generic options, which usually cost less than brand names\n- Over-the-counter products for fever, pain, flu, cough and allergies\n- A clear explanation in Spanish of how and when to take each medicine\n\n**What to ask when you get your medication**\n- How many hours apart, and for how many days?\n- With food or on an empty stomach?\n- Which effects are normal and which mean I should come back?\n- Does it clash with anything I already take, including supplements or herbal remedies?\n\n**Antibiotics**\nTake every dose prescribed, even once you start feeling better. Stopping halfway leaves live bacteria that can come back stronger. Don't save leftovers for next time or share them.\n\n**If you already take other medications**\nBring the list or the bottles to your visit. That way the doctor makes sure the new one won't interfere with what you use for blood pressure, sugar or cholesterol.\n\n**Prescriptions from other offices**\nThe clinic pharmacy provides medications prescribed during visits here. If you bring a prescription from another doctor, we'll point you to where it can be handled or, if you prefer, you can see our team for a visit.",
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

