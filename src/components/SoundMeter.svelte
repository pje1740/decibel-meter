<script lang="ts">
	import { browser } from '$app/environment';
	import { startRecording } from '@/utils/decibel';
	import { onMount } from 'svelte';

	export let volume = 0;
	$: bottom = `${volume}px`;

	const handleVolumeChange = (vol: number) => {
		volume = vol;
		console.log(volume);
	};

	onMount(async () => {
		await startRecording(handleVolumeChange);
	});
</script>

<div class="wrapper">
	<div class="wave" style:bottom />
</div>

<style>
	div.wrapper {
		position: relative;
		width: 240px;
		height: 240px;
		margin: 2rem;
		background: #ffffff;
		background-color: lightgray;
		box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
		border-radius: 50%;
		outline: 4px solid white;
		outline-offset: -4px;

		overflow: hidden;
	}

	.wave {
		position: relative;
		background-color: white;
		height: 100%;
		width: 100%;
		transition: bottom 0.1s;
	}
</style>
