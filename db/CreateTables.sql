CREATE TABLE IF NOT EXISTS wallets
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    balance     float,
    user_id     varchar                  NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC')

);

CREATE TABLE IF NOT EXISTS categories
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    user_id     varchar                  NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);

CREATE TABLE IF NOT EXISTS type_payments
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    user_id     varchar                  NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);

CREATE TABLE IF NOT EXISTS movement_status
(
    ID          int                      NOT NULL primary key,
    description varchar(255)             NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);

CREATE TABLE IF NOT EXISTS movements
(
    ID              uuid                     NOT NULL primary key,
    description     varchar(255)             NOT NULL,
    amount          float                    NOT NULL,
    date            date                     NOT NULL,
    transaction_id  uuid,
    user_id         varchar                  NOT NULL,
    status_id       int                      NOT NULL,
    wallet_id       int                      NOT NULL,
    type_payment_id int                      NOT NULL,
    category_id     int                      NOT NULL,
    date_create     timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update     timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    CONSTRAINT transaction_FK_parent_transaction
        FOREIGN KEY (transaction_id)
            REFERENCES movements (ID),
    CONSTRAINT transaction_FK_wallet
        FOREIGN KEY (wallet_id)
            REFERENCES wallets (ID),
    CONSTRAINT transaction_FK_type_payment
        FOREIGN KEY (type_payment_id)
            REFERENCES type_payments (ID),
    CONSTRAINT transaction_FK_category
        FOREIGN KEY (category_id)
            REFERENCES categories (ID),
    CONSTRAINT transaction_FK_transaction_status
        FOREIGN KEY (status_id)
            REFERENCES movement_status (ID)
);

INSERT INTO movement_status (id, description)
VALUES (1, 'Done');

INSERT INTO movement_status (id, description)
VALUES (2, 'Estimate');