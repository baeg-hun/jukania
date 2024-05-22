import {RICE_TO_WATER_PERCENTAGE, RICE_TO_YEAST_PERCENTAGE} from '@/constants'
import {type MakingStage, type RiceProcessingMethod} from '@/types'
import {getPercentValue} from './ratio'
import {createUUId} from './unique'

export const createStageByRice = (
	rice: number,
	depth: number,
	method: RiceProcessingMethod,
): MakingStage => {
	const id = createUUId()
	const water = getPercentValue(rice, RICE_TO_WATER_PERCENTAGE)
	const yeast = getPercentValue(rice, RICE_TO_YEAST_PERCENTAGE)
	const stage = {
		id,
		rice,
		water,
		yeast,
		depth,
		method,
	}
	return stage
}
