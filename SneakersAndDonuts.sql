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
    "type" varchar UNIQUE,
    "price" money NOT NULL,
    "image_link" varchar,
    "description" varchar
) WITH (
  OIDS = FALSE
);

CREATE TABLE public.sneakers(
  "brand" varchar NOT NULL,
  "type" varchar NOT NULL UNIQUE,
  "gender" varchar,
  "price" money NOT NULL,
  "image_link" varchar,
  "description" varchar
) WITH (
  OIDS = FALSE
);

CREATE TABLE public.orders(
  "order_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  "total_cost" money NOT NULL,
  "total_quantity" bigint NOT NULL,
  "number_of_items" bigint,
  "date" date,
  CONSTRAINT "orders_pk" PRIMARY KEY ("order_id")
) WITH (
  OIDS = FALSE
);

ALTER TABLE public.orders ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

INSERT INTO public.donuts VALUES ('Jelly Donut', 3.10, 'https://en.wikipedia.org/wiki/Jelly_doughnut#/media/File:Jelly-Donut.jpg','Jelly Donuts are the best!');
INSERT INTO public.donuts VALUES ('Glazed Donut', 2.80, 'https://en.wikipedia.org/wiki/Doughnut#/media/File:Glazed-Donut.jpg','Glazed all the way!');
INSERT INTO public.donuts VALUES ('Boston Cream Donut', 3.20, 'https://en.wikipedia.org/wiki/Boston_cream_doughnut#/media/File:DD-Boston-Cream-Donut.jpg','Boston Cream Donuts are spectacular!');

INSERT INTO public.sneakers VALUES ('Adidas', 'Forum 84 Low', 'M/W', 100.00, 'https://cdn.shopify.com/s/files/1/0094/2252/products/AAGZ8961AdidasForum84LOWCreamWhiteVictoryGoldRed_15495_1080x.jpg?v=1629737504','Coolest shoe on the block!');
INSERT INTO public.sneakers VALUES ('Nike', 'Air Trainer 1', 'M/W', 120.00, 'https://cdn.shopify.com/s/files/1/0094/2252/products/NKDM0521-100NikeAirTrainer1WhiteBlackMedGrey_16771_1080x.jpg?v=1652216768','Buy if you want to fly!');
INSERT INTO public.sneakers VALUES ('Nike', 'Air Jordan 1 Retro High OG Chicago', 'M/W', 2435.00, 'https://cdn-images.farfetch-contents.com/13/15/76/97/13157697_21516295_1000.jpg','Buy if you REALLLY want to fly!');
