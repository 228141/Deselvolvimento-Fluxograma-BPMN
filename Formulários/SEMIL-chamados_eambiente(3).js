// Nome da Função: limpaCpfCnpj

if (model.origem == 'EXTERNO'){
	model.cdSolicitante = model.cdSolicitante.replace(/\D/g, '');
}