const socket = io()

const timerEl = document.getElementById('timer')
const topAuxEl = document.getElementById('top-aux')
const bottomAuxEl = document.getElementById('bottom-aux')
const internalTimeEl = document.getElementById('internal-time')

function formatTime(totalSeconds) {
	const sign = totalSeconds < 0 ? '-' : ''
	const seconds = Math.abs(totalSeconds)
	const h = Math.floor(seconds / 3600)
	const m = Math.floor((seconds % 3600) / 60)
	const s = seconds % 60
	return `${sign}${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

socket.on('state', (state) => {
	// Main timer display
	timerEl.textContent = formatTime(state.remaining)
	timerEl.classList.remove('blinking') // Reset blinking state

	// Set color based on thresholds and state
	if (state.remaining <= 0) {
		timerEl.style.color = 'red'
		if (state.state === 'running') {
			timerEl.classList.add('blinking')
		}
	} else if (state.state === 'running') {
		if (state.config.red && state.remaining <= state.config.red) {
			timerEl.style.color = 'red'
		} else if (state.config.amber && state.remaining <= state.config.amber) {
			timerEl.style.color = 'orange'
		} else {
			timerEl.style.color = 'white'
		}
	} else if (state.state === 'paused') {
		timerEl.style.color = 'orange'
	} else { // stopped
		timerEl.style.color = 'white'
	}

	// Apply font sizes from config
	timerEl.style.fontSize = state.config.timer_fontsize + 'vw'
	topAuxEl.style.fontSize = state.config.aux_fontsize + 'vw'
	bottomAuxEl.style.fontSize = state.config.aux_fontsize + 'vw'

	// Aux text
	topAuxEl.textContent = state.top_aux
	bottomAuxEl.textContent = state.bottom_aux

	// Internal time display
	if (state.config.show_internal_time) {
		internalTimeEl.style.display = 'block'
		internalTimeEl.textContent = new Date().toLocaleTimeString()
		// Update class for corner positioning
		internalTimeEl.className = 'corner ' + state.config.time_corner
	} else {
		internalTimeEl.style.display = 'none'
	}
})

// Keep internal time updated locally
setInterval(() => {
	if (internalTimeEl.style.display === 'block') {
		internalTimeEl.textContent = new Date().toLocaleTimeString()
	}
}, 1000) 