CFMS Full Repo (v2)
===================

This repo contains a backend Express server and a React client scaffold in `/client`.
Build process (Render recommended):
- Build frontend: `cd client && yarn && yarn build`
- Copy build output to backend public: `cp -r client/build/* public/`
- Start server: `yarn start` (from repo root)

Environment variables: see .env.example
