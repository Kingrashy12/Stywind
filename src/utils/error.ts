import { logger } from "./logger";

type Error = {
  throw: (check: boolean, errorMsg: string) => void;
  log: (check: boolean, errorMsg: string) => void;
};

export const ReturnError: Error = {
  throw(check, errorMsg) {
    if (check) throw new Error(errorMsg);
  },
  log(check, errorMsg) {
    if (check) logger.warning(errorMsg);
  },
};
