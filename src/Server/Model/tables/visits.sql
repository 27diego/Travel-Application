BEGIN TRANSACTION;

CREATE TABLE vacations(
    id serial primary key,
    place VARCHAR(100),
    date TIMESTAMP NOT NULL
);

COMMIT;