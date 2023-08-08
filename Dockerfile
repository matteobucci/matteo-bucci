FROM node:18 as build

RUN npm install -g gatsby-cli

WORKDIR /app
ADD . ./
RUN npm install
RUN gatsby build


FROM alpine:edge

COPY nginx-boot.sh /sbin/nginx-boot
RUN chmod +x /sbin/nginx-boot

RUN apk --update add nginx bash && \
    rm -fR /var/cache/apk/*

COPY --from=build /app/public /pub

EXPOSE 80

CMD [ "/sbin/nginx-boot" ]


