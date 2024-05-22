/** 0.1 의 자리에서 반올림 */
export const roundToTenth = (val: number): number => Math.round(val * 10) / 10
/** 배열 원소의 합을 구한다. */
export const getArrSum = (nums: number[]): number =>
	nums.reduce((sum, num) => (sum += num), 0)
