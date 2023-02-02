import { api } from "services/api";
import type { GetResponseNFT } from "./types";

export function findMany () {
  return api.get<GetResponseNFT>('/nft')
}

export const nftService = {
  findMany
}