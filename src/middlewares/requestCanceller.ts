import { Request, Response, NextFunction } from "express";

const activeRequests = new Map();

const requestCanceller = (req: Request, res: Response, next: NextFunction) => {
  const requestId = req.ip;

  if (activeRequests.has(requestId)) {
    // console.log(activeRequests);

    // Destructuring requestId from activeRequests, also renaming res  to activeRes to avoid conflict with res variable
    const { timeout, res: activeRes } = activeRequests.get(requestId);

    // Cancelling the previous request
    clearTimeout(timeout);
    activeRes
      .status(409)
      .json({ error: "Request cancelled due to a new request" });
    activeRequests.delete(requestId);
  }

  // Setting timeout for the new request
  const timeout = setTimeout(() => {
    activeRequests.delete(requestId);
    // console.log(activeRequests);
    next();
  }, 5000);

  // Setting new request to activeRequests
  activeRequests.set(requestId, { timeout, res });
  //   console.log(activeRequests);
};

export default requestCanceller;
