const generateMessage = (text) => {
  return {
    message: text.message,
    createdAt: new Date().getTime(),
    username: text.username,
  };
};

module.exports = {
  generateMessage,
};
