class ResFormatterClass {
  resForm(result, message) {
    return {
      result,
      message,
    };
  }
  resAnswer(res, status, data) {
    return res.status(status).json(data);
  }
}

export const ResFormatter = new ResFormatterClass();
