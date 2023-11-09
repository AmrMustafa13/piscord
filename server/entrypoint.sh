#! /bin/bash

chown -R node: node_modules
npx prisma generate
npx prisma migrate dev --name init
npm run startdev