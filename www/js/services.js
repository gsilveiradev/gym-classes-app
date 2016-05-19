angular.module('app.services', [])

.factory('Horarios', function(){

	var horarios = [
	{
		id: 1,
		nome: 'Segunda-feira',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Aula 1',
			horario: '09:30'
		},{
			id: 3,
			nome: 'Aula 2',
			horario: '10:30'
		},{
			id: 4,
			nome: 'Aula 3',
			horario: '17:30'
		},{
			id: 5,
			nome: 'Aula 4',
			horario: '20:30'
		}]
	},
	{
		id: 2,
		nome: 'Terça-feira',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 3,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 4,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 5,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		}]
	},
	{
		id: 3,
		nome: 'Quarta-feira',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 3,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 4,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 5,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		}]
	},
	{
		id: 4,
		nome: 'Quinta-feira',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 3,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 4,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 5,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		}]
	},
	{
		id: 5,
		nome: 'Sexta-feira',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 3,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 4,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 5,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		}]
	},
	{
		id: 6,
		nome: 'Sábado',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 3,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 4,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 5,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		}]
	},
	{
		id: 7,
		nome: 'Domingo',
		sub_horarios : [{
			id: 1,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 2,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 3,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 4,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		},{
			id: 5,
			nome: 'Horário de funcionamento',
			horario: '06:00 - 24:00'
		}]
	}];

	return {
		all: function() {
		  return horarios;
		},
		get: function(horarioId) {
		  for (var i = 0; i < horarios.length; i++) {
		    if (horarios[i].id === parseInt(horarioId)) {
		      return horarios[i];
		    }
		  }
		  return null;
		}
	};
})

.service('BlankService', function(){

});

