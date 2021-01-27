import { preset } from 'nano-css/preset/vdom'
import { createElement } from 'nervjs'

const { rule, sheet, jsx } = preset({ h: createElement })

export const $rule = rule
export const $sheet = sheet
export const $jsx = jsx