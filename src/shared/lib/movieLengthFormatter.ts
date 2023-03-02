const hoursFormatter: { [key: number]: string } = {
	1: 'час',
	2: 'часа',
	3: 'часа',
	4: 'часа'
}

const minutesFormatter: { [key: number]: string } = {
	1: 'минуту',
	2: 'минуты',
	3: 'минуты',
	4: 'минуты',
	21: 'минуту',
	22: 'минуты',
	23: 'минуты',
	24: 'минуты',
	31: 'минуту',
	32: 'минуты',
	33: 'минуты',
	34: 'минуты',
	41: 'минуту',
	42: 'минуты',
	43: 'минуты',
	44: 'минуты',
	51: 'минуту',
	52: 'минуты',
	53: 'минуты',
	54: 'минуты'
}

export const movieLengthFormatter = (movieLength?: number): string | undefined => {
	if (!movieLength) return
	if (!Number(movieLength) || movieLength < 0) return

	const hours: number = Math.floor(movieLength / 60)
	const minutes: number = Math.round((movieLength / 60 - hours) * 60)

	if (hours === 0) return `${minutes} ${minutesFormatter[minutes] || 'минут'}`
	if (minutes === 0) return hours ? `${hours} ${hoursFormatter[hours] || 'часов'}` : undefined

	return `${hours} ${hoursFormatter[hours] || 'часов'} ${minutes} ${minutesFormatter[minutes] || 'минут'}`
}
