const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data)
    return response;
  }

  async insertMany(data) {
    const response = await this.model.insertMany(data)
    return response;
  }

  async deleteOne(query) {
    const response = await this.model.deleteOne(query);
    if (!response)
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    return response;
  }

  async deleteMany(query) {
    const response = await this.model.deleteMany(query);
    if (!response)
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    return response;
  }

  async get(query) {
    const response = await this.model.find(query).sort({createdAt:-1}).limit(20).lean();
    if (!response){
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getOne(query) {
    const response = await this.model.findOne(query);
    if (!response)
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    return response;
  }

  async getById(query) {
    const response = await this.model.findById(query);
    if (!response)
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    return response;
  }

  async getByIdAndUpdate(id,data) {
    const response = await this.model.findByIdAndUpdate(id,data,{ new: true , runValidators: true});
    if (!response)
      throw new AppError("Not able to find and update resource", StatusCodes.NOT_FOUND);
    return response;
  }

  async getAndDelete(query) {
    const response = await this.model.findOneAndDelete(query);
    if (!response)
      throw new AppError("Not able to find and update resource", StatusCodes.NOT_FOUND);
    return response;
  }

  async updateOne(query, data) {
    const response = await this.model.findOneAndUpdate(
      query,
      { $set: data },
      { new: true }
    ).exec();
    if (!response)
      throw new AppError("Source not found or you are not the author");
    return response;
  }

  async updateMany(query, data) {
    const response = await this.model.updateMany(
      query,
      { $set: data },
      { new: true }
    ).exec();
    if (!response)
      throw new AppError("Source not found or you are not the author");
    return response;
  }
}

module.exports = CrudRepository;
