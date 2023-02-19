<!DOCTYPE html>
<html>
<head>
	<title>Exemplo com Bootstrap, jQuery, SASS, React e Redux</title>
	<!-- Importando Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<h1>Exemplo com Bootstrap, jQuery, SASS, React e Redux</h1>
		<p>Este é um exemplo básico que utiliza as tecnologias Bootstrap, jQuery, SASS, React e Redux.</p>
		<button id="increment-btn" class="btn btn-primary">Clique para incrementar</button>
		<p id="counter">0</p>
	</div>
	
	<!-- Importando jQuery e Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	
	<!-- Importando React e Redux -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js"></script>
	
	<script>
		// Criando um reducer simples
		const counterReducer = (state = 0, action) => {
			switch (action.type) {
				case 'INCREMENT':
					return state + 1;
				default:
					return state;
			}
		};
		
		// Criando um store com o reducer criado acima
		const store = Redux.createStore(counterReducer);
		
		// Renderizando o componente React
		const Counter = () => {
			const [counter, setCounter] = React.useState(store.getState());
			
			React.useEffect(() => {
				// Adicionando um listener para o store
				store.subscribe(() => {
					setCounter(store.getState());
				});
			}, []);
			
			return (
				<div>
					<p>O contador está em {counter}</p>
					<button onClick={() => store.dispatch({type: 'INCREMENT'})}>
						Incrementar
					</button>
				</div>
			);
		};
		
		// Renderizando o componente React na página
		ReactDOM.render(<Counter />, document.getElementById('counter'));
		
		// Adicionando um listener para o botão de incremento
		$('#increment-btn').click(() => {
			store.dispatch({type: 'INCREMENT'});
		});
	</script>
</body>
</html>