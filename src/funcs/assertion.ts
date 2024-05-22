/** {lower} <= {target} <= {higher}, 성립한다면 true */
export const isInSafeRange = (
	target: number,
	lower: number,
	higher: number,
) => {
	if (lower > higher) throw new Error('유효 범위 설정이 잘못되었습니다.')
	return lower <= target && target <= higher
}
/** 배열이 비어있다면 true */
export const isArrEmpty = <T = number>(arr: T[]) => {
	return arr.length === 0
}
