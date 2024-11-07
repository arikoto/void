FROM oven/bun

WORKDIR /usr/src/app

COPY app/website .

ENV ADDRESS=0.0.0.0 PORT=80

USER bun

EXPOSE 80/tcp
ENTRYPOINT [ "bun", "." ]
