// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { movieLengthFormatter } from '../movieLengthFormatter'

describe('Конвертирование из минут в часы', () => {
	test('Нормальное поведение', () => {
		expect(movieLengthFormatter(120)).toBe('2 часа')
		expect(movieLengthFormatter(60)).toBe('1 час')
		expect(movieLengthFormatter(40)).toBe('40 минут')
		expect(movieLengthFormatter(21)).toBe('21 минуту')
		expect(movieLengthFormatter(0)).toBeUndefined()
	})

	test('Отрицательное число', () => {
		expect(movieLengthFormatter(-1000)).toBeUndefined()
		expect(movieLengthFormatter(-1)).toBeUndefined()
	})

	test('Не число', () => {
		expect(movieLengthFormatter('120')).toBe('2 часа')
		expect(movieLengthFormatter(true)).toBe('1 минуту')
		expect(movieLengthFormatter(false)).toBeUndefined()
		expect(movieLengthFormatter([])).toBeUndefined()
		expect(movieLengthFormatter({})).toBeUndefined()
	})
})
