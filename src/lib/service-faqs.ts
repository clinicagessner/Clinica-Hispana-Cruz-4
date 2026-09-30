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
        "question": "¿Cada cuánto tengo que venir a control?",
        "answer": "Mientras sus números no estén en meta, cada uno a tres meses. Cuando la diabetes, la presión o el colesterol se estabilizan, las visitas se espacian a cada tres o seis meses."
      },
      {
        "question": "¿Puedo dejar el medicamento si ya me siento bien?",
        "answer": "No lo suspenda por su cuenta. Sentirse bien suele ser señal de que el medicamento funciona. Si quiere reducirlo, háblelo en la consulta y lo ajustamos con sus resultados."
      },
      {
        "question": "¿Tengo que venir en ayunas a mis análisis de control?",
        "answer": "Para la glucosa en ayunas y a veces los triglicéridos, sí: de 8 a 12 horas, solo agua. La A1C no requiere ayuno. Le decimos qué aplica en su caso al pedir los estudios."
      }
    ],
    "faqsEn": [
      {
        "question": "How frequently will I be seen for follow-up?",
        "answer": "Until your numbers reach the goal, every one to three months. Once diabetes, blood pressure or cholesterol are stable, visits are spaced to every three to six months."
      },
      {
        "question": "Can I stop my medication once I feel better?",
        "answer": "Don't stop on your own. Feeling well usually means the medication is working. If you'd like to cut back, bring it up at your visit and we'll adjust it based on your results."
      },
      {
        "question": "Should I skip breakfast before my control labs?",
        "answer": "For fasting glucose and sometimes triglycerides, yes: 8 to 12 hours, water only. A1C doesn't require fasting. We tell you what applies when we order the tests."
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
        "question": "¿Hacen la prueba de flu y de COVID en la misma visita?",
        "answer": "Sí. Las pruebas rápidas se hacen durante la consulta y el diagnóstico sale ese mismo día, junto con el tratamiento que corresponda."
      },
      {
        "question": "¿Cuándo debo hacerme la prueba?",
        "answer": "Lo antes posible después de que empiecen los síntomas. En la influenza, el tratamiento antiviral rinde más si se empieza en las primeras 48 horas."
      },
      {
        "question": "¿Cuándo puedo volver al trabajo?",
        "answer": "Cuando pase un día completo sin fiebre, sin medicamento para bajarla, y los síntomas vayan a menos. Si su trabajo pide constancia, pídala en la consulta."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get flu and COVID tests at the same visit?",
        "answer": "Yes. Rapid tests are done during the visit and you get a diagnosis that same day, along with the appropriate treatment."
      },
      {
        "question": "When should I get tested?",
        "answer": "As soon as possible after symptoms start. For flu, antiviral treatment works best when started within the first 48 hours."
      },
      {
        "question": "When can I go back to work?",
        "answer": "Once a full day passes with no fever and no fever-reducing medicine, and your symptoms are easing. If your job needs a note, ask for it at the visit."
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
        "question": "¿Puedo hacerme el Papanicolaou si estoy en mis días?",
        "answer": "Es mejor esperar a que termine la regla, porque la sangre dificulta leer la muestra. Si tiene síntomas que no pueden esperar, venga igual y lo valoramos."
      },
      {
        "question": "¿Qué hago si tengo flujo con mal olor o comezón?",
        "answer": "Consulte sin automedicarse: los óvulos de farmacia pueden ocultar la causa. Con un cultivo se identifica el tipo de infección y se indica el tratamiento que sí la resuelve."
      },
      {
        "question": "¿También hacen pruebas de infecciones de transmisión sexual?",
        "answer": "Sí. Si tuvo una pareja nueva, nota llagas o flujo diferente, o simplemente quiere salir de dudas, las pruebas se piden en la misma consulta y los resultados se manejan con total confidencialidad."
      }
    ],
    "faqsEn": [
      {
        "question": "Is a Pap smear possible while I'm menstruating?",
        "answer": "It's better to wait until your period ends, since blood makes the sample harder to read. If your symptoms can't wait, come in anyway and we'll assess you."
      },
      {
        "question": "What should I do about discharge with an odor or itching?",
        "answer": "Get checked instead of self-treating: over-the-counter suppositories can hide the cause. A culture identifies the type of infection so you get a treatment that actually clears it."
      },
      {
        "question": "Do you also test for sexually transmitted infections?",
        "answer": "Yes. If you have a new partner, notice sores or unusual discharge, or just want peace of mind, testing is ordered at the same visit and results are handled in full confidence."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Desde cuándo puedo hacerme la prueba?",
        "answer": "Desde el día en que la regla se atrasa, la prueba de orina da una respuesta fiable. La de sangre puede adelantarse varios días a esa fecha. Si tiene dudas sobre las fechas, el médico le dice cuál conviene."
      },
      {
        "question": "La prueba casera salió con una línea muy tenue, ¿qué significa?",
        "answer": "Una segunda línea, aunque sea tenue, casi siempre indica embarazo. Conviene confirmarlo en consulta, sobre todo si hay sangrado o dolor."
      },
      {
        "question": "¿Hacen el control prenatal?",
        "answer": "Confirmamos el embarazo, le damos las primeras indicaciones y podemos hacer un ultrasonido temprano. Para el control prenatal completo le orientamos con la referencia al ginecólogo u obstetra."
      }
    ],
    "faqsEn": [
      {
        "question": "How early can I take the test?",
        "answer": "From the day your period is late, a urine test gives a trustworthy answer. Blood testing can catch it several days earlier. If you're unsure of your dates, the doctor tells you which fits."
      },
      {
        "question": "My home test showed a very faint line. What does it mean?",
        "answer": "A second line, even a faint one, almost always means pregnancy. It's worth confirming at a visit, especially if there's bleeding or pain."
      },
      {
        "question": "Do you provide prenatal care?",
        "answer": "We confirm the pregnancy, give you first steps and can do an early ultrasound. For full prenatal care we help you with a referral to a gynecologist or obstetrician."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Cuándo empiezan a proteger las pastillas?",
        "answer": "Depende del día del ciclo en que empiece. El médico le indica si necesita usar condón como respaldo durante los primeros siete días."
      },
      {
        "question": "¿La inyección engorda?",
        "answer": "Algunas personas suben un poco de peso con la inyección trimestral, pero no a todas les pasa. Si le preocupa, lo revisamos en el control y valoramos otra opción."
      },
      {
        "question": "Si dejo el método, ¿cuánto tardo en poder embarazarme?",
        "answer": "Con las pastillas, la fertilidad suele volver en pocas semanas. Con la inyección puede tardar varios meses más, así que conviene tenerlo en cuenta si planea un embarazo."
      }
    ],
    "faqsEn": [
      {
        "question": "When do the pills start protecting me?",
        "answer": "It depends on which day of your cycle you start. The doctor tells you whether you need condoms as backup for the first seven days."
      },
      {
        "question": "Does the shot cause weight gain?",
        "answer": "Some people gain a little weight on the three-month shot, but not everyone does. If it worries you, we review it at follow-up and consider another option."
      },
      {
        "question": "If I stop, how long until I can get pregnant?",
        "answer": "With pills, fertility usually returns within a few weeks. With the shot it can take several months longer, so keep that in mind if you're planning a pregnancy."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele quitarse el implante?",
        "answer": "La única molestia real es el pinchazo del anestésico. Durante el retiro puede notar presión, pero no dolor."
      },
      {
        "question": "¿Queda cicatriz?",
        "answer": "Una marca muy pequeña, de pocos milímetros, que con el tiempo suele aclararse."
      },
      {
        "question": "Ya no siento el implante en el brazo, ¿me lo pueden quitar?",
        "answer": "Primero hay que localizarlo. Si no se palpa, puede necesitarse un ultrasonido u otro estudio antes de retirarlo con seguridad."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "You only feel the pinch of the local anesthetic. During removal you may feel pressure, but not pain."
      },
      {
        "question": "Will it leave a scar?",
        "answer": "A tiny mark of a few millimeters, which usually fades over time."
      },
      {
        "question": "I can't feel the implant in my arm anymore. Can you still remove it?",
        "answer": "It has to be located first. If it can't be felt, an ultrasound or other study may be needed before removing it safely."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿A qué edad debo empezar a hacerme el PSA?",
        "answer": "Por lo general la conversación empieza a los 55 años, o antes si su padre o un hermano tuvieron cáncer de próstata. El médico le ayuda a decidir si le conviene."
      },
      {
        "question": "¿Un PSA alto quiere decir que tengo cáncer?",
        "answer": "No. También sube cuando la próstata crece con la edad o hay una infección. Se interpreta junto con sus síntomas y, si hace falta, se repite o se completa con otros estudios."
      },
      {
        "question": "¿Por qué el análisis hormonal se hace temprano?",
        "answer": "Porque los niveles de algunas hormonas masculinas son más altos por la mañana. Tomar la muestra temprano da un resultado más fiel."
      }
    ],
    "faqsEn": [
      {
        "question": "When does PSA screening usually begin?",
        "answer": "The conversation usually starts at 55, or earlier if your father or a brother had prostate cancer. The doctor helps you decide whether it's right for you."
      },
      {
        "question": "Does a high PSA mean I have cancer?",
        "answer": "No. It also rises when the prostate grows with age or there's an infection. It's read alongside your symptoms and, if needed, repeated or followed by other tests."
      },
      {
        "question": "Why is the hormone test done early in the day?",
        "answer": "Because some male hormone levels are highest in the morning. Drawing the sample early gives a more accurate result."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo entregan los resultados?",
        "answer": "Los resultados salen rápido y le avisamos en cuanto están listos; el equipo médico se los explica en español."
      },
      {
        "question": "¿Puedo hacerme análisis sin que un médico me los pida?",
        "answer": "Venga a consulta y el médico decide con usted qué estudios tienen sentido según su edad, síntomas y antecedentes. Así no paga por análisis que no necesita."
      },
      {
        "question": "¿Qué hago si me mareo cuando me sacan sangre?",
        "answer": "Avísenos al llegar. Tomamos la muestra con usted acostado y le damos unos minutos para reponerse antes de levantarse."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon are results ready?",
        "answer": "Results come back quickly and we let you know as soon as they're ready; the medical team explains them in Spanish."
      },
      {
        "question": "Can I get lab work without a doctor ordering it?",
        "answer": "Come in for a visit and the doctor decides with you which tests make sense for your age, symptoms and history. You end up paying only for studies that answer a real question."
      },
      {
        "question": "What if I get dizzy when my blood is drawn?",
        "answer": "Tell us when you arrive. We draw the sample with you lying down and give you a few minutes to recover before getting up."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Salgo con el tratamiento el mismo día?",
        "answer": "Sí. Hacemos el examen de orina durante la consulta y, si confirma la infección, el tratamiento empieza ese mismo día."
      },
      {
        "question": "¿Puedo tomar el antibiótico que me sobró la otra vez?",
        "answer": "No es buena idea. Puede no ser el adecuado para esta bacteria, y una dosis incompleta favorece que la infección regrese más resistente."
      },
      {
        "question": "¿Por qué me mandan un cultivo de orina?",
        "answer": "Cuando las infecciones se repiten, no mejoran con el primer tratamiento o hay embarazo, el cultivo identifica la bacteria exacta y el antibiótico que sí funciona contra ella."
      }
    ],
    "faqsEn": [
      {
        "question": "Will I leave with treatment the same day?",
        "answer": "Yes. We test your urine during the visit and, if it confirms an infection, treatment starts that very day."
      },
      {
        "question": "Can I take leftover antibiotics from last time?",
        "answer": "Not a good idea. They may not be right for this bacteria, and an incomplete course helps the infection return more resistant."
      },
      {
        "question": "Why am I being sent for a urine culture?",
        "answer": "When infections recur, don't improve with the first treatment or occur during pregnancy, the culture identifies the exact bacteria and the antibiotic that works against it."
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
        "answer": "La prueba rápida da el resultado en pocos minutos, durante la misma consulta."
      },
      {
        "question": "¿Por qué no me dan antibiótico para cualquier dolor de garganta?",
        "answer": "La gran mayoría los causa un virus, y contra los virus el antibiótico no sirve. Tomarlo sin necesidad expone a efectos secundarios y hace que las bacterias se vuelvan resistentes."
      },
      {
        "question": "¿Cuándo puede regresar a clases un niño con estreptococo?",
        "answer": "Por lo general después de 12 horas de antibiótico y sin fiebre. Si la escuela pide constancia, pídala en la consulta."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the strep test take?",
        "answer": "You'll know within minutes, before you leave the exam room."
      },
      {
        "question": "Why not give antibiotics for every sore throat?",
        "answer": "Most sore throats are caused by viruses, and antibiotics don't touch viruses. Taking them unnecessarily means side effects and helps bacteria become resistant."
      },
      {
        "question": "How soon can a child with strep return to class?",
        "answer": "Usually after 12 hours on antibiotics and no fever. If the school wants a note, ask for it during the visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Tengo que regresar para la lectura?",
        "answer": "Sí. La reacción se mide dos o tres días después de la aplicación. Si no vuelve en ese plazo, hay que repetirla."
      },
      {
        "question": "Me vacunaron con BCG de niño, ¿puedo hacerme la prueba?",
        "answer": "Sí, pero avíselo antes. La BCG puede dar un resultado positivo en la piel, y el médico le dirá si conviene más una prueba en sangre."
      },
      {
        "question": "¿Un resultado positivo quiere decir que tengo tuberculosis?",
        "answer": "No necesariamente. Indica contacto con la bacteria. Se completa con una radiografía de tórax para saber si hay enfermedad activa, que es poco frecuente."
      }
    ],
    "faqsEn": [
      {
        "question": "Is a second visit needed for the TB skin test?",
        "answer": "Yes. The reaction has to be measured two to three days after placement. If you don't return within that window, it has to be repeated."
      },
      {
        "question": "Can I take the skin test if I got BCG as a kid?",
        "answer": "Yes, but mention it first. BCG can cause a positive skin reaction, and the doctor will tell you whether a blood test is a better option."
      },
      {
        "question": "If my skin test is positive, am I sick with TB?",
        "answer": "Not necessarily. It shows contact with the bacteria. A chest X-ray follows to check for active disease, which is uncommon."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas son confidenciales?",
        "answer": "Sí. Los resultados son información médica privada y solo se comparten con usted."
      },
      {
        "question": "¿Cuánto tiempo después de una relación de riesgo debo hacerme la prueba?",
        "answer": "Depende de la infección. Algunas se detectan a las una o dos semanas y otras, como el VIH o la sífilis, pueden necesitar más tiempo o repetirse. El médico le dice cuándo es el mejor momento según su caso."
      },
      {
        "question": "¿Mi pareja también tiene que tratarse?",
        "answer": "Sí, cuando la infección se transmite entre ambos. Si solo se trata una persona, la infección puede volver a pasar de uno a otro."
      }
    ],
    "faqsEn": [
      {
        "question": "Is testing confidential?",
        "answer": "Yes. Results are private medical information and are shared only with you."
      },
      {
        "question": "How long after a risky encounter should I get tested?",
        "answer": "It depends on the infection. Some show up after one or two weeks, while others, like HIV or syphilis, may need more time or a repeat test. The doctor tells you the best timing for your case."
      },
      {
        "question": "Does my partner need treatment too?",
        "answer": "Yes, when the infection passes between you. If only one person is treated, it can go back and forth again."
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
        "question": "¿Puedo comer antes de un ultrasonido abdominal?",
        "answer": "Mejor no. Se recomiendan seis a ocho horas de ayuno para que la vesícula se vea bien y haya menos gas. Puede tomar sus medicamentos con un poco de agua."
      },
      {
        "question": "¿Por qué me piden llegar con la vejiga llena?",
        "answer": "En el ultrasonido pélvico, la vejiga llena funciona como una ventana que deja ver el útero y los ovarios con claridad. Si llega vacía, puede que haya que esperar a que se llene."
      },
      {
        "question": "¿Me dan las imágenes o un reporte?",
        "answer": "Sí. El médico le explica el resultado y le entregamos el reporte para su expediente o para llevarlo al especialista si hace falta."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I eat before an abdominal ultrasound?",
        "answer": "Better not. Six to eight hours of fasting are recommended so the gallbladder shows clearly and there's less gas. You can take your medications with a little water."
      },
      {
        "question": "Why do I need to arrive with a full bladder?",
        "answer": "In a pelvic scan, a full bladder acts as a window that shows the uterus and ovaries clearly. If you arrive with it empty, you may need to wait until it fills."
      },
      {
        "question": "Will I get the images or a report?",
        "answer": "Yes. The doctor explains the result and we give you the report for your records or to take to a specialist if needed."
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
        "question": "¿Cuánto tiempo puedo esperar para que me cosan una herida?",
        "answer": "Venga cuanto antes, sin esperar al día siguiente. Mientras más tiempo pasa, más riesgo hay de infección y más difícil es cerrarla con seguridad."
      },
      {
        "question": "¿Me tienen que poner la vacuna del tétanos?",
        "answer": "Depende de cuándo fue su último refuerzo y de qué tan sucia estaba la herida. Si hace falta, la aplicamos en la misma visita."
      },
      {
        "question": "¿Me quitan los puntos en la clínica?",
        "answer": "Sí. Le indicamos la fecha según la zona de la herida y el retiro toma unos minutos."
      }
    ],
    "faqsEn": [
      {
        "question": "How long can I wait to get a wound stitched?",
        "answer": "Ideally, come in within the first hours. The longer it waits, the higher the infection risk and the harder it is to close safely."
      },
      {
        "question": "Will I need a tetanus shot?",
        "answer": "It depends on when you had your last booster and how dirty the wound was. If you need one, we give it at the same visit."
      },
      {
        "question": "Do you remove the stitches at the clinic?",
        "answer": "Yes. We tell you the date based on where the wound is, and removal takes just a few minutes."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Cada cuánto tengo que venir a curación?",
        "answer": "Depende de la herida. Algunas necesitan revisión cada pocos días y otras una vez por semana. Le damos la fecha de la siguiente visita al terminar cada curación."
      },
      {
        "question": "¿Puedo bañarme con la herida?",
        "answer": "Casi siempre sí, protegiendo el vendaje o cambiándolo después según le indiquemos. Evite tinas, albercas y ríos hasta que cierre."
      },
      {
        "question": "Vivo con diabetes y tengo una llaga en el pie sin dolor. ¿Es grave?",
        "answer": "Sí. En la diabetes una herida puede avanzar sin dolor. Consulte pronto aunque parezca pequeña."
      }
    ],
    "faqsEn": [
      {
        "question": "How often do I need to come in for wound care?",
        "answer": "It depends on the wound. Some need a check every few days and others once a week. We give you the next date at the end of each visit."
      },
      {
        "question": "Can I shower with the wound?",
        "answer": "Usually yes, protecting the dressing or changing it afterward as we instruct. Avoid tubs, pools and rivers until it closes."
      },
      {
        "question": "I have diabetes and a foot wound that doesn't hurt. Should I worry?",
        "answer": "Yes. With diabetes a wound can progress without pain. Get seen promptly even if it looks small."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué tipo de cirugías menores hacen?",
        "answer": "Retiro de lunares, verrugas, quistes sebáceos, lipomas y otras lesiones pequeñas de la piel, con anestesia local y sin hospitalización."
      },
      {
        "question": "¿Tengo que dejar mis medicamentos antes del procedimiento?",
        "answer": "No los suspenda por su cuenta. Díganos cuáles toma, sobre todo anticoagulantes o aspirina, y el médico le indica qué hacer."
      },
      {
        "question": "¿Queda cicatriz?",
        "answer": "Queda una cicatriz pequeña, que suele aclararse con los meses. El médico le explica antes cómo será según el tamaño y la zona."
      }
    ],
    "faqsEn": [
      {
        "question": "What kinds of minor surgery do you do?",
        "answer": "Removal of moles, warts, sebaceous cysts, lipomas and other small skin lesions, under local anesthesia and without a hospital stay."
      },
      {
        "question": "Should I stop my medications before the procedure?",
        "answer": "Don't stop them on your own. Tell us what you take, especially blood thinners or aspirin, and the doctor will tell you what to do."
      },
      {
        "question": "Will there be a scar?",
        "answer": "A small scar remains that usually fades over the months. The doctor explains beforehand what to expect based on the size and location."
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
        "answer": "Los que le indique el equipo médico en su consulta aquí, más productos de venta libre para malestares comunes."
      },
      {
        "question": "¿Tienen opciones genéricas?",
        "answer": "Cuando existe una versión genérica del medicamento indicado, se la ofrecemos. Suele costar menos y funciona igual."
      },
      {
        "question": "¿Me explican cómo tomar el medicamento?",
        "answer": "Sí. Al entregárselo le decimos en español la dosis, el horario, cuántos días tomarlo y qué efectos son normales."
      }
    ],
    "faqsEn": [
      {
        "question": "Which medications can I pick up at the clinic pharmacy?",
        "answer": "The ones our medical team prescribes during your visit here, plus over-the-counter products for common complaints."
      },
      {
        "question": "Do you have generic options?",
        "answer": "When a generic version of the prescribed medication exists, we offer it. It usually costs less and works the same."
      },
      {
        "question": "Will someone explain how to take my medication?",
        "answer": "Yes. When we hand it to you, we go over the dose, timing, how many days to take it and which effects are normal, in Spanish."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
