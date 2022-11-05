let stream: MediaStream;
let audioContext: AudioContext;
let processInterval: NodeJS.Timer;

export const startRecording = async (onReceiveVolume: (volume: number) => void) => {
	stream = await createStream();

	audioContext = new window.AudioContext();

	const analyserNode = audioContext.createAnalyser();
	analyserNode.fftSize = 256;
	const bufferLength = analyserNode.frequencyBinCount;
	const dataArray = new Float32Array(bufferLength);

	const input = audioContext.createMediaStreamSource(stream);

	input.connect(analyserNode);

	const process = () => {
		processInterval = setInterval(() => {
			analyserNode.getFloatFrequencyData(dataArray);
			for (let i = 0; i < bufferLength; i++) {
				// TODO: 정확한 데시벨 값 측정 필요
				const value = dataArray[i];
				let volume = Math.floor((value + 140) * 2);
				if (volume < 0) volume = 0;

				onReceiveVolume(volume);
				console.log('update volume');
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

export const stopRecording = () => {
	stream.getTracks().forEach((track) => {
		track.stop();
	});
	audioContext.close();
	clearInterval(processInterval);
};
