/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderType } from '../interfaces';

export class TableHelpers {
  static descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  // static getComparator<Key extends keyof any>(
  //   order: OrderType,
  //   orderBy: Key
  // ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  //   return order === 'desc' ? (a, b) => this.descendingComparator(a, b, orderBy) : (a, b) => -this.descendingComparator(a, b, orderBy);
  // }

  static getComparator = <T>(order: OrderType, orderBy: keyof T): ((a: T, b: T) => number) => {
    return order === 'desc' ? (a, b) => this.compareDesc(a[orderBy], b[orderBy]) : (a, b) => this.compareAsc(a[orderBy], b[orderBy]);
  };

  static compareAsc = (a: any, b: any): number => (a < b ? -1 : a > b ? 1 : 0);

  static compareDesc = (a: any, b: any): number => (a > b ? -1 : a < b ? 1 : 0);

  static stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
}
