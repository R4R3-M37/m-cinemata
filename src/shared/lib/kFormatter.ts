export const kFormatter = (num: number): string | undefined => {
	if (num < 0 || !Number(num)) return

	const isGreeterThan1000: boolean = Math.abs(num) > 999
	const result = isGreeterThan1000
		? Math.sign(num) * +(Math.abs(num) / 1000).toFixed(0) + 'К'
		: Math.sign(num) * Math.abs(num)

	if (Number.isNaN(result)) return

	return `${result}`
}
