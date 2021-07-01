fluxo do aluno:
1. Login
2. Fazer check-in (isso liga a maquina, liga a fpga, e gera um novo ID pro anydesk pra garantir que ninguem mais acesse sem querer)
3. pedir pro user inputar o auth-token recebido do blynk (isso faz uma request HTTP pra bancada do lab gravar esse token no arduino).
4. Mostrar o ID anydesk pro aluno usar nessa sessao.
5. Quando acabar o tempo ou o aluno fazer checkout, a sessao eh finalizada no backend, o anydesk eh resetado, e tudo eh desligado.

perguntar ao aluno um feedback da ultima sessão
1. nota de 1 a 5
. campo de feedback anonimizado
