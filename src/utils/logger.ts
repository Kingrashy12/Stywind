import logColor from "./log-color";

export const logger = {
  log: (...args: any) => console.log(logColor.gray(args)),
  info: (...args: any) => console.log(logColor.blue(args)),
  warning: (...args: any) => console.log(logColor.yellow(args)),
  success: (...args: any) => console.log(logColor.green(args)),
  highlight: (...args: any) => console.log(logColor.bgCyan(args)),
  deprecated: (...args: any) => console.log(logColor.strikethrough(args)),
  debug: console.log,
};
