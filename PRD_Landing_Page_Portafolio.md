# Documento de Requisitos de Producto (PRD)
## Proyecto: Landing Page Portafolio Profesional (GitHub Pages)

---

## 1. Información General del Proyecto
*   **Propietaria:** Karen
*   **Cargo/Rol:** Desarrolladora Full Stack Python Junior & Profesora de Lengua y Literatura
*   **Plataforma de Despliegue:** GitHub Pages (Entorno Estático)
*   **Tecnologías Clave:** HTML5, CSS3/Tailwind/Bootstrap, JavaScript, Python/Django (para referencias de código)
*   **Estado del Documento:** Listo para Implementación
*   **Fecha de Creación:** Julio 2026

---

## 2. Visión General del Producto
El objetivo es el diseño, desarrollo y despliegue de una **Landing Page de alto impacto** que actúe como portafolio digital y carta de presentación para Karen. 

El producto debe resolver un desafío de comunicación clave: **fusionar de forma armónica un perfil de alta competencia técnica en Python y Django con un valioso trasfondo profesional en educación (Lengua y Literatura)**. La landing page debe estar optimizada para convencer a reclutadores y líderes técnicos mediante un acceso fluido a muestras de código, habilidades demostrables y la descarga directa del Currículum Vitae.

---

## 3. Objetivos Estratégicos y de Conversión
1.  **Facilidad de Contratación (Conversión):** Minimizar los clics requeridos para que un reclutador descargue el CV o envíe un mensaje de contacto.
2.  **Diferenciación de Marca Personal:** Resaltar las habilidades blandas y de gestión transferidas desde el ámbito de la educación hacia la ingeniería de software.
3.  **Rendimiento Técnico:** Garantizar tiempos de carga óptimos, un diseño adaptativo (*Mobile-First*) y una accesibilidad impecable en GitHub Pages.

---

## 4. Arquitectura de Secciones y Contenido Detailed

### 4.1. Portada (Hero Section)
*   **Propósito:** Retención inmediata del visitante mediante una propuesta de valor clara y diferenciada.
*   **Elementos del Contenido:**
    *   **Nombre:** Karen
    *   **Cargo:** Desarrolladora Full Stack Python Junior
    *   **Propuesta de Valor:** *“Apasionada por crear aplicaciones web funcionales, limpias y con impacto. Especializada en la construcción de software con Python y Django, combinando rigor analítico con una estructura de código bien diseñada.”*
*   **Llamados a la Acción (CTAs):**
    *   Botón Principal: `[Ver Portafolio / Proyectos]` (Scroll suave hacia la sección).
    *   Botón Secundario: `[Contacto]` (Scroll suave hacia el formulario).

### 4.2. Sobre Mí & Habilidades
*   **Propósito:** Narrar la transición de carrera y validar científicamente el stack técnico y blando.
*   **Texto Principal:**
    > "¡Hola! Soy Karen, Desarrolladora Full Stack Python Junior y profesora de Lengua y Literatura. Completé mi formación en desarrollo de software con 100% de logro, obteniendo certificación en Django, desarrollo Front-End y bases de datos relacionales.
    > 
    > Mi formación técnica abarca Python, Django, HTML, CSS, JavaScript, bases de datos relacionales y el uso de herramientas de desarrollo asistido por IA como OpenCode, que utilizo para optimizar flujos de trabajo y fortalecer la calidad del software.
    > 
    > Tras mi experiencia en educación, desarrollé habilidades altamente transferibles al ámbito tecnológico, como el pensamiento analítico, la resolución de problemas, la planificación y gestión de proyectos, la comunicación efectiva, el trabajo colaborativo y el aprendizaje continuo.
    > 
    > Me entusiasma integrarme a un equipo de desarrollo donde pueda aportar soluciones de calidad, seguir perfeccionando mis habilidades y contribuir a la creación de aplicaciones útiles, accesibles y bien diseñadas. Disfruto escribir código limpio, aprender nuevas tecnologías y asumir desafíos que me permitan crecer profesionalmente.
    > 
    > Si buscas una desarrolladora comprometida, con ganas de aprender y aportar valor desde el primer día, ¡conversemos!"
*   **Desglose de Habilidades (Visualizado mediante etiquetas/badges):**
    *   **Técnicas (Hard Skills):** Python, Django, Django REST Framework, HTML5, CSS3, JavaScript, PostgreSQL, SQL, Git, Bootstrap, Herramientas IA (OpenCode).
    *   **Transferibles (Soft Skills):** Pensamiento Analítico, Planificación y Gestión de Proyectos, Resolución de Problemas, Comunicación Efectiva, Trabajo Colaborativo, Aprendizaje Continuo.

### 4.3. Proyectos / Portafolio (Fusión)
*   **Propósito:** Demostración empírica del código limpio y las habilidades de backend/frontend.
*   **Estructura de Tarjetas (Cards) de Proyecto:**
    *   Título del Proyecto.
    *   Descripción corta sobre el impacto o funcionalidad de la aplicación web.
    *   Tags de tecnología usada (Ej: `Python`, `Django`, `PostgreSQL`).
    *   Botón de Acción 1: `[Ver Código en GitHub]` (Enlace externo).
    *   Botón de Acción 2: `[Demo en Vivo]` (Si está disponible).

### 4.4. Sección de Currículum (CV)
*   **Propósito:** Proporcionar un canal ágil para revisiones de candidatos fuera de línea.
*   **Componente:** Bloque con diseño destacado o Banner Interactivo que contiene el texto *"¿Quieres revisar mi perfil completo?"* junto a un botón prominente: **`[Descargar CV en PDF]`**.
*   **Requisito de Archivo:** El botón debe apuntar al asset local `assets/docs/CV_Karen_Developer.pdf` configurado para abrirse en una pestaña nueva o descargarse automáticamente.

### 4.5. Contacto y Redes Sociales
*   **Propósito:** Cierre del embudo de reclutamiento mediante canales directos.
*   **Formulario Integrado:**
    *   Campo obligatorio: `Nombre`
    *   Campo obligatorio: `Correo electrónico`
    *   Campo obligatorio: `Mensaje`
*   **Enlaces de Acceso Directo (Iconografía limpia):**
    *   Enlace a perfil profesional de **LinkedIn**.
    *   Enlace a cuenta de **GitHub**.
    *   Enlace directo de correo mediante etiqueta `mailto:`.

---

## 5. Requisitos Técnicos y No Funcionales
*   **Estructura del Proyecto Recomendada:**
    ```text
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── assets/
    │   ├── images/ (Logos, imágenes de proyectos)
    │   └── docs/
    │       └── CV_Karen_Developer.pdf
    └── js/
        └── main.js
    ```
*   **Manejo de Formularios Estáticos:** Dado que GitHub Pages no soporta lógica de backend (servidor), el formulario del cliente debe procesarse mediante servicios externos como **Formspree**, **Netlify Forms**, o **FormSubmit** (configurando el atributo `action` en el tag `<form>`).
*   **Diseño Visual Sugerido:** Estilo minimalista, tipografía limpia (Sans-serif), uso estratégico de un color de acento llamativo (ej. Amarillo/Ocre cálido) para resaltar elementos clave sobre fondos oscuros o blancos puros.
