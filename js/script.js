const app = new Vue({
	el: '#root',
	data: {
		newTodo: {
			text: '',
			done: false,
		},
		todos: [
			{
				text: 'lavare i denti',
				done: false,
			},
			{
				text: 'fare i compiti',
				done: true,
			},
			{
				text: 'uscire con la bici',
				done: false,
			},
		]
	},
	methods: {
		deleteTodo(index) {
			console.log('deleteTodo');
			this.todos.splice(index, 1);
		},
		addTodo() {
			console.log('addTodo');
			if (this.newTodo.text != '') {
				this.todos.unshift({...this.newTodo});
				this.newTodo.text = '';
			}
		},
		toggleDone(todoEle) {
			console.log('toggleDone');
			todoEle.done = !todoEle.done;
			console.log(todoEle);
		}
	},
});
