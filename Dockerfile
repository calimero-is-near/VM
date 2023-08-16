FROM node:18
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apt-get update && apt-get install python3.10 -y

RUN ls -al
RUN ls -al ..

COPY ./config /VM/src
COPY ./.babelrc /VM/.babelrc
COPY ./package.json /VM/package.json
COPY ./webpack.config.js /VM/webpack.config.js
COPY ./yarn.lock /VM/yarn.lock
WORKDIR /VM

RUN yarn && yarn install && yarn run build

COPY ../near-discovery/public /near-discovery/public
COPY ../near-discovery/src /near-discovery/src
COPY ../near-discovery/types /near-discovery/types
COPY ../near-discovery/.eslintrc.json /near-discovery/.eslintrc.json
COPY ../near-discovery/.nvmrc /near-discovery/.nvmrc
COPY ../near-discovery/.prettierrc /near-discovery/.prettierrc
COPY ../near-discovery/next.config.js /near-discovery/next.config.js
COPY ../near-discovery/package.json /near-discovery/package.json
COPY ../near-discovery/pnpm-lock.yaml /near-discovery/pnpm-lock.yaml
COPY ../near-discovery/sentry.client.config.ts /near-discovery/sentry.client.config.ts
COPY ../near-discovery/sentry.edge.config.ts /near-discovery/sentry.edge.config.ts
COPY ../near-discovery/sentry.server.config.ts /near-discovery/sentry.server.config.ts
COPY ../near-discovery/tsconfig.json /near-discovery/tsconfig.json

COPY .env.production /near-discovery/.env.production
COPY entrypoint.sh /near-discovery/entrypoint.sh
WORKDIR /near-discovery

RUN pnpm remove near-social-vm && pnpm add file:../VM && pnpm i && pnpm build

RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000
ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
