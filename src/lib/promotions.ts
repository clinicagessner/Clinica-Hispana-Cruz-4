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
// Los campos `*En` son la variante en inglés; si faltan, se usa el español.

export type Promotion = {
  id: string;
  image: string;
  alt: string;
  altEn?: string;
  title: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
};

export const PROMOS: Promotion[] = [
  {
    id: "salud-intima-femenina",
    image: "/images/promos/v2/promo-1.webp",
    alt: "Promoción de salud íntima femenina por $69 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Women's intimate health promotion for $69 at Clínica Hispana Cruz 4, Houston TX",
    title: "Salud íntima femenina",
    titleEn: "Women's intimate health",
    description:
      "¿Flujo, picazón o mal olor? Cultivo íntimo, consulta médica y examen de orina por solo $69.",
    descriptionEn:
      "Discharge, itching or odor? Intimate culture, medical consultation and urine test for just $69.",
  },
  {
    id: "chequeo-completo-salud",
    image: "/images/promos/v2/promo-2.webp",
    alt: "Promoción de chequeo completo de salud por $99 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete health check-up promotion for $99 at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo completo de salud",
    titleEn: "Complete health check-up",
    description:
      "Examen general de sangre, A1C y orina por solo $99, con examen de orina y consulta médica gratis.",
    descriptionEn:
      "General blood panel, A1C and urinalysis for just $99, with free urine test and medical consultation.",
  },
  {
    id: "general-sangre-b12",
    image: "/images/promos/v2/promo-3.webp",
    alt: "Promoción de examen general de sangre más Vitamina B12 por $99 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "General blood panel plus Vitamin B12 promotion for $99 at Clínica Hispana Cruz 4, Houston TX",
    title: "General de sangre + Vitamina B12",
    titleEn: "Blood panel + Vitamin B12",
    description:
      "Examen general de sangre más inyección de Vitamina B12 por solo $99. Más energía y bienestar.",
    descriptionEn:
      "General blood panel plus a Vitamin B12 injection for just $99. More energy and wellness.",
  },
  {
    id: "chequeo-familiar",
    image: "/images/promos/v2/promo-4.webp",
    alt: "Promoción de chequeo médico para adultos y niños en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Medical check-up promotion for adults and children at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo para adultos y niños",
    titleEn: "Check-up for adults and kids",
    description:
      "Examen de orina y glucosa gratis, más chequeo médico general a bajo costo para toda la familia.",
    descriptionEn:
      "Free urine and glucose tests, plus a low-cost general medical check-up for the whole family.",
  },
  {
    id: "perfil-hormonal-hombres",
    image: "/images/promos/v2/promo-5.webp",
    alt: "Promoción de perfil hormonal masculino por $200 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Men's hormone panel promotion for $200 at Clínica Hispana Cruz 4, Houston TX",
    title: "Perfil hormonal para hombres",
    titleEn: "Men's hormone panel",
    description:
      "Evalúa tu salud hormonal: testosterona, energía y vitalidad. Perfil hormonal masculino por $200.",
    descriptionEn:
      "Evaluate your hormonal health: testosterone, energy and vitality. Men's hormone panel for $200.",
  },
  {
    id: "perfil-hormonal-mujeres",
    image: "/images/promos/v2/promo-6.webp",
    alt: "Promoción de perfil hormonal femenino por $250 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Women's hormone panel promotion for $250 at Clínica Hispana Cruz 4, Houston TX",
    title: "Perfil hormonal para mujeres",
    titleEn: "Women's hormone panel",
    description:
      "Evalúa desequilibrios hormonales, menopausia y tiroides. Perfil hormonal femenino por $250.",
    descriptionEn:
      "Evaluate hormonal imbalances, menopause and thyroid. Women's hormone panel for $250.",
  },
  {
    id: "solo-vitaminas",
    image: "/images/promos/v2/promo-7.webp",
    alt: "Promoción solo vitaminas con consulta y examen de orina por $99 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Vitamins-only promotion with consultation and urine test for $99 at Clínica Hispana Cruz 4, Houston TX",
    title: "Promoción solo vitaminas",
    titleEn: "Vitamins-only promo",
    description:
      "Consulta médica general y examen de orina incluidos por solo $99. Para tu bienestar y energía.",
    descriptionEn:
      "General medical consultation and urine test included for just $99. For your wellness and energy.",
  },
  {
    id: "diagnostico-ets",
    image: "/images/promos/v2/promo-8.webp",
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $250 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete sexually transmitted disease screening promotion for $250 at Clínica Hispana Cruz 4, Houston TX",
    title: "Diagnóstico completo de ETS",
    titleEn: "Complete STD screening",
    description:
      "Despeja tus dudas y hazte la prueba. Diagnóstico completo de enfermedades de transmisión sexual por $250.",
    descriptionEn:
      "Clear your doubts and get tested. Complete sexually transmitted disease screening for $250.",
  },
  {
    id: "chequeo-completo-mujer",
    image: "/images/promos/v2/promo-9.webp",
    alt: "Promoción de chequeo completo de la mujer con Papanicolaou por $79 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete women's check-up with Pap smear promotion for $79 at Clínica Hispana Cruz 4, Houston TX",
    title: "Chequeo completo de la mujer",
    titleEn: "Complete women's check-up",
    description:
      "Examen de Papanicolaou, consulta ginecológica y orden de mamografía por solo $79.",
    descriptionEn:
      "Pap smear, gynecological consultation and mammogram order for just $79.",
  },
  {
    id: "examen-completo-hombres",
    image: "/images/promos/v2/promo-10.webp",
    alt: "Promoción de examen completo para hombres por $89 en Clínica Hispana Cruz 4, Houston TX",
    altEn: "Complete men's exam promotion for $89 at Clínica Hispana Cruz 4, Houston TX",
    title: "Examen completo para hombres",
    titleEn: "Complete men's exam",
    description:
      "Examen de orina, próstata y testosterona por $89, con consulta médica gratis incluida.",
    descriptionEn:
      "Urine, prostate and testosterone tests for $89, with a free medical consultation included.",
  },
  {
    id: "vitamina-b12-6-dosis",
    image: "/images/promos/v2/promo-11.webp",
    alt: "Promoción de 6 dosis de Vitamina B12 por $150 con 50% de descuento en Clínica Hispana Cruz 4, Houston TX",
    altEn: "6 doses of Vitamin B12 for $150 with 50% off at Clínica Hispana Cruz 4, Houston TX",
    title: "6 dosis de Vitamina B12",
    titleEn: "6 doses of Vitamin B12",
    description:
      "50% de descuento: 6 dosis de Vitamina B12 por solo $150 (antes $300), con consulta médica gratis.",
    descriptionEn:
      "50% off: 6 doses of Vitamin B12 for just $150 (was $300), with a free medical consultation.",
  },
];
