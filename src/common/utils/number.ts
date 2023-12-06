import { isNaN, isUndefined, toNumber } from 'lodash';

export class NumberUtils {
  /**
   * The formatMoney function takes a number and returns a string representation of that number with
   * commas separating the thousands.
   * @param {number} number - The parameter "number" is a number that represents a monetary value.
   * @returns a string representation of the input number, rounded to the nearest whole number and
   * formatted with commas as thousands separators.
   */
  static formatMoney(number: number, currency = ''): string {
    return Math.round(number).toLocaleString('en-GB') + currency;
  }

  /* The `convertQueryParam` function is a static method of the `NumberUtils` class. It takes a parameter
`param` which can be of type `string`, `number`, `undefined`, or `null`. */
  static convertQueryParam = (param: string | number | undefined | null): number | null => {
    const numParam = Number(param);
    return typeof numParam === 'number' && !isNaN(numParam) ? numParam : null;
  };

  /**
   * @param {unknown} number
   * @returns returns a number or 0.
   */
  static parseToNumber(number: unknown): number {
    if (isUndefined(number)) {
      return 0;
    }
    const isNumber = toNumber(number);
    if (isNaN(isNumber)) {
      return 0;
    }
    return isNumber;
  }
}
