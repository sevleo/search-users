const activeRequests = new Map();

const requestCanceller = (req, res, next) => {
  const requestId = req.ip;

  if (activeRequests.has(requestId)) {
    const { timeout, res: activeRes } = activeRequests.get(requestId);
    clearTimeout(timeout);
    activeRes
      .status(409)
      .json({ error: "Request cancelled due to a new request" });
    activeRequests.delete(requestId);
  }

  const timeout = setTimeout(() => {
    activeRequests.delete(requestId);
    next();
  }, 5000);

  activeRequests.set(requestId, { timeout, res });
};

export default requestCanceller;
