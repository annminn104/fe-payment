export class StylesUtils {
  static remToPx(value: string): number {
    return Math.round(parseFloat(value) * 16);
  }

  static pxToRem(value: number): string {
    return `${value / 16}rem`;
  }
  static responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
    return {
      '@media(min-width:600px)': {
        fontSize: this.pxToRem(sm)
      },
      'media(min-width:900px)': {
        fontSize: this.pxToRem(md)
      },
      '@media(min-width:1200px)': {
        fontSize: this.pxToRem(lg)
      }
    };
  }

  static adjustFlex() {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };
  }
}
