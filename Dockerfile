FROM node:18
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apt-get update && apt-get install python3.10 -y

######################### Start VM #########################
COPY VM/config /VM/config
COPY VM/src /VM/src
COPY VM/.babelrc /VM/.babelrc
COPY VM/package.json /VM/package.json
COPY VM/webpack.config.js /VM/webpack.config.js
COPY VM/yarn.lock /VM/yarn.lock
COPY VM/LICENSE /VM/LICENSE
COPY VM/.env /VM/.env

WORKDIR /VM
RUN yarn && yarn install && yarn run build

######################### End VM #########################

######################### Start calimero-portal #########################
COPY calimero-portal/public /calimero-portal/public
COPY calimero-portal/src /calimero-portal/src
COPY calimero-portal/types /calimero-portal/types
COPY calimero-portal/.eslintrc.json /calimero-portal/.eslintrc.json
COPY calimero-portal/.nvmrc /calimero-portal/.nvmrc
COPY calimero-portal/.prettierrc /calimero-portal/.prettierrc
COPY calimero-portal/LICENSE /calimero-portal/LICENSE
COPY calimero-portal/next.config.js /calimero-portal/next.config.js
COPY calimero-portal/package.json /calimero-portal/package.json
COPY calimero-portal/pnpm-lock.yaml /calimero-portal/pnpm-lock.yaml
COPY calimero-portal/sentry.client.config.ts /calimero-portal/sentry.client.config.ts
COPY calimero-portal/sentry.edge.config.ts /calimero-portal/sentry.edge.config.ts
COPY calimero-portal/sentry.server.config.ts /calimero-portal/sentry.server.config.ts
COPY calimero-portal/tsconfig.json /calimero-portal/tsconfig.json

# .env is generated during CI/CD pipeline
COPY calimero-portal/.env /calimero-portal/.env

WORKDIR /calimero-portal

RUN pnpm remove near-social-vm && pnpm add file:../VM

COPY VM/.env /calimero-portal/.env.production
COPY VM/entrypoint.sh /calimero-portal/entrypoint.sh

RUN pnpm i && pnpm build

EXPOSE 3000
ENV PORT 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node_modules/.bin/next", "start"]
######################### End calimero-portal #########################
