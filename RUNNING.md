

<!-- local-development:start -->
# Desarrollo local

Puedes abrir este repositorio en VS Code, Antigravity o Sublime Text. El compilador y los servicios necesarios dependen del componente indicado abajo.

## Archivos ignorados

`.gitignore` excluye credenciales locales, estado del editor y salidas de las herramientas detectadas. No deja de versionar archivos que ya estaban en Git. Los manifiestos, archivos de bloqueo, recursos fuente y scripts de esquema forman parte del código.
<!-- local-development:end -->


<!-- improvements-20261120:start -->
## Mejoras y verificación — 2026-11-20 (Simulador Android Studio WebView / Build-WebPage y catálogo de prácticas)

- **Cambios:** Añadido entorno interactivo `web-demo/index.html` con conmutador móvil/escritorio, tema claro/oscuro, simulador de eventos `@JavascriptInterface` persistentes en `localStorage` y catálogo estructurado de los 10 archivos `.rar`/`.zip` del repositorio.
- **Validación:** Node 24 `node --test web-demo/tests/demo.test.mjs` (sintaxis JS y catálogo verificados).
<!-- improvements-20261120:end -->
