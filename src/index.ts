import Vue from 'vue';

let v = new Vue ({
	el: '#app',
	data() {
		return {
			name: 'World'
		}
	},
	template: `
	<div>
		<h1>Hello {{name}}!</h1>
		Name: <input v-model='name' type='text'/>
	</div>
	`
})
