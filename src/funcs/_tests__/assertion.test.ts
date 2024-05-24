import {isArrEmpty, isInSafeRange} from '../assertion'

describe('isInSafeRange', () => {
	test('return true, {lower} < {target} < {higher}', () => {
		expect(isInSafeRange(5, 1, 10)).toBe(true)
	})
	test('return true, {lower} == {target} < {higher}', () => {
		expect(isInSafeRange(0, 0, 10)).toBe(true)
	})
	test('return true, when {lower} < {target} == {higher}', () => {
		expect(isInSafeRange(10, 0, 10)).toBe(true)
	})
	test('return true, when {lower} == {target} == {higher}', () => {
		expect(isInSafeRange(10, 10, 10)).toBe(true)
	})
	test('throws an error when {higher} < {lower}', () => {
		expect(() => isInSafeRange(5, 10, 1)).toThrow(
			'유효 범위 설정이 잘못되었습니다.',
		)
	})
})

describe('isArrEmpty', () => {
	test('return false, empty array', () => {
		expect(isArrEmpty([])).toBe(true)
	})
	test('return false, numbers array', () => {
		expect(isArrEmpty([1, 2, 3])).toBe(false)
	})
	test('return false, strings array', () => {
		expect(isArrEmpty(['1', '2', '3'])).toBe(false)
	})
	test('return false, booleans array', () => {
		expect(isArrEmpty([true, false, true])).toBe(false)
	})
	test('return false, objects array', () => {
		expect(isArrEmpty([{key: 'value1'}, {key: 'value2'}])).toBe(false)
	})
})
