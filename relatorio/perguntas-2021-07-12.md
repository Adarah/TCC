Coisas que fiz desde a ultima reuniao:
1. Adicionei regras de autorizaca para que operadores so consigam ver/modificar objetos que pertencem a seus proprios laboratorios
2. Autenticacao no painel administrativo (apenas permite operadores e administradores)
3. Escrita de dados originados do broker MQTT no banco de dados
4. Plot dos dados em tempo real vindos do backend
5. Tabela de auditoria para todas acoes feitas nas tabelas importantes (falta definir quais delas sao importantes?)


perguntas:
1. Tem necessidade de guardar os dados emitidos pelos dispositivos com resolucao de 1 segundo indefinidamente? Fiz umas contas rapidas, e seria algo em torno de 1.5 GB/ano/device de dados gerados (isso se nunca forem adicionadas novas medidas).
2. Qual a unidade de medida das metricas geradas pelo dispostivo? Lembro do Victor ter mencionado que era corrente em milliamperes, mas o nome do topico eh `power`?
Supondo que tensao constante, o medidor apenas mede amperes.

4. Qual o broker usado? Eu gostaria que o broker (ou o client) escrevesse na mensagem o horario de recebimento/publicacao da mensagem.
   O Motivo para isso eh que se o meu client reconectar depois de um tempo, ele recebera varias mensagens do broker que ele havia perdido, mas o horario do recebimento nao mais se assemelha ao horario da publicacao da mensagem.

proximos passos:
1. fazer com q app e admin-panel usem tokens vindos do usuario para comunicar com o bakcend ao inves do admin-secret q hardcodei


a implentacao do firebase eh closed source, mas o protocolo em si eh open source

talvez integrar com o proprio moodle via um iframe?

