SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.users (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  "email" varchar NOT NULL UNIQUE,
  "address1" varchar,
  "address2" varchar,
  "city" varchar,
  "state" varchar,
  "zip" varchar,
  "shoppingCartId" bigint,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.donuts(
    "type" varchar,
    "price" money NOT NULL,
    "image_link" varchar,
    "description" varchar
) WITH (
  OIDS = FALSE
);

CREATE TABLE public.sneakers(
  "brand" varchar NOT NULL,
  "type" varchar NOT NULL,
  "gender" varchar,
  "price" float NOT NULL,
  "image_link" varchar,
  "description" varchar
) WITH (
  OIDS = FALSE
);

CREATE TABLE public.orders(
  "order_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  "total_cost" float NOT NULL,
  "total_quantity" bigint NOT NULL,
  "number_of_items" bigint,
  "date" date,
  CONSTRAINT "orders_pk" PRIMARY KEY ("order_id")
) WITH (
  OIDS = FALSE
);

ALTER TABLE public.orders ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

INSERT INTO public.donuts VALUES ('Jelly', 3.10, 'https://en.wikipedia.org/wiki/Jelly_doughnut#/media/File:Jelly-Donut.jpg','Jelly Donuts are the best!');
