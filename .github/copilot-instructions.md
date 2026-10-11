# aicommerce Workspace Notes

- The Vite + React TypeScript storefront lives in `frontend/`.
- The Express + TypeScript API lives in `backend/`.
- Keep product data and per-product color selection in `frontend/src/App.tsx`.
- Keep responsive layout and visual styling in `frontend/src/styles.css`.
- Use Prettier for formatting; keep CSS declarations on separate lines inside rule blocks.
- Product swatches must remain keyboard accessible and expose their selected state.
- Install dependencies with `npm install`, run the storefront with `npm run dev`, and run the API with `npm run backend:dev`.
- Check types with `npm run typecheck` and verify production output with `npm run build`.

## Setup Status

- [x] Requirements clarified: responsive React page, aicommerce header, product cards, selectable color swatches.
- [x] Vite-compatible project structure created in `frontend/`.
- [x] TypeScript API created in `backend/` with a welcome route.
- [x] Storefront implemented with four products and independent color selection.
- [x] No additional VS Code extensions required.
- [x] Strict TypeScript configuration and React type packages added.
- [x] README added with install and run instructions.
- [x] Production build and API route verified.
