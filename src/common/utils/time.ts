import moment from 'moment';
export class TimeUtils {
  private static formatDateTime(date: Date | string, format: string): string {
    return moment(date).format(format);
  }

  /**
   * @param {Date | string} date
   * @param [prefixDate=-] DD-MM-YYYY
   * @param [prefixTime=:] HH:mm:ss
   * @returns DD-MM-YYYY HH:mm:ss
   */
  static toDateTime(date: Date | string, prefixDate = '-', prefixTime = ':'): string {
    const dateFormat = `DD${prefixDate}MM${prefixDate}YYYY`;
    const timeFormat = `HH${prefixTime}mm${prefixTime}ss`;
    return this.formatDateTime(date, `${dateFormat} ${timeFormat}`);
  }

  /**
   * @param {Date | string} date
   * @param [prefix=-] DD-MM-YYYY
   * @returns DD-MM-YYYY
   */
  static toDate(date: Date | string, prefix = '-'): string {
    const format = `DD${prefix}MM${prefix}YYYY`;
    return this.formatDateTime(date, format);
  }

  /**
   * @param {Date | string} time
   * @param [prefixTime=:] HH:mm:ss
   * @returns DD-MM-YYYY HH:mm:ss
   */
  static toTime(time: Date | string, prefix = ':'): string {
    const format = `HH${prefix}mm${prefix}ss`;
    return this.formatDateTime(time, format);
  }
}
