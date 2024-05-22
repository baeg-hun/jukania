import {isArrEmpty, isInSafeRange} from './assertion'

/** {val} 의 {percent}% 를 구한다. */
export const getPercentValue = (val: number, percent: number): number => {
	if (!isInSafeRange(val, 0, 100))
		throw new Error('백분율 입력이 올바르지 못합니다.')
	const result = (val * percent) / 100
	return result
}
/** 입력된 배열에서 가장 작은 값을 1로 하고, 그걸 기준으로 각 비율값을 반환한다. */
export const normalizeToSmallest = (nums: number[]): number[] => {
	if (isArrEmpty(nums)) return []
	const smallest = Math.min(...nums)
	const result = nums.map((num) => num / smallest)
	return result
}
