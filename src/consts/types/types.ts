import { NextApiRequest, NextApiResponse } from "next";

export type Nullable<T> = T | null;

export interface ContextProps {
  req: NextApiRequest;
  res: NextApiResponse;
}
