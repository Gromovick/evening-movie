export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Внутрішня помилка сервера";
  const myMessage = err.myMessage || "Внутрішня помилка сервера";

  res.status(status).json({ error: message, message: myMessage });
};
