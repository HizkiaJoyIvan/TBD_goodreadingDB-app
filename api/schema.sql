SET client_encoding = 'UTF-8';


CREATE SEQUENCE book_id_seq
	INCREMENT BY 1
	START 200;



CREATE TABLE book (
	book_id integer DEFAULT nextval('book_id_seq'::regclass) NOT NULL,
	title character varying(30) NOT NULL,
	publisher_id integer NOT NULL,
	author_id integer NOT NULL,
	price numeric(18,0) NOT NULL,
	amount integer NOT NULL
);




CREATE SEQUENCE customer_id_seq
	INCREMENT BY 1
	START 1;




CREATE TABLE customer (
	customer_id integer DEFAULT nextval('customer_id_seq'::regclass) NOT NULL,
	fullname character varying(40) NOT NULL,
	email character varying(30) NOT NULL,
	pwd character varying(20) NOT NULL,
	address_id integer NOT NULL
);




CREATE SEQUENCE author_id_seq
	INCREMENT BY 1
	START 1;




CREATE TABLE author (
	author_id integer DEFAULT nextval('author_id_seq'::regclass) NOT NULL,
	fullname character varying(40) NOT NULL,
	age integer NOT NULL
);




CREATE SEQUENCE publisher_id_seq
	INCREMENT BY 1
	START 1;




CREATE TABLE publisher (
	publisher_id integer DEFAULT nextval('publisher_id_seq'::regclass) NOT NULL,
	publisher_name character varying(30) NOT NULL,
	year_founded integer NOT NULL,
	city_id integer NOT NULL,
	country_id integer NOT NULL
);




CREATE SEQUENCE address_id_seq
	INCREMENT BY 1
	START 1;




CREATE TABLE address_ (
	address_id integer DEFAULT nextval('address_id_seq'::regclass) NOT NULL UNIQUE,
	street character varying(30) NOT NULL,
	city_id integer NOT NULL,
	country_id integer NOT NULL
);




CREATE SEQUENCE city_id_seq
	INCREMENT BY 1
	START 1;




CREATE TABLE city (
	city_id integer DEFAULT nextval('city_id_seq'::regclass) NOT NULL,
	city_name character varying(30) NOT NULL
);




CREATE SEQUENCE country_id_seq
	INCREMENT BY 1
	START 100;




CREATE TABLE country (
	country_id integer DEFAULT nextval('country_id_seq'::regclass) NOT NULL,
	country_name character varying(30) NOT NULL
);




CREATE SEQUENCE transactions_id_seq
	INCREMENT BY 1
	START 100;




CREATE TABLE transactions (
	transactions_id integer DEFAULT nextval('transactions_id_seq'::regclass) NOT NULL,
	customer_id integer NOT NULL,
	book_id integer NOT NULL,
	count integer NOT NULL,
	transactions_date timestamp DEFAULT current_timestamp
);




ALTER TABLE ONLY book
	ADD CONSTRAINT book_pkey PRIMARY KEY (book_id);




ALTER TABLE ONLY customer
	ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);




ALTER TABLE ONLY author
	ADD CONSTRAINT author_pkey PRIMARY KEY (author_id);




ALTER TABLE ONLY publisher
	ADD CONSTRAINT publisher_pkey PRIMARY KEY (publisher_id);




ALTER TABLE ONLY country
	ADD CONSTRAINT country_pkey PRIMARY KEY (country_id);




ALTER TABLE ONLY city
	ADD CONSTRAINT city_pkey PRIMARY KEY (city_id);




ALTER TABLE ONLY transactions
	ADD CONSTRAINT transactions_pkey PRIMARY KEY (transactions_id);












ALTER TABLE ONLY customer
	ADD CONSTRAINT customer_address_id_fkey FOREIGN KEY (address_id) REFERENCES address_(address_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY address_
	ADD CONSTRAINT address_city_id_fkey FOREIGN KEY (city_id) REFERENCES city(city_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY address_
	ADD CONSTRAINT address_country_id_fkey FOREIGN KEY (country_id) REFERENCES country(country_id) ON UPDATE CASCADE ON DELETE RESTRICT;






ALTER TABLE ONLY book
	ADD CONSTRAINT book_author_id_fkey FOREIGN KEY (author_id) REFERENCES author(author_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY book
	ADD CONSTRAINT book_publisher_id_fkey FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY publisher
	ADD CONSTRAINT publisher_city_id_fkey FOREIGN KEY (city_id) REFERENCES city(city_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY publisher
	ADD CONSTRAINT publisher_country_id_fkey FOREIGN KEY (country_id) REFERENCES country(country_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY transactions
	ADD CONSTRAINT transactions_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT;




ALTER TABLE ONLY transactions
	ADD CONSTRAINT transactions_book_id_fkey FOREIGN KEY (book_id) REFERENCES book(book_id) ON UPDATE CASCADE ON DELETE RESTRICT;




INSERT INTO address_ (street, city_id, country_id) VALUES('Senopati Street No. 50', 1, 101);
INSERT INTO address_ (street, city_id, country_id) VALUES('Green Street No. 50', 2, 104);
INSERT INTO address_ (street, city_id, country_id) VALUES('Freedom Street No. 10', 3, 104);
INSERT INTO address_ (street, city_id, country_id) VALUES('Independence Street No. 50', 5, 105);
INSERT INTO address_ (street, city_id, country_id) VALUES('Castle Street No. 50', 4, 106);
INSERT INTO address_ (street, city_id, country_id) VALUES('Apple Street No. 50', 3, 105);
INSERT INTO address_ (street, city_id, country_id) VALUES('Avocado Street No. 80', 2, 106);
INSERT INTO address_ (street, city_id, country_id) VALUES('Hero Street No. 14', 1, 107);
INSERT INTO address_ (street, city_id, country_id) VALUES('Marvelous Street No. 12', 3, 101);
INSERT INTO address_ (street, city_id, country_id) VALUES('Sputnik Street No. 30', 4, 101);
INSERT INTO address_ (street, city_id, country_id) VALUES('Gurgaon Street No. 10', 5, 104);

INSERT INTO customer (fullname, email, pwd, address_id) VALUES('George Soros', 'georgesoros@gmail.com', 'sdfadsf4t', 1);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('James Charles', 'jamescharles@gmail.com', 'sdfadsf4t', 2);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Yusuke Murata', 'yusukemurata@gmail.com', 'sdfadsf4t', 3);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Hanzel Lee', 'HanzelLee@gmail.com', 'sdfadsf4t', 2);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Jackie Chan', 'JackieChan@gmail.com', 'sdfadsf4t', 3);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('James Kwok', 'JamesKwok@gmail.com', 'sdfadsf4t', 2);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Jessica Grace', 'JessicaGrace@gmail.com', 'sdfadsf4t', 6);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Popol', 'Popol@gmail.com', 'sdfadsf4t', 8);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Harambe', 'Harambe@gmail.com', 'sdfadsf4t', 6);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('Charles Prince', 'CharlesPrince@gmail.com', 'sdfadsf4t', 9);
INSERT INTO customer (fullname, email, pwd, address_id) VALUES('George Soros Jr', 'GeorgeSorosJr@gmail.com', 'sdfadsf4t', 5);
