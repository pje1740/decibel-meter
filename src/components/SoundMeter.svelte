<script lang="ts">
	import { browser } from '$app/environment';
	import { startRecording } from '@/utils/decibel';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (browser) {
			await startRecording();
		}
	});
</script>

<div class="wrapper">
	<div class="wave" />
</div>

<style>
	div.wrapper {
		position: relative;
		width: 240px;
		height: 240px;
		margin: 2rem;
		background: #ffffff;
		border: 3px solid #888888;
		box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
		border-radius: 50%;

		overflow: hidden;
	}

	.wave {
		background-color: lightgray;
		height: 100%;
		width: 100%;
	}
</style>
