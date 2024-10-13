import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import roleEnum from "../types/roleEnum";
import payLoadDTO from "../DTOs/payLoadDTO";

export const onlyTeachers = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const token = req.cookies.token;

    const userData = await jwt.verify(token, process.env.SECRET_TOKEN as string) as payLoadDTO

    if (userData.role.toString() != roleEnum[1]) {

      res.status(403).send("you are not a teacher")

    }

    next();
  } catch (err) {

    res.status(401).json({ err });
  }
};

export const student = async (req: Request, res: Response, next:NextFunction) => {
  try {
     
    const token = req.cookies.token;
   
    const userData = await jwt.verify(token, process.env.TOKEN_SECRET as string) as payLoadDTO
     
    if (userData.id) {

      res.status(403).send("you are not a student")

    }
   
    next();

  } catch (err) {
    res.status(401).json({err});
  }
};


