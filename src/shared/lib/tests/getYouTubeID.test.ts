// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { getYouTubeId } from '../getYouTubeID'

describe('Тест на получение embed видео по ссылке', () => {
	const mockYouTubeVideos = [
		{
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			name: 'Rick Astley - Never Gonna Give You Up',
			site: 'youtube',
			type: 'TRAILER',
			_id: '6376c032d8baf2331195b3ba'
		}
	]

	test('Проверка на рабоспособность', () => {
		expect(getYouTubeId(mockYouTubeVideos)).not.toEqual(mockYouTubeVideos)
	})

	test('Нормальный исход', () => {
		const shouldBe = [
			{
				url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
				name: 'Rick Astley - Never Gonna Give You Up',
				site: 'youtube',
				type: 'TRAILER',
				_id: '6376c032d8baf2331195b3ba'
			}
		]

		expect(getYouTubeId(mockYouTubeVideos)).toEqual(shouldBe)
	})

	test('Пустой массив на вход', () => {
		expect(getYouTubeId([])).toEqual([])
	})

	test('Другие значения', () => {
		expect(getYouTubeId('video')).toEqual([])
		expect(getYouTubeId(123)).toEqual([])
		expect(getYouTubeId({})).toEqual([])
		expect(getYouTubeId(true)).toEqual([])
		expect(
			getYouTubeId([
				{
					value: 'Rick Astley - Never Gonna Give You Up'
				}
			])
		).toEqual([])
	})
})
