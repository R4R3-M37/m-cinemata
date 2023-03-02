import action from '~/shared/assets/images/genres/action.webp'
import adventure from '~/shared/assets/images/genres/adventure.webp'
import anime from '~/shared/assets/images/genres/anime.webp'
import cartoon from '~/shared/assets/images/genres/cartoon.webp'
import comedy from '~/shared/assets/images/genres/comedy.webp'
import crime from '~/shared/assets/images/genres/crime.webp'
import detective from '~/shared/assets/images/genres/detective.webp'
import drama from '~/shared/assets/images/genres/drama.webp'
import family from '~/shared/assets/images/genres/family.webp'
import fantasy from '~/shared/assets/images/genres/fantasy.webp'
import horrors from '~/shared/assets/images/genres/horrors.webp'
import music from '~/shared/assets/images/genres/music.webp'
import romance from '~/shared/assets/images/genres/romance.webp'
import sciFi from '~/shared/assets/images/genres/sci-fi.webp'
import sport from '~/shared/assets/images/genres/sport.webp'
import thriller from '~/shared/assets/images/genres/thriller.webp'
import western from '~/shared/assets/images/genres/western.webp'
import { moviesByGenreRoute } from '~/shared/routing'

export const genresExclusive = [
	{
		link: moviesByGenreRoute,
		genre: 'comedy',
		image: comedy
	},
	{
		link: moviesByGenreRoute,
		genre: 'cartoon',
		image: cartoon
	},
	{
		link: moviesByGenreRoute,
		genre: 'detective',
		image: detective
	},
	{
		link: moviesByGenreRoute,
		genre: 'anime',
		image: anime
	},
	{
		link: moviesByGenreRoute,
		genre: 'adventure',
		image: adventure
	},
	{
		link: moviesByGenreRoute,
		genre: 'action',
		image: action
	},
	{
		link: moviesByGenreRoute,
		genre: 'drama',
		image: drama
	},
	{
		link: moviesByGenreRoute,
		genre: 'crime',
		image: crime
	},
	{
		link: moviesByGenreRoute,
		genre: 'music',
		image: music
	},
	{
		link: moviesByGenreRoute,
		genre: 'family',
		image: family
	},
	{
		link: moviesByGenreRoute,
		genre: 'romance',
		image: romance
	},
	{
		link: moviesByGenreRoute,
		genre: 'thriller',
		image: thriller
	},
	{
		link: moviesByGenreRoute,
		genre: 'sci-fi',
		image: sciFi
	},
	{
		link: moviesByGenreRoute,
		genre: 'horrors',
		image: horrors
	},
	{
		link: moviesByGenreRoute,
		genre: 'fantasy',
		image: fantasy
	},
	{
		link: moviesByGenreRoute,
		genre: 'western',
		image: western
	},
	{
		link: moviesByGenreRoute,
		genre: 'sport',
		image: sport
	}
]
