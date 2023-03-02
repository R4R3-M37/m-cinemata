// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { kFormatter } from '../kFormatter'

describe('Конвертирование и добавление "К" к числам', () => {
	test('Нормальное поведение', () => {
		expect(kFormatter(1000)).toBe('1К')
		expect(kFormatter(0)).toBe('0')
	})

	test('Отрицательное число', () => {
		expect(kFormatter(-1000)).toBeUndefined()
	})

	test('Не число', () => {
		expect(kFormatter('1000')).toBe('1К')
		expect(kFormatter(true)).toBe('1')
		expect(kFormatter(false)).toBeUndefined()
		expect(kFormatter([])).toBeUndefined()
		expect(kFormatter({})).toBeUndefined()
	})
})
