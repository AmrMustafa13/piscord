#! /bin/bash

chown -R node: node_modules
npx prisma db push
npm run startdev