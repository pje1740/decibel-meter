<script lang="ts">
	import SoundMeter from '@/components/SoundMeter.svelte';
	import DecibelNumber from '@/components/DecibelNumber.svelte';
	import { startRecording, stopRecording } from '@/utils/decibel';
	import { decibel } from '@/states/decibel';

	let isRecording = false;

	const handleVolumeChange = (vol: number) => {
		decibel.update(() => vol);
	};

	const handleClickButton = () => {
		if (isRecording) {
			stopRecording();
			isRecording = false;
			decibel.update(() => 0);
		} else {
			startRecording(handleVolumeChange);
			isRecording = true;
		}
	};
</script>

<main>
	<h1>DECIBEL</h1>
	<h1>METER</h1>
	<DecibelNumber />
	<SoundMeter />
	<button class="main-button" on:click={handleClickButton}>{isRecording ? 'Stop' : 'Start'}</button>
</main>

<style>
	h1 {
		font-size: 3rem;
		margin: 0;
	}
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	button.main-button {
		width: 100px;
		height: 40px;
		margin: 2rem;

		background: #888888;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		border: none;

		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 23px;
		text-align: center;

		color: white;
		cursor: pointer;
	}
</style>
