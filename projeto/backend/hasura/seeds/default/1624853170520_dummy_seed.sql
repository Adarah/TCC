SET check_function_bodies = false;

INSERT INTO public.lab (id, name, description, location, created_at, updated_at) VALUES
(1, 'Lab1', 'Lab para testes de armas nucleares', 'Prédio da Elétrica, 13° andar', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00'),
(2, 'Lab2', NULL, 'Prédio da Mecânica, 1° andar', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00');

INSERT INTO public.lab_station (id, name, created_at, updated_at, lab_id) VALUES
(1, 'Bancada A1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1),
(2, 'Bancada A2', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1),
(3, 'Estação B1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2),
(4, 'Estação B2', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2);

INSERT INTO public.smart_plug (id, name, chip_id, model, created_at, updated_at, lab_station_id, path) VALUES
(1, 'Tomada 1 - Teste', 'c88e35', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1, '1'),
(2, 'Tomada 2 - Placa FPGA', '83e98d', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1, '1'),
(3, 'Tomada 3 - Laser', 'dcdd0f', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2, '1'),
(4, 'Computador do professor', '1b5a2a', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 3, '2'),
(5, 'Microonadas dos funcionários', '449e8b', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 4, '2');

INSERT INTO public.user (id, name, email) VALUES
('fakeId', 'foo', 'foo@usp.br'),
('fakeId2', 'bar', 'bar@usp.br');

INSERT INTO public.lab_user_role (lab_id, user_id, role_id) VALUES
(1, 'fakeId', 1), -- owner of lab 1
(1, 'fakeId2', 3), -- editor of lab 1
(2, 'fakeId', 2), -- admin of lab 2
(2, 'fakeId2', 4); -- admin of lab 2

INSERT INTO public.student_group(lab_id, broker_login, display_name) VALUES
(1, 'grupo1-bancadaA1', 'g1-a1'),
(1, 'grupo1-bancadaA2', 'g1-a2'),
(2, 'grupo1-bancadaB1', 'g1-b1'),
(2, 'grupo1-bancadaB2', 'g1-b2');
