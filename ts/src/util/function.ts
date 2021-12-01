import { FunctionKey } from "../gobind";

export function functionKeyToText(k: FunctionKey): string {
  if (k.KeyCode === 0) {
    return "-";
  }
  let s = "";

  if (k.IsWin) {
    s += "<W> + ";
  }

  if (k.IsControl) {
    s += "<C> + ";
  }

  if (k.IsAlt) {
    s += "<A> + ";
  }

  if (k.IsShift) {
    s += "<S> + ";
  }

  if (s.endsWith(" + ")) {
    s = s.substring(0, s.length - 3);
  }

  if (k.IsDouble) {
    s += " X2";
  }
  return s;
}
