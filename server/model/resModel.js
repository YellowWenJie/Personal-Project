class BaseModel {
  constructor(data, message) {
    if (typeof data === "string") {
      this.message = data;
      data = null;
      // massage = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.state = 1;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.state = 0;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
