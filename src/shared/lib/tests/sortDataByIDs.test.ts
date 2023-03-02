// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { sortDataByIDs } from '../sortDataByIDs'

describe('Сортировать массив фильмов по массиву айди', () => {
	const mockObjectMovies = {
		docs: [
			{
				id: 544406,
				age: 36,
				enName: 'Robert Pattinson',
				name: 'Роберт Паттинсон',
				photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3bd323c1-327d-42a2-8ab3-95b1b2c88a67/orig',
				sex: 'Мужской'
			},
			{
				id: 1743743,
				name: 'Арт Паркинсон',
				enName: 'Art Parkinson',
				photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/502bc303-2f0c-45c4-b9ab-795427d6840d/orig',
				age: 21,
				sex: 'Мужской'
			}
		],
		total: 2,
		limit: 10,
		page: 1,
		pages: 1
	}
	const mockIDsMovies = ['1743743', '544406']
	const mockIDsMoviesNumbers = [1743743, 544406]

	const shouldBe = [
		{
			id: '1743743',
			name: 'Арт Паркинсон',
			enName: 'Art Parkinson',
			photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/502bc303-2f0c-45c4-b9ab-795427d6840d/orig',
			age: 21,
			sex: 'Мужской'
		},
		{
			id: '544406',
			age: 36,
			enName: 'Robert Pattinson',
			name: 'Роберт Паттинсон',
			photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3bd323c1-327d-42a2-8ab3-95b1b2c88a67/orig',
			sex: 'Мужской'
		}
	]

	test('Нормальное поведение', () => {
		expect(sortDataByIDs({ data: mockObjectMovies, ids: mockIDsMovies })).toEqual(shouldBe)
		expect(sortDataByIDs({ data: mockObjectMovies, ids: mockIDsMoviesNumbers })).toEqual(shouldBe)
	})

	test('Неверные данные', () => {
		expect(sortDataByIDs({ data: mockObjectMovies, ids: 0 })).toEqual([])
		expect(sortDataByIDs({ data: mockObjectMovies, ids: null })).toEqual([])
		expect(sortDataByIDs({ data: {}, ids: null })).toEqual([])
		expect(sortDataByIDs({ data: [{}], ids: {} })).toEqual([])
		expect(sortDataByIDs({ data: '', ids: 1 })).toEqual([])
	})

	test('Пустые данные', () => {
		expect(sortDataByIDs({ data: [{}], ids: [] })).toEqual([])
	})
})
