import { NextApiRequest, NextApiResponse } from "next";

export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  middlewareFunc: any
) {
  return new Promise((resolve, reject) => {
    middlewareFunc(req, res, (result: NextApiRequest | Error) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
