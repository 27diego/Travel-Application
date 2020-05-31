BEGIN TRANSACTION;

CREATE TABLE searches(
    id serial primary key,
    user serial foreign key,
    search varchar(100)
);

COMMIT;