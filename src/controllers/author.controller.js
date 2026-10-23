import { authorModel } from "../models/author.model.js";
import { matchedData } from "express-validator";

export const createAuthor = async (req, res) => {
  try {
    const data = matchedData(req);
    const newAuthor = await authorModel.create(data);

    return res
      .status(201)
      .json({ msg: "Autor creado correctamente", data: newAuthor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ha ocurrido un error, lo sentimos" });
  }
};

export const getAllAuthors = async (_req, res) => {
  try {
    const authors = await authorModel.find({ active: true });
    return res
      .status(200)
      .json({ msg: "Autores obtenidos correctamente", data: authors });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ha ocurrido un error, lo sentimos" });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await authorModel.findOne({ _id: id, active: true });

    if (!author) {
      return res.status(404).json({ msg: "Autor no encontrado" });
    }

    return res.status(200).json({ msg: "Autor encontrado", data: author });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ha ocurrido un error, lo sentimos" });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const data = matchedData(req, { locations: ["body"] });

    const updatedAuthor = await authorModel.findOneAndUpdate(
      { _id: id, active: true },
      { $set: data },
      { returnDocument: "after", runValidators: true },
    );

    if (!updatedAuthor) {
      return res.status(404).json({ msg: "Autor no encontrado" });
    }

    return res
      .status(200)
      .json({ msg: "Autor actualizado correctamente", data: updatedAuthor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ha ocurrido un error, lo sentimos" });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await authorModel.findOne({ _id: id, active: true });

    if (!author) {
      return res.status(404).json({ msg: "Autor no encontrado" });
    }

    author.active = false;
    await author.save();

    return res.status(200).json({
      msg: "Autor desactivado correctamente",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Ha ocurrido un error, lo sentimos" });
  }
};
