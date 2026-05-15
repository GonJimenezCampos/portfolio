export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutData {
  paragraphs: string[];
  highlights: AboutHighlight[];
}

export const about: AboutData = {
  paragraphs: [
    "Soy Gonzalo Jiménez, Backend Developer en Codearts Solutions. Trabajo principalmente con Symfony, Angular y React Native en proyectos para los sectores de ocio y hostelería, y desde hace un tiempo ejerzo como referente técnico en equipos pequeños, lo que me ha llevado a combinar el desarrollo con la coordinación y el contacto directo con cliente.",
    "Llegué al desarrollo buscando una disciplina sobre la que crecer profesionalmente y que combinara dos cosas que me atraían: la tecnología y la resolución de problemas lógicos. Elegí un grado superior porque quería una formación práctica y aterrizar pronto en el mundo laboral para aprender mientras trabajaba. No descarto cursar una ingeniería más adelante, pero por ahora estoy aprovechando esta etapa de aprendizaje real.",
    "Lo que más me engancha de programar es el momento en el que un cliente plantea un problema o una necesidad y toca decidir cuál es la mejor forma de resolverlo con los recursos disponibles. Me entusiasman especialmente los proyectos complejos en los que no solo hay que desarrollar, sino también pensar cómo encajar la solución dentro de las restricciones y los criterios que nos piden.",
    "Mi enfoque es bastante pragmático: creo en las buenas prácticas y en escribir tests, pero priorizo lo funcional. Prefiero algo imperfecto que resuelve el problema y que puedo pulir después, antes que algo teóricamente impecable que no aporta valor real al cliente.",
    "Sobre lo que viene: no tengo un plan rígido. Mi objetivo es desarrollar los conocimientos y capacidades que me den libertad para elegir lo que quiera hacer en cada momento. Mientras tanto, seguir aprendiendo y trabajando en proyectos que me obliguen a salir de mi zona de confort.",
  ],
  highlights: [
    { label: "Rol actual", value: "Backend Developer" },
    { label: "Empresa", value: "Codearts Solutions" },
    { label: "Ubicación", value: "Sevilla, España" },
    { label: "Experiencia", value: "2 años" },
  ],
};
