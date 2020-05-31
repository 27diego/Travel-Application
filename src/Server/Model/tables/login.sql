BEGIN TRANSACTION;

CREATE TABLE logins(
    id serial primary key,
    hash VARCHAR(100) NOT NULL,
    email text UNIQUE NOT NULL
);

COMMIT;