Conceitos do sistema:
1. Existem 3 tipos de usuarios, Professores, operadores, e alunos.
2. O sistema eh multi-tenant, sendo divido em laboratorios.
3. Cada laboratorio possui bancadas, cada bancada possui dispositivos (smart plugs).
4. Dentro de um laboratorio, os alunos sao agrupados em grupos de 1 ou mais pessoas.
5. Laboratorios tem horarios de aula, e horarios de open-lab, e horarios que fica fechado.
6. Todo laboratorio tem 1 ou mais professores, 0 ou mais operadores, e 1 ou mais turmas.
7. Turmas tem grupos de alunos, e horarios.
10. Grupos de alunos sao associados a bancadas especificas.
11. Um dispositivo eh considerado ligado se o dado mais recente do ultimo minuto eh != . Se o dado mais recente eh 0, esta desligado. Caso n tenha enviado nenhum dado no ultimo minuto, o dispositivo esta inalcancavel.

Operacoes administrativos: (requerem acessos de escrita no banco de dados)
4. Professores tem mesmas permissoes que operadores, mas com acesso extra que possibilita criar novos operadores e adiciona-los a laboratorios aos quais o professor eh membro.
5. Professores podem criar laboratorios. O criador do laboratorio pode adicionar outros professores a ele.
6. Professores podem adicionares operadores a laboratorios aos quais eles sao membros.
7. Operadores podem adicionar alunos a laboratorios em que eles sao membros.
8. Operadores podem associar alunos a grupos dentro de um laboratorio.
10. Ter tabela de auditoria para monitorar acoes CRUD.

Requisitos nao-administrativos:
1. Dados de consumo energetico dos dispositivos podem ser acessados publicamente
2. Disponibilidade de dados de outras metricas ainda precisa ser analisado.
3. Operador pode invocar comandos de ligar/desligar em dispositivos do seu laboratorio
4. Operador tambem pode programar esses comandos para um horario especifico.
5. (requisito fraco) Caso um aluno esteja usando um dispositivo no momento que o operador envia comando, notifica-lo.
6. Grupos de alunos podem reservar bancadas nos horarios livres (open lab).
7. Operador pode schedular reservas automaticas para grupos de alunos. Essa "politica" tem tempo de expiracao, geralmente um semestre.
8. Alunos e operadores podem ver status da bancada. Operador ve na dashboard web, aluno pode ver no aplicativo.

