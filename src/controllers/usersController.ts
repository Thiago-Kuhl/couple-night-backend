import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Users from "../models/Users";
import * as Yup from "yup";

export default {
  async index(req: Request, res: Response) {
    const usersRepository = getRepository(Users);

    const users = await usersRepository.find();

    return res.status(200).json(users);
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOneOrFail(id);

    return res.status(200).json(user);
  },

  async create(req: Request, res: Response) {
    const {
      name,
      nickname,
      birth_date,
      phone_number,
      email,
      password,
    } = req.body;

    const usersRepository = getRepository(Users);

    const data = {
      name,
      nickname,
      birth_date,
      phone_number,
      email,
      password,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required().max(122),
      nickname: Yup.string().required().max(20),
      birth_date: Yup.string().required().max(10),
      phone_number: Yup.string().required().max(11),
      email: Yup.string().required().max(125),
      password: Yup.string().required().max(24),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return res.status(201).json(user);
  },
};
