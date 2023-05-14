// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { premierFormatter } from '../premierFormatter'

describe('Конвертирование из минут в часы', () => {
	const mockObjectPremier = {
		world: '2011-09-23T00:00:00.000Z',
		russia: '2012-04-26T00:00:00.000Z'
	}
	const shouldBe = [
		{
			country: 'Мир',
			date: '23 сентября 2011'
		},
		{
			country: 'Россия',
			date: '26 апреля 2012'
		}
	]

	test('Нормальное поведение', () => {
		expect(premierFormatter(mockObjectPremier)).toBe(shouldBe)
		expect(premierFormatter(0)).toEqual([])
	})

	test('Отрицательное число', () => {
		expect(premierFormatter(-1000)).toEqual([])
		expect(premierFormatter(-1)).toEqual([])
	})

	test('Не число', () => {
		expect(premierFormatter(false)).toEqual([])
		expect(premierFormatter([])).toEqual([])
		expect(premierFormatter({})).toEqual([])
	})
})
