<script lang="ts">
	import Title from '@/components/Title.svelte'
</script>

<main>
	<Title />
</main>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

	* {
		font-family: 'Noto Sans KR', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>