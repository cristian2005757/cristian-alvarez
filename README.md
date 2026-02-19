# Portafolio - Cristian Alvarez

Portafolio personal de **Cristian David Alvarez Torres**, desarrollador fullstack junior con enfoque en React, Laravel, PostgreSQL y marketing digital.

**[Ver en vivo →](https://cristian-alvarez-byjs.vercel.app)**

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 18 + Tailwind CSS
- **Deploy:** Vercel

## Estructura del proyecto

```
src/
├── app/           # Layout, página principal y estilos globales
├── components/    # Componentes reutilizables
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProfileImage.jsx
│   ├── Section.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Toolbox.jsx
│   ├── MarketingProduct.jsx
│   ├── Contact.jsx
│   └── ImageWithFallback.jsx
├── data/          # Datos del portafolio (editable)
│   ├── site.js       # Datos personales, contacto, enlaces
│   ├── experience.js # Experiencia laboral
│   ├── projects.js   # Proyectos publicados
│   └── skills.js    # Tecnologías y herramientas
└── lib/           # Utilidades

public/
├── images/        # Imágenes del proyecto (profile, projects)
├── experience/    # Imágenes de experiencia laboral
└── cv/           # CV en PDF
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Build

```bash
# Build de producción
npm run build

# Ejecutar build localmente
npm start
```

## Personalización

Para adaptar el portafolio a otro perfil, edita los archivos en `src/data/`:

| Archivo       | Contenido                                   |
|---------------|---------------------------------------------|
| `site.js`     | Nombre, rol, email, teléfono, redes, CV     |
| `experience.js` | Trabajos, fechas, descripción, imágenes  |
| `projects.js` | Proyectos, repos, demos, stack              |
| `skills.js`   | Categorías y tecnologías                    |

## Assets

- **Foto de perfil:** `public/images/profile.jpeg` (minúsculas para compatibilidad con Vercel/Linux)
- **Imágenes de experiencia:** `public/experience/`
- **Imágenes de proyectos:** `public/images/projects/`
- **CV:** `public/cv/`

## Licencia

Proyecto privado. Contenido © Cristian Alvarez.
