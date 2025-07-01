DROP TABLE IF EXISTS user_type;

CREATE TABLE IF NOT EXISTS user_type (
	id SERIAL PRIMARY KEY,
	type VARCHAR(20),
	display_name VARCHAR(20)
);

DROP TABLE IF EXISTS AD_user;

CREATE TABLE IF NOT EXISTS AD_user (
	id SERIAL PRIMARY KEY,
	type_id INTEGER REFERENCES user_type(id),
	enabled BOOLEAN,
	display_name VARCHAR(20),
	last_logon_time DATE,
	created_date DATE,
	smart_card_logon_required BOOLEAN,
	password_not_required BOOLEAN
	--FOREIGN KEY (type_id) REFERENCES user_type(id)
);

DROP TABLE IF EXISTS witcher_users;

CREATE TABLE IF NOT EXISTS witcher_users (
	id SERIAL PRIMARY KEY,
	display_name VARCHAR(20),
	username VARCHAR(20),
	password VARCHAR(100)
);

SELECT
 * 
FROM witcher_users;