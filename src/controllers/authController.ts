import exp, { Request, Response } from 'express'
import { loginServise } from '../services/authService';
 

const login = async (req: Request, res: Response) => {
  try {
    const token = await loginServise(req.body);
    res.cookie("token", token);
    res.json({
      msg: `welcome ${req.body.name}! so good to see you again!!`,
    });
  } catch (err) {
    res.status(400).send('token is faild');
  }
};

 

module.exports = {
  login
};