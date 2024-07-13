import { Request, Response, NextFunction } from "express";

export function simulateDelay(req: Request, res: Response, next: NextFunction) {
  setTimeout(next, 5000); // 5000 milliseconds delay (5 seconds)
}
