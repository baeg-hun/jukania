/** 재료 가공 방식 */
export type RiceProcessingMethod = 'godubap' | 'jug' | 'tteog'

/** 술을 빚는 단계 */
export type MakingStage = {
	id: string
	depth: number // 현재가 몇 단계인지 (1 ~ )
	rice: number // 쌀의 양 (단위: kg)
	yeast: number // 누룩의 양 (단위: kg)
	water: number // 물의 양 (단위: L)
	method: RiceProcessingMethod // 쌀 공정 방법
}
