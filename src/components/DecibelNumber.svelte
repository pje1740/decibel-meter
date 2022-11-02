<script type="ts">
	import { decibel } from '@/states/decibel';

	let volume = 0;

	decibel.subscribe((value) => {
		volume = value;
	});
</script>

<p class="volume">{volume}</p>

<style>
	.volume {
		font-size: 1.5rem;
		font-weight: 900;
		color: lightgray;
	}
</style>
