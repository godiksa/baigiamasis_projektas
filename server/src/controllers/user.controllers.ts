import User from '../models/user.model.js';
import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const newUserData = req.body;

  try {
    const validatedUser = new User(newUserData);
    const user = await validatedUser.save();

    res.status(201).json({ message: 'Vartotojas pridėtas sėkmingai', user });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Vartotojas blogai įvestas', details: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedUserData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedUserData);

    if (updatedUser) {
      res.status(201).json({ message: 'Vartotojas redaguotas sėkmingai' });
    } else {
      res.status(404).json({ message: 'Vartotojas nerastas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).json({ message: 'Vartotojas ištrintas sėkmingai' });
    } else {
      res.status(404).json({ message: 'Vartotojas nerastas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', details: error });
  }
};
