# QUESTÃO 3 DA AVALIAÇÃO TÉCNICA

## O Banco Central de Financiamentos perdeu muitos cadastros após uma falha de servidor que aconteceu em setembro, no aniversário da empresa. Alguns dados do ano passado foram encontrados e você foi escolhido para:

### Selecionar o nome, dia do mês e valor da parcela para clientes que estão inadimplentes. 

select nome, day(dt_pagamento) as dia_mes, valor_parcela from pessoas as pe inner join contratos as c inner join pagamentos as pa on pe.contrato_id=c.id and pa.pessoa_id=pe.id where pe.inadimplente like 'S';

### Selecionar o nome e valor total pago de clientes com pagamento completo.  

select nome, valor_parcela * parcelas as valor_total from pessoas as pe inner join contratos as c inner join pagamentos as pa on pe.contrato_id=c.id and pa.pessoa_id=pe.id where pe.inadimplente like 'N';



