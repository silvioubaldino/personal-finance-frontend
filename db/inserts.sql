INSERT INTO wallets (description)
VALUES ('Nubank');

INSERT INTO wallets (description)
VALUES ('Banco do Brasil');

INSERT INTO wallets (description)
VALUES ('Sodexo');

---------

INSERT INTO type_payments (description)
VALUES ('Pix');

INSERT INTO type_payments (description)
VALUES ('Débito');

INSERT INTO type_payments (description)
VALUES ('Crédito');

INSERT INTO type_payments (description)
VALUES ('Ticket');

---------

INSERT INTO categories (description)
VALUES ('Casa');

INSERT INTO categories (description)
VALUES ('Carro');

INSERT INTO categories (description)
VALUES ('Alimentação');

INSERT INTO categories (description)
VALUES ('Restaurante');

INSERT INTO categories (description)
VALUES ('Salário');

---------

INSERT INTO transaction_status (description)
VALUES ('Pago');

INSERT INTO transaction_status (description)
VALUES ('Estimado');

---------

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('242d9f4d-56d6-4a13-abf6-de165e65b9a5', 'Aluguel', -1200.0, '2022-08-10', null, 2, 1, 1, 2);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('9f5b46f6-0a89-41f4-8b3a-ad66bb6f81ad', 'Aluguel', -1200.0, '2022-08-09', '242d9f4d-56d6-4a13-abf6-de165e65b9a5', 2, 1, 1, 1);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('3300f20d-2480-499e-b450-a70545470f28', 'Gasolina', -400.0, '2022-08-30', null, 2, 2, 2, 2);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('3003387e-3aa9-4ad7-9616-b0f27db5b7f8', 'Gasolina', -156.0, '2022-08-03', '3300f20d-2480-499e-b450-a70545470f28', 2, 2, 2, 1);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('c42dc47e-b7da-4e47-8390-32402f6a56fc', 'Gasolina', -51.1, '2022-08-14', '3300f20d-2480-499e-b450-a70545470f28', 2, 2, 2, 1);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('77987e6e-d730-4223-af8f-89065eba73ad', 'Supermercado', -1576.0, '2022-08-30', null,  2, 3, 1, 2);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('0f4ded8e-ada5-44bc-b4df-ee30398b77a0', 'Salario', 5000.0, '2022-08-01', null, 1, 5, 1, 2);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('e6591349-d3c6-4b63-98c3-125e9d82d161', 'Salario', 5000.0, '2022-08-01', '0f4ded8e-ada5-44bc-b4df-ee30398b77a0', 1, 5, 1, 1);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('c5931e1c-27c2-462d-ae53-7d9ceb8bbd06', 'Faxineira', -160.0, '2022-08-30', null, 1, 1, 1, 2);

INSERT INTO transactions (id, description, amount, date, parent_transaction_id, type_payment_id, category_id, wallet_id, transaction_status_id)
VALUES ('8c4a0a05-37b2-46e6-9ab4-361434621f24', 'Pizza', -82.0, '2022-08-15', null, 2, 4, 1, 1);