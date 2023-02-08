CREATE TABLE IF NOT EXISTS wallets
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    balance     float,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    user_id     varchar                  NOT NULL
);

CREATE TABLE IF NOT EXISTS categories
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    user_id     varchar                  NOT NULL
);

CREATE TABLE IF NOT EXISTS type_payments
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    user_id     varchar                  NOT NULL
);

CREATE TABLE IF NOT EXISTS transaction_status
(
    ID          int                      NOT NULL primary key generated always as identity,
    description varchar(255)             NOT NULL,
    date_create timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC')
);

CREATE TABLE IF NOT EXISTS transactions
(
    ID                    uuid                     NOT NULL primary key,
    description           varchar(255)             NOT NULL,
    amount                float                    NOT NULL,
    date                  date                     NOT NULL,
    parent_transaction_id uuid,
    wallet_id             int                      NOT NULL,
    type_payment_id       int                      NOT NULL,
    category_id           int                      NOT NULL,
    transaction_status_id int                      NOT NULL,
    date_create           timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    date_update           timestamp with time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    user_id               varchar                  NOT NULL,
    CONSTRAINT transaction_FK_parent_transaction
        FOREIGN KEY (parent_transaction_id)
            REFERENCES transactions (ID),
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
        FOREIGN KEY (transaction_status_id)
            REFERENCES transaction_status (ID)
);

INSERT INTO transaction_status (description)
VALUES ('Pago');

INSERT INTO transaction_status (description)
VALUES ('Estimado');