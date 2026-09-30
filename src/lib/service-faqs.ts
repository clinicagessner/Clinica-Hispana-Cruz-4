interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo hacerme exámenes de control?",
        "answer": "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get control labs?",
        "answer": "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Tengo que ir en ayunas para el análisis de tiroides?",
        "answer": "Para la TSH normalmente no. Si toma biotina, un suplemento común para el cabello, suspéndala dos días antes porque altera el resultado. Si ya toma pastilla para la tiroides, pregunte si debe tomarla antes o después de la muestra."
      },
      {
        "question": "Ya tomo levotiroxina, ¿cada cuánto debo revisarme?",
        "answer": "Seis a ocho semanas después de cualquier cambio de dosis y, una vez estable, una vez al año o antes si vuelven los síntomas."
      },
      {
        "question": "¿La tiroides lenta explica que haya subido mucho de peso?",
        "answer": "Suele sumar solo unos kilos, en buena parte por retención de líquido. Un aumento grande casi siempre tiene otras causas, que el médico revisa en la misma consulta."
      }
    ],
    "faqsEn": [
      {
        "question": "Is fasting required for thyroid blood work?",
        "answer": "Usually not for TSH. If you take biotin, a common hair supplement, stop it two days before because it skews the result. If you already take thyroid medication, ask whether to take it before or after the draw."
      },
      {
        "question": "I already take levothyroxine. How often should I be checked?",
        "answer": "Six to eight weeks after any dose change and, once stable, once a year or sooner if symptoms return."
      },
      {
        "question": "Can a slow thyroid explain a lot of weight gain?",
        "answer": "It usually adds only a few pounds, largely from fluid retention. A big gain almost always has other causes, which the doctor looks into at the same visit."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Es alergia o es un resfriado? ¿Cómo distinguirlos?",
        "answer": "El resfriado suele durar una semana y puede dar fiebre o dolor de cuerpo. La alergia no da fiebre, dura mientras dura la exposición y la picazón en ojos o nariz es muy típica."
      },
      {
        "question": "Tengo ronchas que aparecen y desaparecen desde hace días. ¿Debo consultar?",
        "answer": "Sí. Las ronchas que duran más de unos días conviene revisarlas para buscar la causa y darle un tratamiento que las controle. Si se acompañan de hinchazón de labios o falta de aire, llame al 911."
      },
      {
        "question": "¿Puedo usar el aerosol nasal para la congestión todos los días?",
        "answer": "Los de esteroide para la alergia sí, con la técnica correcta. Los descongestionantes que destapan al instante no deben usarse más de tres días seguidos porque la congestión regresa peor."
      }
    ],
    "faqsEn": [
      {
        "question": "How can I tell allergies from a cold?",
        "answer": "A cold usually lasts about a week and can bring fever or body aches. Allergies don't cause fever, last as long as the exposure lasts, and itchy eyes or nose are a telltale sign."
      },
      {
        "question": "I've had hives coming and going for days. Should I be seen?",
        "answer": "Yes. Hives that last more than a few days are worth checking to look for the cause and get treatment that controls them. If they come with lip swelling or shortness of breath, call 911."
      },
      {
        "question": "Can I use a nasal spray for congestion every day?",
        "answer": "Steroid sprays for allergies, yes, with the right technique. Instant-relief decongestant sprays shouldn't be used more than three days in a row because the congestion comes back worse."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Hacen prueba de flu y de COVID el mismo día?",
        "answer": "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you test for flu and COVID the same day?",
        "answer": "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Qué parte del formulario tengo que llenar antes de venir?",
        "answer": "La sección de historia médica, que contestan los padres o el alumno: enfermedades previas, medicamentos, alergias y antecedentes familiares. El médico llena y firma la parte del examen."
      },
      {
        "question": "¿La prueba de tuberculosis se termina en una sola visita?",
        "answer": "No. Es una prueba cutánea: se aplica hoy y hay que regresar entre 48 y 72 horas después para que se lea el resultado y se anote en el formulario."
      },
      {
        "question": "¿Qué pasa si el médico encuentra algo durante el examen?",
        "answer": "Se lo explica en ese momento. Algunos hallazgos, como un soplo o presión alta, pueden requerir una revisión adicional antes de autorizar el deporte; le decimos qué sigue y cómo hacerlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Which part of the form should I fill out before coming in?",
        "answer": "The medical history section, answered by the parents or student: past illnesses, medications, allergies and family history. The doctor completes and signs the exam part."
      },
      {
        "question": "Is the TB test done in a single visit?",
        "answer": "No. It's a skin test: it's placed today and you come back 48 to 72 hours later so the result can be read and recorded on the form."
      },
      {
        "question": "What if the doctor finds something during the exam?",
        "answer": "They explain it on the spot. Some findings, such as a murmur or high blood pressure, may need an extra check before sports clearance; we tell you what comes next and how to handle it."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Necesito cita para el papanicolaou?",
        "answer": "No es obligatorio, atendemos sin cita; pero puedes llamarnos para reservar un horario cómodo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need an appointment for a Pap smear?",
        "answer": "It's not required, we welcome walk-ins; but you can call us to reserve a convenient time."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Qué tan confiable es la prueba de embarazo?",
        "answer": "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How reliable is the pregnancy test?",
        "answer": "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen?",
        "answer": "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What contraceptive methods do you offer?",
        "answer": "We offer guidance, birth control pills and the injection, and help you choose the right method for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Qué incluye el examen del hombre?",
        "answer": "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the men's exam include?",
        "answer": "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo entregan los resultados?",
        "answer": "Los resultados salen rápido y te avisamos en cuanto están listos; el equipo médico te los explica en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon are results ready?",
        "answer": "Results come back quickly and we let you know as soon as they're ready; the medical team explains them in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Puedo recibir tratamiento el mismo día?",
        "answer": "Sí, hacemos el examen de orina y, si hay infección, iniciamos el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get treatment the same day?",
        "answer": "Yes, we run the urine test and, if there's an infection, we start treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Debo dejar de comer antes de recoger la muestra?",
        "answer": "No. Puede comer normalmente. Lo que sí conviene es avisar si toma antidiarreicos, antibióticos o suplementos de hierro, porque pueden cambiar el resultado."
      },
      {
        "question": "¿Cuánto tiempo puedo guardar la muestra antes de traerla?",
        "answer": "Lo ideal es traerla lo antes posible. Si no puede venir enseguida, pregunte al recoger el frasco cómo conservarla; depende del estudio que se pidió."
      },
      {
        "question": "¿Para qué sirven varias muestras en días distintos?",
        "answer": "Ciertos parásitos no aparecen en todas las evacuaciones. Con varias muestras separadas es menos probable que pasen desapercibidos."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for a stool test?",
        "answer": "No. You can eat normally. Do let us know if you take anti-diarrheals, antibiotics or iron supplements, since they can change the result."
      },
      {
        "question": "How long can I keep the sample before bringing it in?",
        "answer": "Ideally, bring it as soon as possible. If you can't come right away, ask when you pick up the container how to store it; it depends on the test ordered."
      },
      {
        "question": "Why am I asked for more than one sample?",
        "answer": "Some parasites are shed on and off. Collecting samples on different days raises the chance of finding them if they're there."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cuánto tarda el resultado del strep test?",
        "answer": "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the strep test take?",
        "answer": "The rapid strep test gives a result in just a few minutes during your visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Tengo que regresar para leer la prueba de TB?",
        "answer": "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to come back to read the TB test?",
        "answer": "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas son confidenciales?",
        "answer": "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the testing confidential?",
        "answer": "Yes, all STD testing is completely confidential and done with respect and without judgment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Qué pasa si tomo un medicamento con receta?",
        "answer": "Dígalo antes de la prueba y traiga la lista. Algunos medicamentos legales pueden dar positivo en la detección inicial, y ese dato ayuda a interpretar el resultado correctamente."
      },
      {
        "question": "¿Quién recibe el resultado de mi prueba?",
        "answer": "Usted, y la persona o empresa que usted autorice por escrito. No se comparte con nadie más."
      },
      {
        "question": "¿Puedo tomar mucha agua antes de la prueba?",
        "answer": "Tome agua como siempre. Una muestra demasiado diluida puede considerarse inválida y obligarle a repetir la prueba."
      }
    ],
    "faqsEn": [
      {
        "question": "What if I take a prescription medication?",
        "answer": "Mention it before the test and bring the list. Some legal medications can trigger a positive on the initial screen, and that information helps read the result correctly."
      },
      {
        "question": "Who gets my test result?",
        "answer": "You, plus any person or company you authorize in writing. It isn't shared with anyone else."
      },
      {
        "question": "Can I drink a lot of water before the test?",
        "answer": "Drink as you normally would. An overly diluted sample can be ruled invalid and you may have to repeat the test."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿Cuánto dura el electrocardiograma?",
        "answer": "La toma del trazo dura menos de un minuto; con la preparación, todo el estudio suele tomar unos diez minutos."
      },
      {
        "question": "¿Un electrocardiograma normal descarta cualquier problema del corazón?",
        "answer": "No siempre. Muestra el ritmo y la actividad en ese momento. Si los síntomas van y vienen, el médico puede indicar estudios adicionales aunque el EKG salga normal."
      },
      {
        "question": "¿Tengo que dejar de tomar mis medicamentos antes del EKG?",
        "answer": "No. Tome sus medicamentos como siempre y traiga la lista, porque algunos influyen en el trazo y el médico lo tiene en cuenta al leerlo."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does an EKG take?",
        "answer": "Recording the tracing takes under a minute; with setup, the whole test usually takes about ten minutes."
      },
      {
        "question": "Does a normal EKG rule out every heart problem?",
        "answer": "Not always. It shows rhythm and activity at that moment. If symptoms come and go, the doctor may order more tests even with a normal EKG."
      },
      {
        "question": "Should I stop my medications before the EKG?",
        "answer": "No. Take your medications as usual and bring the list, since some affect the tracing and the doctor factors that in."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿El ultrasonido tiene radiación?",
        "answer": "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does ultrasound use radiation?",
        "answer": "No, ultrasound uses no radiation, so it's safe even during pregnancy."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿El certificado DOT me lo dan al terminar?",
        "answer": "Sí. Si el examen sale en orden, se lleva el certificado al terminar la visita."
      },
      {
        "question": "¿Por qué me dieron un certificado de solo un año?",
        "answer": "Porque hay algo que el examinador quiere volver a revisar pronto, casi siempre la presión arterial o la diabetes. Si la mantiene controlada, en la siguiente revisión puede obtener el certificado por más tiempo."
      },
      {
        "question": "¿La prueba de drogas forma parte del examen DOT?",
        "answer": "No. La muestra de orina del DOT sirve para detectar proteína, sangre o azúcar. La prueba de drogas es aparte y la pide el empleador; también la hacemos si se la solicitan."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I get my DOT certificate the same day?",
        "answer": "Yes. If the exam checks out, you leave with the certificate at the end of the visit."
      },
      {
        "question": "Why did I only get a one-year card?",
        "answer": "Because there's something the examiner wants to recheck soon, usually blood pressure or diabetes. Keep it under control and you may get a longer certificate at the next exam."
      },
      {
        "question": "Is drug testing part of the DOT physical?",
        "answer": "No. The urine test in the DOT physical looks for protein, blood and sugar. The drug test is separate and ordered by the employer; we also do it if you're asked for one."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Cuántas visitas necesito para el I-693?",
        "answer": "Por lo general dos: una para el examen y las muestras, y otra para firmar y recoger el sobre cuando estén los resultados. Si falta alguna vacuna o una prueba sale positiva, puede hacer falta un paso más."
      },
      {
        "question": "¿Me sirven las vacunas que me pusieron en mi país?",
        "answer": "Sí, si tienen fecha y el nombre de la vacuna. Tráigalas aunque estén en español o en una cartilla vieja; el médico las revisa y las anota en el formulario."
      },
      {
        "question": "¿Y si mi prueba de tuberculosis da positivo?",
        "answer": "Se pide una radiografía de tórax. Si sale normal, el trámite continúa. Si hay dudas, el médico le refiere al departamento de salud para completar la evaluación."
      }
    ],
    "faqsEn": [
      {
        "question": "How many trips to the clinic does the I-693 need?",
        "answer": "Usually two: one for the exam and samples, and one to sign and pick up the envelope once results are in. A missing vaccine or a positive test can add a step."
      },
      {
        "question": "Do vaccines from my home country count?",
        "answer": "Yes, as long as they show the date and the vaccine name. Bring them even if they're in Spanish or on an old card; the doctor reviews them and records them on the form."
      },
      {
        "question": "What if my TB test comes back positive?",
        "answer": "A chest X-ray is ordered. If it's clear, the process continues. If there's any doubt, the doctor refers you to the health department to finish the evaluation."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Puedo ponerme la vacuna de la flu si estoy embarazada?",
        "answer": "Sí. Los CDC la recomiendan durante el embarazo porque protege a la madre y, en los primeros meses, al bebé. Avísenos de su embarazo al llegar."
      },
      {
        "question": "¿Cada cuánto necesito el refuerzo del tétanos?",
        "answer": "Cada diez años, después de haber recibido al menos una Tdap de adulto. Si se hace una herida sucia y su último refuerzo tiene más de cinco años, consulte cuanto antes."
      },
      {
        "question": "¿Me dan comprobante de la vacuna?",
        "answer": "Sí. Le entregamos un comprobante con la fecha y el nombre de la vacuna para su cartilla, la escuela o el trabajo."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the flu vaccine safe during pregnancy?",
        "answer": "Yes. The CDC recommends it during pregnancy because it protects the mother and, in the first months, the baby. Let us know you're pregnant when you arrive."
      },
      {
        "question": "When is my next tetanus shot due?",
        "answer": "Every ten years, after at least one adult Tdap dose. If you get a dirty wound and your last booster was more than five years ago, get checked promptly."
      },
      {
        "question": "Will I get proof of vaccination?",
        "answer": "Yes. We give you a record with the date and vaccine name for your shot card, school or job."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Quién aplica el suero vitaminado?",
        "answer": "Lo aplica y supervisa personal médico, tras una breve evaluación para elegir el suero adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Who administers the vitamin IV?",
        "answer": "It's administered and monitored by medical staff, after a brief evaluation to choose the right drip for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Atienden heridas sin cita?",
        "answer": "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat wounds without an appointment?",
        "answer": "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Hacen cambios de vendaje y seguimiento?",
        "answer": "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do dressing changes and follow-up?",
        "answer": "Yes, we clean, treat and change the dressings, and follow up until the wound heals."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué cirugías menores realizan?",
        "answer": "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What minor surgeries do you perform?",
        "answer": "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿El drenaje de un absceso duele?",
        "answer": "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does abscess drainage hurt?",
        "answer": "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cómo tratan la uña encarnada?",
        "answer": "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you treat an ingrown toenail?",
        "answer": "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Qué medicamentos puedo recoger en la farmacia de la clínica?",
        "answer": "Los que te indique el equipo médico en tu consulta aquí, más productos de venta libre. Las recetas de otros consultorios no se surten en la clínica."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Which medications can I pick up at the clinic pharmacy?",
        "answer": "The ones our medical team prescribes during your visit here, plus over-the-counter products. Prescriptions from other offices are not filled at the clinic."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
