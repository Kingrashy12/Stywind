const styles = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

const applyStyle = (style: unknown, text: string) =>
  `${style}${text}${styles.reset}`;

const logColor = {
  reset: (text: string) => applyStyle(styles.reset, text),
  bold: (text: string) => applyStyle(styles.bold, text),
  dim: (text: string) => applyStyle(styles.dim, text),
  underline: (text: string) => applyStyle(styles.underline, text),
  inverse: (text: string) => applyStyle(styles.inverse, text),
  hidden: (text: string) => applyStyle(styles.hidden, text),
  strikethrough: (text: string) => applyStyle(styles.strikethrough, text),
  black: (text: string) => applyStyle(styles.black, text),
  red: (text: string) => applyStyle(styles.red, text),
  green: (text: string) => applyStyle(styles.green, text),
  yellow: (text: string) => applyStyle(styles.yellow, text),
  blue: (text: string) => applyStyle(styles.blue, text),
  magenta: (text: string) => applyStyle(styles.magenta, text),
  cyan: (text: string) => applyStyle(styles.cyan, text),
  white: (text: string) => applyStyle(styles.white, text),
  gray: (text: string) => applyStyle(styles.gray, text),
  bgBlack: (text: string) => applyStyle(styles.bgBlack, text),
  bgRed: (text: string) => applyStyle(styles.bgRed, text),
  bgGreen: (text: string) => applyStyle(styles.bgGreen, text),
  bgYellow: (text: string) => applyStyle(styles.bgYellow, text),
  bgBlue: (text: string) => applyStyle(styles.bgBlue, text),
  bgMagenta: (text: string) => applyStyle(styles.bgMagenta, text),
  bgCyan: (text: string) => applyStyle(styles.bgCyan, text),
  bgWhite: (text: string) => applyStyle(styles.bgWhite, text),
};

export default logColor;
