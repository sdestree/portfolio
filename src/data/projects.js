export const projects = [
  {
    id: 1,
    title: "Software de gestión integral para complejo de cabañas",
    year: "2025",
    description:
      "Diseño y desarrollo completo de un sistema de gestión integral para un complejo de cabañas, orientado a centralizar y automatizar las operaciones administrativas y operativas del negocio. Permite gestionar de forma eficiente reservas, disponibilidad, clientes, pagos y control interno, reemplazando procesos manuales por una solución digital robusta y escalable.",
    featuresTitle: "Aspectos técnicos destacados: ",
    features: [
      "Backend robusto en C# / .NET, con arquitectura modular",
      "Interfaz dinámica y responsive en React",
      "Base de datos SQL Server",
      "Sistema de autenticación y seguridad, con manejo de roles y permisos según el tipo de usuario",
      "Panel de administración con gráficos y reportes"
    ],
    stack: ["C#", ".NET", "React", "SQL Server"],
    demoVideo: "/videos/demo-cabañas.mp4",
    github: "https://github.com/sdestree/CABANAS9-9"
  },
  {
    id: 2,
    title: "Sistema de asignación automática de aulas universitarias",
    year: "COLABORATIVO - 2025",
    description:
      "Participación en el desarrollo de un sistema que asigna automáticamente aulas a comisiones teniendo en cuenta capacidad, equipamiento y requerimientos específicos (proyector, laboratorio, etc.), a partir de datos cargados manualmente de carreras, comisiones y aulas. Incluye una vista de estudiante, donde cada alumno puede consultar el aula asignada para la cursada del día.",
    featuresTitle: "Rol y responsabilidades: ",
    features: [
      "Diseño del flujo de la aplicación y de la experiencia de usuario (UX)",
      "Definición de pantallas, navegación y casos de uso",
      "Testing funcional periódico, validando reglas de asignación y flujos críticos",
      "Colaboración con el equipo técnico durante el desarrollo"
    ],
    stack: ["Next.js", "Typescript", "MongoDB", "Firebase"],
    demoVideo: "/videos/demo-aulas.mp4",
    github: "https://github.com/ramoswilly/AulasUsal"
  }
];
