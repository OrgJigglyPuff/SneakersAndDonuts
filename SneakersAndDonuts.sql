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
  "cart_id" varchar,
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
  "number_of_items" bigint NOT NULL,
  "date" date,
  CONSTRAINT "orders_pk" PRIMARY KEY ("order_id")
) WITH (
  OIDS = FALSE
);

ALTER TABLE public.orders ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

INSERT INTO public.donuts VALUES ('Chocolate Sprinkles', 3.10, 'http://cs.sixtrillion.com/jigglypuff/sprinkles-chocolate.jpg','A classic');
INSERT INTO public.donuts VALUES ('Jiggylpuf Sprinkles', 2.80, 'http://cs.sixtrillion.com/jigglypuff/sprinkles-pink.jpg','Jigglypuff?');
INSERT INTO public.donuts VALUES ('White Sprinkles', 3.20, 'http://cs.sixtrillion.com/jigglypuff/sprinkles-white.jpg','Try if you dare');
INSERT INTO public.donuts VALUES ('Squirtle Donut', 3.00, 'http://cs.sixtrillion.com/jigglypuff/blue.jpg','Donuts to die for');
INSERT INTO public.donuts VALUES ('Charizard Donut', 2.70, 'http://cs.sixtrillion.com/jigglypuff/orange.jpg','Bomb donuts. Enough said');
INSERT INTO public.donuts VALUES ('Jigglypuff', 3.70, 'http://cs.sixtrillion.com/jigglypuff/pink.jpg','Not for the weakhearted');


INSERT INTO public.sneakers VALUES ('Adidas', 'Yeezy Boost 350', 'M/W', 100.00, 'http://cs.sixtrillion.com/jigglypuff/yeezy-boost-350.jpg','Coolest shoe on the block');
INSERT INTO public.sneakers VALUES ('Nike', 'Dunk Low SE Candy', 'M', 120.00, 'http://cs.sixtrillion.com/jigglypuff/dunk-low-se-candy.jpg','Buy if you want to fly');
INSERT INTO public.sneakers VALUES ('Nike', 'Jordan 4 Retro Red Thunder', 'M', 160.00, 'http://cs.sixtrillion.com/jigglypuff/jordan-4-retro-red-thunder.jpg','Buy if you REALLLY want to fly');
INSERT INTO public.sneakers VALUES ('Nike', 'White Blazer Low Red', 'W', 75.00,'http://cs.sixtrillion.com/jigglypuff/off-white-blazer-low-red.jpg', 'For cool kids only' );
INSERT INTO public.sneakers VALUES ('Nike', 'Jordan 4 Retro Military BLack', 'M/W', 454.00,'http://cs.sixtrillion.com/jigglypuff/jordan-4-retro-military-black.jpg', 'Crazy kicks for crazy cool people' );
INSERT INTO public.sneakers VALUES ('Nike', 'Dunk High Pink Prime', 'M', 120.00,'http://cs.sixtrillion.com/jigglypuff/dunk-high-pink-prime.jpg', 'Do not buy these if you are lame' );