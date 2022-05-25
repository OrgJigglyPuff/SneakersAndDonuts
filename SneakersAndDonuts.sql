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

INSERT INTO public.donuts VALUES ('Jelly Donut', 3.10, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Jelly-Donut.jpg/1280px-Jelly-Donut.jpg','Jelly Donuts are the best!');
INSERT INTO public.donuts VALUES ('Glazed Donut', 2.80, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1920px-Glazed-Donut.jpg','Glazed all the way!');
INSERT INTO public.donuts VALUES ('Boston Cream Donut', 3.20, 'https://upload.wikimedia.org/wikipedia/commons/7/70/DD-Boston-Cream-Donut.jpg','Boston Cream Donuts are the bomb!');
INSERT INTO public.donuts VALUES ('Cider Donut', 3.00, 'https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_cider_doughnuts.jpg','Donuts to die for!');
INSERT INTO public.donuts VALUES ('Sour Cream Donut', 2.70, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chocolate_sour_cream_doughnut.jpg/1024px-Chocolate_sour_cream_doughnut.jpg','Best sour cream donuts in the country!');
INSERT INTO public.donuts VALUES ('Orange & Pistachio Donut', 3.70, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Orange_%26_pistachio_old-fashioned_doughnut.jpg/800px-Orange_%26_pistachio_old-fashioned_doughnut.jpg','Not for the weakhearted');


INSERT INTO public.sneakers VALUES ('Adidas', 'Forum 84 Low', 'M/W', 100.00, 'https://cdn.shopify.com/s/files/1/0094/2252/products/AAGZ8961AdidasForum84LOWCreamWhiteVictoryGoldRed_15495_1080x.jpg?v=1629737504','Coolest shoe on the block');
INSERT INTO public.sneakers VALUES ('Nike', 'Air Trainer 1', 'M', 120.00, 'https://cdn.shopify.com/s/files/1/0094/2252/products/NKDM0521-100NikeAirTrainer1WhiteBlackMedGrey_16771_1080x.jpg?v=1652216768','Buy if you want to fly');
INSERT INTO public.sneakers VALUES ('Nike', 'Air More Uptempo 96', 'M/W', 160.00, 'https://cdn.shopify.com/s/files/1/0094/2252/products/NKDM1297-100NikeAirMoreUptempo96SailBlackSailTeamOrange_20777_1080x.jpg?v=1651670893','Buy if you REALLLY want to fly');
INSERT INTO public.sneakers VALUES ('Vans', 'U Og Epoch Lx', 'W', 75.00,'https://cdn.shopify.com/s/files/1/0094/2252/products/VN0A4U12B4W1VansUOGEpochLXDrizzleTrueWhite_19116_1080x.jpg?v=1649953310', 'For cool kids only' );
INSERT INTO public.sneakers VALUES ('Common Projects', 'Retro Low', 'M/W', 454.00,'https://cdn.shopify.com/s/files/1/0094/2252/products/CP2295-0536CommonProjectsRetroLowWhiteRed_1530_1080x.jpg?v=1614436636', 'Crazy kicks for crazy cool people' );
INSERT INTO public.sneakers VALUES ('Adidas', 'Forum 84 High Red Patent', 'M', 120.00,'https://cdn.shopify.com/s/files/1/0094/2252/products/AAGY6973AdidasForum84HiTmpwrdClowhiOwhite_16918_1080x.jpg?v=1649165030', 'Do not buy these if you are lame' );