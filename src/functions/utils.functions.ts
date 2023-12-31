import { None, Option, Some } from 'ts-results'
import { range } from './array.functions'

export const identity = <T>(x: T): T => x

export type Nullish = null | undefined

export const isNullish = (val: unknown): val is Nullish => val == null

export const notNullish = <T>(val: T): val is NonNullable<T> => !isNullish(val)

export const inRange =
  (numberRange?: [number, number]) =>
  (val: number, inclusive = false): boolean => {
    if (isNullish(numberRange)) {
      return false
    }

    if (inclusive) {
      return val >= numberRange[0] && val <= numberRange[1]
    }

    return val > numberRange[0] && val < numberRange[1]
  }

export const isString = (x: unknown): x is string => typeof x === 'string'

export const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === 'object'

export const isArray = (x: unknown): x is string => Array.isArray(x)

export const numberToBooleans = (to: number | Nullish): boolean[] => {
  if (to === null) {
    return []
  }

  if (!validNumber(to)) {
    throw new Error('Invalid number')
  }

  return range(to).map(() => false)
}

export const maybe = <T>(
  val?: T | null | undefined,
): Option<NonNullable<T>> => {
  if (notNullish(val)) {
    return Some(val)
  }

  return None
}

export const validNumber = (
  num: number | Nullish,
): num is NonNullable<number> => {
  if (isNullish(num)) return false

  return !isNaN(num) && isFinite(num)
}

export const capitalize = (s: string): string =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`
