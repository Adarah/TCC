SET check_function_bodies = false;

INSERT INTO public.lab (id, name, description, location, created_at, updated_at) VALUES
(1, 'Lab1', 'Lab para testes de armas nucleares', 'Prédio da Elétrica, 13° andar', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00'),
(2, 'Lab2', NULL, 'Prédio da Mecânica, 1° andar', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00');

INSERT INTO public.lab_station (id, name, created_at, updated_at, lab_id) VALUES
(1, 'Bancada 1A', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1),
(2, 'Bancada 2B', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1),
(3, 'Estação X', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2),
(4, 'Estação Y', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2);

INSERT INTO public.smart_plug (id, name, chip_id, model, created_at, updated_at, lab_station_id, path) VALUES
(1, 'Tomada 1 - Teste', 'c88e35', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1, '1'),
(2, 'Tomada 2 - Placa FPGA', '83e98d', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1, '1'),
(3, 'Tomada 3 - Laser', 'dcdd0f', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2, '1'),
(4, 'Computador do professor', '1b5a2a', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 3, '2'),
(5, 'Microonadas dos funcionários', '449e8b', 'RM1', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 4, '2');

INSERT INTO public.user (id, name, email) VALUES
('fakeId', 'fake', 'fake@example.org'),
('fakeId2', 'fake2', 'fake2@example.org');

INSERT INTO public.lab_user_role (lab_id, user_id, role_id) VALUES
(1, 'fakeId', 1), -- owner of lab 1
(1, 'fakeId2', 3), -- editor of lab 1
(2, 'fakeId', 2), -- admin of lab 2
(2, 'fakeId2', 4); -- admin of lab 2