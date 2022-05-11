import {Kind} from "./Kind";

export interface Pet {
  id: number;
  name: string;
  kind: Kind;
  image: string;
  profileText: string;
  popularity: number;
}
