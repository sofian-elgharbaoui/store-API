const success = (res, data) => {
  // res was unkown, so I had to bring it form the other function then returned it
  return res.json({ status: "success", data: data });
};

module.exports = success;
