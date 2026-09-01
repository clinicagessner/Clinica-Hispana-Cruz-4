// Promociones de la clínica (flyers / imágenes).
//
// Cómo añadir/editar:
// 1. Sube cada imagen a /public/images/promos/v2/ (formato .webp recomendado).
//    Las imágenes están horneadas a 4:5 (1080x1350) para que llenen la card
//    sin recortarse; si subes una nueva con otra proporción, hornéala a 4:5.
// 2. Añade o edita una entrada por promoción aquí abajo.
// 3. Borra las entradas que no uses — la sección se oculta sola si queda vacía.
//
// `alt` es obligatorio y describe el flyer (SEO + accesibilidad).
// `price` es el precio que muestra el flyer (string, p.ej. "$99"); usa null si
// el flyer no muestra un precio fijo. El precio vive en la imagen; aquí es solo
// un dato para la UI de texto.
// `includes` lista lo que incluye la promoción (extraído del flyer).
// Los campos `*En` son la variante en inglés; si faltan, se usa el español.

export type Promotion = {
  id: string;
  image: string;
  alt: string;
  altEn?: string;
  title: string;
  titleEn?: string;
  price?: string | null;
  description?: string;
  descriptionEn?: string;
  includes?: string[];
  includesEn?: string[];
};

export const PROMOS: Promotion[] = [
  {
    id: "examen-testosterona",
    image: "/images/promos/v2/promo-12.webp",
    alt: "Promoción de examen de testosterona por $79 con examen de orina y consulta médica gratis en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Testosterone test promotion for $79 with urine test and free medical consultation at Clínica Hispana Cruz 4, Houston TX",
    title: "Revisa tu testosterona",
    titleEn: "Testosterone check",
    price: "$79",
    description:
      "¿Cansado o con menos energía? Examen de testosterona y de orina con consulta médica gratis. Precio regular $220, ahora por solo $79.",
    descriptionEn:
      "Tired or low on energy? Testosterone and urine tests with a free medical consultation. Regular price $220, now only $79.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
  },
  {
    id: "chequeo-testosterona",
    image: "/images/promos/v2/promo-13.webp",
    alt: "Promoción de chequeo de testosterona por $99 con examen general de sangre y orina en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Testosterone checkup promotion for $99 with general blood and urine tests at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo de testosterona",
    titleEn: "Testosterone checkup",
    price: "$99",
    description:
      "¿Cansado, sin deseo y con más barriga? Puede ser tu testosterona. Testosterona, examen general de sangre y de orina con consulta gratis. Precio regular $299, por solo $99.",
    descriptionEn:
      "Tired, low desire and gaining belly fat? It could be your testosterone. Testosterone, general blood and urine tests with a free consultation. Regular price $299, just $99.",
    includes: [
      "Examen de testosterona",
      "Examen general de sangre",
      "Examen general de orina",
      "Consulta gratis",
    ],
    includesEn: [
      "Testosterone test",
      "General blood test",
      "General urine test",
      "Free consultation",
    ],
  },
  {
    id: "chequeo-prostata",
    image: "/images/promos/v2/promo-14.webp",
    alt: "Promoción de chequeo completo de próstata por $149 con PSA, ultrasonido prostático y examen de orina en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete prostate checkup promotion for $149 with PSA, prostate ultrasound and urine test at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo completo de próstata",
    titleEn: "Complete prostate checkup",
    price: "$149",
    description:
      "Chequea tu salud hoy y gana tranquilidad: PSA en sangre, ultrasonido prostático y examen de orina con consulta gratis. Precio regular $300, ahora por $149.",
    descriptionEn:
      "Check your health today and gain peace of mind: blood PSA, prostate ultrasound and urine test with a free consultation. Regular price $300, now $149.",
    includes: [
      "Examen de PSA (próstata) en sangre",
      "Ultrasonido prostático",
      "Examen de orina",
      "Consulta gratis",
    ],
    includesEn: [
      "Blood PSA (prostate) test",
      "Prostate ultrasound",
      "Urine test",
      "Free consultation",
    ],
  },
  {
    id: "chequeo-mujer-ultrasonido",
    image: "/images/promos/v2/promo-15.webp",
    alt: "Promoción de chequeo completo de la mujer por $179 con ultrasonido pélvico, Papanicolaou y examen de orina en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete women's checkup promotion for $179 with pelvic ultrasound, Pap smear and urine test at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo de la mujer con ultrasonido",
    titleEn: "Women's checkup with ultrasound",
    price: "$179",
    description:
      "¿Hace cuánto no revisas tu salud femenina? Ultrasonido pélvico, Papanicolaou y examen de orina con consulta médica gratis. Precio regular $300, por solo $179.",
    descriptionEn:
      "How long since you last checked your feminine health? Pelvic ultrasound, Pap smear and urine test with a free medical consultation. Regular price $300, just $179.",
    includes: [
      "Ultrasonido pélvico",
      "Examen de Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
  },
  {
    id: "salud-intima-femenina",
    image: "/images/promos/v2/promo-1.webp",
    alt: "Promoción de salud íntima femenina por $69 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Women's intimate health promotion for $69 at Clínica Hispana Cruz 4, Houston TX",
    title: "Salud íntima femenina",
    titleEn: "Women's intimate health",
    price: "$69",
    description:
      "¿Flujo, picazón o mal olor? Cultivo íntimo, consulta médica y examen de orina por solo $69.",
    descriptionEn:
      "Discharge, itching or odor? Intimate culture, medical consultation and urine test for just $69.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
      "Atención en español",
    ],
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Free urine test",
      "Service in Spanish",
    ],
  },
  {
    id: "chequeo-completo-salud",
    image: "/images/promos/v2/promo-2b.webp",
    alt: "Promoción de chequeo general completo por $99 (valor regular $250) en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete general check-up promotion for $99 (regular value $250) at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo general completo",
    titleEn: "Complete general check-up",
    price: "$99",
    description:
      "Examen general de sangre, A1C y examen de orina con consulta médica gratis. Valor regular $250, por solo $99.",
    descriptionEn:
      "General blood panel, A1C and urinalysis with a free medical consultation. Regular value $250, for just $99.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood panel",
      "A1C (glycated hemoglobin)",
      "General urinalysis",
      "Free medical consultation",
    ],
  },
  {
    id: "general-sangre-b12",
    image: "/images/promos/v2/promo-3.webp",
    alt: "Promoción de examen general de sangre más Vitamina B12 por $99 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "General blood panel plus Vitamin B12 promotion for $99 at Clínica Hispana Cruz 4, Houston TX",
    title: "General de sangre + Vitamina B12",
    titleEn: "Blood panel + Vitamin B12",
    price: "$99",
    description:
      "Examen general de sangre más inyección de Vitamina B12 por solo $99. Más energía y bienestar.",
    descriptionEn:
      "General blood panel plus a Vitamin B12 injection for just $99. More energy and wellness.",
    includes: [
      "Examen general de sangre completo",
      "Inyección de vitamina B12",
      "Apoyo a tu energía y bienestar",
      "Atención en español",
    ],
    includesEn: [
      "Complete general blood panel",
      "Vitamin B12 injection",
      "Support for your energy and wellness",
      "Service in Spanish",
    ],
  },
  {
    id: "chequeo-familiar",
    image: "/images/promos/v2/promo-4.webp",
    alt: "Promoción de chequeo médico para adultos y niños en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Medical check-up promotion for adults and children at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo para adultos y niños",
    titleEn: "Check-up for adults and kids",
    price: null,
    description:
      "Examen de orina y glucosa gratis, más chequeo médico general a bajo costo para toda la familia.",
    descriptionEn:
      "Free urine and glucose tests, plus a low-cost general medical check-up for the whole family.",
    includes: [
      "Examen de orina gratis",
      "Examen de glucosa gratis",
      "Chequeo médico general a bajo costo",
      "Para adultos y niños",
    ],
    includesEn: [
      "Free urine test",
      "Free glucose test",
      "Low-cost general medical check-up",
      "For adults and children",
    ],
  },
  {
    id: "perfil-hormonal-hombres",
    image: "/images/promos/v2/promo-5.webp",
    alt: "Promoción de perfil hormonal masculino por $200 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Men's hormone panel promotion for $200 at Clínica Hispana Cruz 4, Houston TX",
    title: "Perfil hormonal para hombres",
    titleEn: "Men's hormone panel",
    price: "$200",
    description:
      "Evalúa tu salud hormonal: testosterona, energía y vitalidad. Perfil hormonal masculino por $200.",
    descriptionEn:
      "Evaluate your hormonal health: testosterone, energy and vitality. Men's hormone panel for $200.",
    includes: [
      "Niveles de testosterona",
      "Fertilidad, energía y vitalidad",
      "Masa muscular y desequilibrios hormonales",
      "Exámenes confiables y resultados precisos",
    ],
    includesEn: [
      "Testosterone levels",
      "Fertility, energy and vitality",
      "Muscle mass and hormonal imbalances",
      "Reliable tests and accurate results",
    ],
  },
  {
    id: "perfil-hormonal-mujeres",
    image: "/images/promos/v2/promo-6.webp",
    alt: "Promoción de perfil hormonal femenino por $250 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Women's hormone panel promotion for $250 at Clínica Hispana Cruz 4, Houston TX",
    title: "Perfil hormonal para mujeres",
    titleEn: "Women's hormone panel",
    price: "$250",
    description:
      "Evalúa desequilibrios hormonales, menopausia y tiroides. Perfil hormonal femenino por $250.",
    descriptionEn:
      "Evaluate hormonal imbalances, menopause and thyroid. Women's hormone panel for $250.",
    includes: [
      "Desequilibrios hormonales",
      "Problemas menstruales y menopausia",
      "Fertilidad y tiroides",
      "Exámenes confiables y atención profesional",
    ],
    includesEn: [
      "Hormonal imbalances",
      "Menstrual issues and menopause",
      "Fertility and thyroid",
      "Reliable tests and professional care",
    ],
  },
  {
    id: "solo-vitaminas",
    image: "/images/promos/v2/promo-7.webp",
    alt: "Promoción solo vitaminas con consulta y examen de orina por $99 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Vitamins-only promotion with consultation and urine test for $99 at Clínica Hispana Cruz 4, Houston TX",
    title: "Promoción solo vitaminas",
    titleEn: "Vitamins-only promo",
    price: "$99",
    description:
      "Consulta médica general y examen de orina incluidos por solo $99. Para tu bienestar y energía.",
    descriptionEn:
      "General medical consultation and urine test included for just $99. For your wellness and energy.",
    includes: [
      "Consulta médica general (evaluación completa)",
      "Examen de orina (EGO)",
      "Vitaminas B12, C, D y B6",
      "Para tu bienestar y energía",
    ],
    includesEn: [
      "General medical consultation (full evaluation)",
      "Urine test (urinalysis)",
      "Vitamins B12, C, D and B6",
      "For your wellness and energy",
    ],
  },
  {
    id: "diagnostico-ets",
    image: "/images/promos/v2/promo-8.webp",
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $250 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete sexually transmitted disease screening promotion for $250 at Clínica Hispana Cruz 4, Houston TX",
    title: "Diagnóstico completo de ETS",
    titleEn: "Complete STD screening",
    price: "$250",
    description:
      "Despeja tus dudas y hazte la prueba. Diagnóstico completo de enfermedades de transmisión sexual por $250.",
    descriptionEn:
      "Clear your doubts and get tested. Complete sexually transmitted disease screening for $250.",
    includes: [
      "Diagnóstico completo de ETS",
      "Resultados confidenciales",
      "Atención profesional en español",
    ],
    includesEn: [
      "Complete STD screening",
      "Confidential results",
      "Professional care in Spanish",
    ],
  },
  {
    id: "chequeo-completo-mujer",
    image: "/images/promos/v2/promo-9.webp",
    alt: "Promoción de chequeo completo de la mujer con Papanicolaou por $79 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete women's check-up with Pap smear promotion for $79 at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo completo de la mujer",
    titleEn: "Complete women's check-up",
    price: "$79",
    description:
      "Examen de Papanicolaou, consulta ginecológica y orden de mamografía por solo $79.",
    descriptionEn:
      "Pap smear, gynecological consultation and mammogram order for just $79.",
    includes: [
      "Examen de Papanicolaou",
      "Consulta ginecológica",
      "Orden de mamografía",
    ],
    includesEn: [
      "Pap smear",
      "Gynecological consultation",
      "Mammogram order",
    ],
  },
  {
    id: "examen-completo-hombres",
    image: "/images/promos/v2/promo-10.webp",
    alt: "Promoción de examen completo para hombres por $89 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete men's exam promotion for $89 at Clínica Hispana Cruz 4, Houston TX",
    title: "Examen completo para hombres",
    titleEn: "Complete men's exam",
    price: "$89",
    description:
      "Examen de orina, próstata y testosterona por $89, con consulta médica gratis incluida.",
    descriptionEn:
      "Urine, prostate and testosterone tests for $89, with a free medical consultation included.",
    includes: [
      "Examen de orina",
      "Examen de próstata (prevención)",
      "Examen de testosterona",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Urine test",
      "Prostate exam (prevention)",
      "Testosterone test",
      "Free medical consultation",
    ],
  },
  {
    id: "vitamina-b12-6-dosis",
    image: "/images/promos/v2/promo-11.webp",
    alt: "Promoción de 6 dosis de Vitamina B12 por $150 con 50% de descuento en Clínica Hispana Cruz 4, Houston TX",
    altEn: "6 doses of Vitamin B12 for $150 with 50% off at Clínica Hispana Cruz 4, Houston TX",
    title: "6 dosis de Vitamina B12",
    titleEn: "6 doses of Vitamin B12",
    price: "$150",
    description:
      "50% de descuento: 6 dosis de Vitamina B12 por solo $150 (antes $300), con consulta médica gratis.",
    descriptionEn:
      "50% off: 6 doses of Vitamin B12 for just $150 (was $300), with a free medical consultation.",
    includes: [
      "6 dosis de vitamina B12",
      "Consulta médica gratis incluida",
      "Más energía y refuerzo inmunológico",
      "Combate el cansancio y la fatiga",
    ],
    includesEn: [
      "6 doses of Vitamin B12",
      "Free medical consultation included",
      "More energy and immune support",
      "Fights tiredness and fatigue",
    ],
  },
];
