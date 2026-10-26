# Pádel Club — banco de pruebas de FDD

> **Esto no es una app de turnos.** Es un proyecto de prueba para validar **FDD (Functionality Driven Development)**, una metodología para construir software con IA de a una funcionalidad chica por vez.

El dominio (un portal de reservas de canchas de pádel para un club de barrio) es una excusa: es lo bastante simple para arrancar rápido y lo bastante rico para generar historias verticales, supuestos y decisiones caras de revertir. Eso es lo que se quiere probar.

## Qué es FDD

FDD es un schema custom de [OpenSpec](https://github.com/Fission-AI/OpenSpec) inspirado en [hola-ai](https://github.com/nschurmann/hola-ai). En lugar de escribir una spec grande por adelantado, cada funcionalidad:

1. Parte de **una historia de usuario de una línea**.
2. Se define con **2 o 3 escenarios** (Given/When/Then). Si necesita más, se parte.
3. Tiene un **plan de hasta 5 bullets**.
4. Tiene una **lista de tests aprobada**, que funciona como contrato.
5. Se implementa en **pair programming**: la IA escribe un test, lo muestra en rojo, escribe el código mínimo, lo muestra en verde y se frena a esperar el OK.
6. Se **cierra** con refactor, validación de supuestos con el usuario y Definition of Done. Sin cierre, OpenSpec no la deja archivar.

Al archivar, los escenarios se integran en `openspec/specs/`: la spec viva crece con lo que realmente se entregó.

## Qué se está evaluando

- ¿La IA respeta los límites (escenarios, tamaño de cada paso, nada no pedido)?
- ¿Pregunta en lugar de inventar? ¿Registra los supuestos?
- ¿El cierre aporta o es burocracia?
- ¿Los deltas `MODIFIED` sobre capabilities existentes se integran sin perder contenido?

Las observaciones se registran en [`notas-fdd.md`](./notas-fdd.md).

## Stack

TypeScript · React · Vite · Vitest + Testing Library · OpenSpec (schema `fdd`)

## Estructura

```
.
├── backlog.md                  # historias de una línea, ordenadas por prioridad
├── notas-fdd.md                # observaciones sobre la metodología
├── openspec/
│   ├── config.yaml             # contexto del proyecto, reglas, DoD
│   ├── schemas/fdd/            # el schema FDD + templates
│   ├── specs/                  # spec viva (solo la escribe el archive)
│   └── changes/                # funcionalidad en curso
│       └── archive/            # funcionalidades cerradas, con fecha
└── src/
```

## Comandos de la app

```bash
npm install         # instalar dependencias
npm run dev         # levantar la app en modo desarrollo
npx vitest run      # correr los tests una vez
npx vitest          # tests en modo watch
npm run build       # build de producción
```

## Comandos de FDD

### Ciclo de una funcionalidad (en Claude Code)

| Paso | Comando | Qué hace | Vos aprobás |
|---|---|---|---|
| 1 | `/opsx:new <nombre>` | Crea el change con el schema `fdd` | — |
| 2 | `/opsx:continue` | Genera `story.md` (historia, capabilities, supuestos) | la historia |
| 3 | `/opsx:continue` | Genera los delta specs (2–3 escenarios) | los criterios |
| 4 | `/opsx:continue` | Genera `plan.md` (≤5 bullets) | el plan |
| 5 | `/opsx:continue` | Genera `tests.md` (lista de tests + cierre) | el contrato |
| 6 | `/opsx:apply` | Pair programming, un test por paso | cada paso rojo/verde |
| 7 | `/opsx:archive` | Integra los escenarios en la spec viva y archiva | el cierre |

Durante `/opsx:apply`, la IA se frena después de cada test. Respondé "seguí", "hacé 3" o pedí cambios. **La IA nunca commitea**: los commits los hacés vos, separando funcionalidad y refactor.

### CLI de OpenSpec

```bash
openspec list                          # changes en curso
openspec list --specs                  # capabilities de la spec viva
openspec status --change <nombre>      # progreso de los artefactos
openspec show <spec-id> --type spec    # ver una spec
openspec validate <nombre> --strict    # validar un change
openspec schema validate fdd           # validar el schema
```

### Elegir la próxima funcionalidad

La próxima historia es la primera de "Próximas" en [`backlog.md`](./backlog.md). Las historias nuevas (por partir una grande o por un supuesto que resultó equivocado) se agregan ahí con tu aprobación, y al archivar se mueven a "Hechas".

## Setup desde cero

```bash
npm install -g @fission-ai/openspec@latest
openspec init --tools claude
mkdir -p openspec/schemas
cp -r <ruta>/fdd-schema/schemas/fdd openspec/schemas/
openspec schema validate fdd
openspec config profile     # habilitar new, continue, apply, archive
openspec update
```

Y en `openspec/config.yaml`: `schema: fdd`.

## Créditos

- [hola-ai](https://github.com/nschurmann/hola-ai), de Hola Mundo: el flujo backlog → story → pair.
- [OpenSpec](https://github.com/Fission-AI/OpenSpec), de Fission AI: delta specs, archive y schemas custom.