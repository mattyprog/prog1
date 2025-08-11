#!/bin/bash

set -e

mkdir -p studio-booking-app/{backend/src/routes,backend/prisma,web/pages/studio,web/pages/owner,web/pages/admin,web/components,web/styles,mobile/components}

# .gitignore
cat > studio-booking-app/.gitignore <<EOF
node_modules/
.env
.env.*
/backend/prisma/dev.db
/backend/prisma/.env
/web/.next
/web/out
/mobile/.expo
EOF

# README.md
cat > studio-booking-app/README.md <<'EOF'
# Studio Booking App

MVP per la prenotazione di studi di registrazione.  
**Monorepo**: Express/Prisma backend, Next.js web, React Native mobile.

## Avvio rapido

### 1. Backend
```sh
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev