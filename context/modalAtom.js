import { atom } from "recoil";

export const modalAtom = atom({
  key: "content",
  default:     {
    name: "Famous Tv Series - A Music Drama set in Nairobi Kenya",
    link: "https://player.vimeo.com/video/671400778?h=046604dc66",
  },
});