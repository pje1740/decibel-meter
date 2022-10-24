export const startRecording = async () => {
	const stream = await createStream();

	const audioCtx = new window.AudioContext();

	const analyserNode = audioCtx.createAnalyser();
	analyserNode.fftSize = 256;
	const bufferLength = analyserNode.frequencyBinCount;
	const dataArray = new Float32Array(bufferLength);

	const input = audioCtx.createMediaStreamSource(stream);

	input.connect(analyserNode);

	const process = () => {
		setInterval(() => {
			analyserNode.getFloatFrequencyData(dataArray);
			for (let i = 0; i < bufferLength; i++) {
				const value = dataArray[i];

				//need to convert db Value because it is -120 to 0
				const barHeight = (value / 2 + 70) * 10;
				console.log(barHeight);
			}
		}, 100);
	};

	process();
};

const createStream = async () => {
	const stream = await navigator.mediaDevices.getUserMedia({
		audio: true,
		video: false
	});

	return stream;
};
