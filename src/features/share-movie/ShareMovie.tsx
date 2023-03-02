import { useUnit } from 'effector-react'
import { Portal } from 'react-portal'

import { ShareMovieVariant } from '~/features/share-movie/ui/ShareMovieVariant'

import { MovieOption } from '~/entities/movie/MovieOption'

import { BiCopy, BsFillShareFill, BsTelegram, CiCircleMore, SlSocialVkontakte } from '~/shared/icons'
import { Alert } from '~/shared/ui/alerts/Alert'
import { createAlertsApi } from '~/shared/ui/alerts/model'
import { BottomPopup } from '~/shared/ui/bottom-popup/BottomPopup'
import { createBottomPopupApi } from '~/shared/ui/bottom-popup/model'

interface Props {
	name: string
	image: string
}

const popup = createBottomPopupApi()
const alert = createAlertsApi()

export const ShareMovie = ({ name, image }: Props) => {
	const { isActive: isActivePopup, changed: changedPopup } = useUnit(popup)
	const { isActive: isActiveAlert, changed: changedAlert } = useUnit(alert)

	const url = window.location.href

	const handleShareViaLink = () => {
		const text = `${name} - ${url}`
		navigator.clipboard.writeText(text)
		changedPopup(false)
		changedAlert(true)
	}

	const handleShareViaVK = () => {
		window.location.href = `http://vk.com/share.php?url=${url}&title='Cinemata | ${name}&image=${image}`
	}

	const handleShareViaTG = () => {
		window.location.href = `https://t.me/share/url?text=Cinemata | ${name}&url=${url}`
	}

	const handleShareMore = () => {
		navigator.share({
			title: `Cinemata | ${name}`,
			url
		})
	}

	return (
		<>
			<Portal>
				<Alert isActive={isActiveAlert} changed={changedAlert}>
					<span className='font-medium text-green-300'>
						Успешно скопировано - <h2 className='font-bold text-white'>{name}</h2>
					</span>
				</Alert>
			</Portal>
			<MovieOption onClick={() => changedPopup(true)}>
				<BsFillShareFill className='text-3xl' />
				Поделиться
			</MovieOption>
			<BottomPopup swipeable={true} isActive={isActivePopup} changed={changedPopup}>
				<div className='z-100 px-6'>
					<h2 className='-mt-8 mb-4 text-2xl font-bold'>Поделиться</h2>
					<div className='flex justify-between py-5 text-8xl'>
						<ShareMovieVariant
							onClick={handleShareViaTG}
							icon={<BsTelegram className='rounded-full bg-white fill-sky-300' />}
							title='Telegram'
						/>
						<ShareMovieVariant
							onClick={handleShareViaVK}
							icon={<SlSocialVkontakte className='rounded-2xl bg-blue-400 fill-white p-2' />}
							title='ВКонтакте'
						/>
						<ShareMovieVariant onClick={handleShareMore} icon={<CiCircleMore />} title='Еще' />
					</div>
					<button
						className='mt-5 flex w-full justify-between rounded-2xl bg-d-primary p-5 text-lg font-bold text-white'
						onClick={handleShareViaLink}>
						<div>Скопировать ссылку</div>
						<BiCopy className='text-2xl' />
					</button>
				</div>
				<div className='pb-12' />
			</BottomPopup>
		</>
	)
}
