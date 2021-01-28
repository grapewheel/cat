import { create } from 'nano-css'
import { createElement } from 'nervjs'
import { addon as addonCache } from 'nano-css/addon/cache'
import { addon as addonRule } from 'nano-css/addon/rule'
import { addon as addonJsx } from 'nano-css/addon/jsx'

const nano = create({ h: createElement })

addonCache(nano)
addonRule(nano)
addonJsx(nano)

const { jsx } = nano
export { jsx }