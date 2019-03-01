<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	el: '#app',
	data () {
		return {
			name: 'world',
		}
	},
});
</script>

<template>
	<div>
		<h1>
			Hello {{ name }}!
		</h1>
		<input v-model='name' type='text'/>
	</div>
</template>

