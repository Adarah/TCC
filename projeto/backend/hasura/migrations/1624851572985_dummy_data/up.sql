INSERT INTO laboratory (id, name, description, location) VALUES
(1, 'Lab1', 'Lab para testes de armas nucleares', 'Prédio da Elétrica, 13° andar'),
(2, 'Lab2', NULL, 'Prédio da Mecânica, 1° andar');

INSERT INTO workbench (id, name, laboratory_id) VALUES
(1, 'Bancada 1A', 1),
(2, 'Bancada 2B', 1),
(3, 'Estação X', 2),
(4, 'Estação Y', 2);

INSERT INTO smart_plug (id, name, workbench_id) VALUES
(1, 'Tomada 1 - Computador', 1),
(2, 'Tomada 2 - Placa FPGA', 1),
(3, 'Tomada 3 - Laser', 2),
(4, 'Computador do professor', 3),
(5, 'Microonadas dos funcionários', 4);

INSERT INTO smart_plug_metrics (time, smart_plug_id, current) VALUES
(now(), 1, 100),
(now() + interval '1 minute', 1, 150),
(now() + interval '2 minute', 1, 250),
(now() + interval '3 minute', 1, 100),
(now() + interval '4 minute', 1, 125);
