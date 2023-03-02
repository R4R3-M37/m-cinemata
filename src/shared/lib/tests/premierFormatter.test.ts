// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { premierFormatter } from '~/shared/lib/premierFormatter'

describe('Конвертирование из минут в часы', () => {
	test('Нормальное поведение', () => {
		expect(premierFormatter(120)).toBe('2 часа')
		expect(premierFormatter(60)).toBe('1 час')
		expect(premierFormatter(40)).toBe('40 минут')
		expect(premierFormatter(21)).toBe('21 минуту')
		expect(premierFormatter(0)).toBeUndefined()
	})

	test('Отрицательное число', () => {
		expect(premierFormatter(-1000)).toBeUndefined()
		expect(premierFormatter(-1)).toBeUndefined()
	})

	test('Не число', () => {
		expect(premierFormatter('120')).toBe('2 часа')
		expect(premierFormatter(true)).toBe('1 минуту')
		expect(premierFormatter(false)).toBeUndefined()
		expect(premierFormatter([])).toBeUndefined()
		expect(premierFormatter({})).toBeUndefined()
	})
})
