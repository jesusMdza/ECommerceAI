# aicommerce Workspace Notes

- This is a Vite + React TypeScript storefront.
- Keep product data and per-product color selection in `src/App.tsx`.
- Keep responsive layout and visual styling in `src/styles.css`.
- Use Prettier for formatting; keep CSS declarations on separate lines inside rule blocks.
- Product swatches must remain keyboard accessible and expose their selected state.
- Install dependencies with `npm install`, run the development server with `npm run dev`, check formatting with `npm run format:check`, check types with `npm run typecheck`, and verify production output with `npm run build`.
- Node.js and npm were unavailable when this workspace was created, so build and browser verification remain to be done after installing Node.js.

## Setup Status

- [x] Requirements clarified: responsive React page, aicommerce header, product cards, selectable color swatches.
- [x] Vite-compatible project structure created in the workspace root.
- [x] Storefront implemented with four products and independent color selection.
- [x] No additional VS Code extensions required.
- [x] Strict TypeScript configuration and React type packages added.
- [x] README added with install and run instructions.
- [ ] Production build and local launch pending Node.js/npm availability.
