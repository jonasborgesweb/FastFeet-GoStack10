import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const Schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string()
        .required()
        .max(8)
    });

    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails'
      });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code
    });
  }

  async update(req, res) {
    const Schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip_code: Yup.string().max(8)
    });

    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails'
      });
    }
    const recipient = await Recipient.findByPk(req.body.id);

    if (!recipient) {
      return res.status(400).json({
        error: 'Recipient Not exists'
      });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code
    });
  }
}

export default new RecipientController();
