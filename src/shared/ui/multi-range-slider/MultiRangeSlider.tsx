import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import './slider.css'

interface Props {
	min: number
	max: number
	onChange: (range: { min: number; max: number }) => void
	className: string
}

export const MultiRangeSlider = ({ min, max, onChange, className }: Props) => {
	const [minVal, setMinVal] = useState(min)
	const [maxVal, setMaxVal] = useState(max)
	const minValRef = useRef(min)
	const maxValRef = useRef(max)
	const range = useRef<HTMLInputElement>(null)

	const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max])

	const handleChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(event.target.value), maxVal - 1)
		setMinVal(value)
		minValRef.current = value
	}

	useEffect(() => {
		const minPercent = getPercent(minVal)
		const maxPercent = getPercent(maxValRef.current)

		if (range.current) {
			range.current.style.left = `${minPercent}%`
			range.current.style.width = `${maxPercent - minPercent}%`
		}
	}, [minVal, getPercent])

	useEffect(() => {
		const minPercent = getPercent(minValRef.current)
		const maxPercent = getPercent(maxVal)

		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`
		}
	}, [maxVal, getPercent])

	useEffect(() => {
		onChange({ min: minVal, max: maxVal })
	}, [minVal, maxVal])

	return (
		<div className={className}>
			<input
				type='range'
				min={min}
				max={max}
				value={minVal}
				onChange={(event) => handleChangeRange(event)}
				className='thumb thumb--left'
				style={{ zIndex: (minVal > max - 100 && '5') || '' }}
			/>
			<input
				type='range'
				min={min}
				max={max}
				value={maxVal}
				onChange={(event) => {
					const value = Math.max(Number(event.target.value), minVal + 1)
					setMaxVal(value)
					maxValRef.current = value
				}}
				className='thumb thumb--right'
			/>
			<div className='slider'>
				<div className='slider__track' />
				<div ref={range} className='slider__range' />
			</div>
		</div>
	)
}
