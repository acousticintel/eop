import { atom } from "recoil";

export const sideBarAtom = atom({
  key: "open",
  default: false,
});