
import { Request, Response, NextFunction } from "express"
import { User } from "../models/User"

module.exports = {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try { 
      console.log("You Are Here: Get All Users")
      const users = await User.findAll()
      return users
    } catch (error) {
      console.log(error)
    }
  }
}