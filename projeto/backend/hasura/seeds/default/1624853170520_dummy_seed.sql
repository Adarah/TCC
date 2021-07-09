SET check_function_bodies = false;
INSERT INTO public.lab (id, name, description, location, created_at, updated_at) VALUES (1, 'Lab1', 'Lab para testes de armas nucleares', 'Prédio da Elétrica, 13° andar', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00');
INSERT INTO public.lab (id, name, description, location, created_at, updated_at) VALUES (2, 'Lab2', NULL, 'Prédio da Mecânica, 1° andar', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00');
INSERT INTO public.lab_station (id, name, created_at, updated_at, lab_id) VALUES (1, 'Bancada 1A', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1);
INSERT INTO public.lab_station (id, name, created_at, updated_at, lab_id) VALUES (2, 'Bancada 2B', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1);
INSERT INTO public.lab_station (id, name, created_at, updated_at, lab_id) VALUES (3, 'Estação X', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2);
INSERT INTO public.lab_station (id, name, created_at, updated_at, lab_id) VALUES (4, 'Estação Y', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2);
INSERT INTO public.smart_plug (id, name, created_at, updated_at, lab_station_id) VALUES (1, 'Tomada 1 - Computador', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1);
INSERT INTO public.smart_plug (id, name, created_at, updated_at, lab_station_id) VALUES (2, 'Tomada 2 - Placa FPGA', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 1);
INSERT INTO public.smart_plug (id, name, created_at, updated_at, lab_station_id) VALUES (3, 'Tomada 3 - Laser', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 2);
INSERT INTO public.smart_plug (id, name, created_at, updated_at, lab_station_id) VALUES (4, 'Computador do professor', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 3);
INSERT INTO public.smart_plug (id, name, created_at, updated_at, lab_station_id) VALUES (5, 'Microonadas dos funcionários', '2021-06-28 03:52:36.175932+00', '2021-06-28 03:52:36.175932+00', 4);
INSERT INTO public.smart_plug_metrics (time, current, smart_plug_id) VALUES
(now(), 1, 1),
(now() + INTERVAL '1 minute', 2, 1),
(now() + INTERVAL '2 minute', 3, 1);
SELECT pg_catalog.setval('public.laboratory_id_seq', 1, false);
SELECT pg_catalog.setval('public.smart_plug_id_seq', 1, false);
SELECT pg_catalog.setval('public.workbench_id_seq', 1, false);
