import { NextFunction, Request } from "express";
import jwt from "jsonwebtoken"

const onlyTeachers = async (req:Request, res:Response, next:NextFunction) => {
  try {
     
    const token = req.cookies.token;
     
    const userData = await jwt.verify(token, process.env.SECRET_TOKEN);
    if (userData.role !== "commander") {
      res.status(403).send("shtzchhhhhhhh....")
    }
    // add the user to the req object
    req.user = userData;
    // call next
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

const onlySoldiersAndCommanders = async (req, res, next) => {
  try {
    // get the token from cookie
    const token = req.cookies.token;
    // verify
    const userData = await jwt.verify(token, process.env.TOKEN_SECRET);
    // add the user to the req object
    req.user = userData;
    // call next
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

module.exports = {
  onlyCommanders,
  onlySoldiersAndCommanders,
};