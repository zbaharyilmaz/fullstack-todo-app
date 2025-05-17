
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const router = require("express").Router();
const Todo = require('../models/todo.model');

// List
router.get('/todos', async (req, res) => {

    // const result = await Todo.findAll(); // select * from ...
    // const result = await Todo.findAll({ attributes: ['title', 'description'] }); // select title, description from ...
    const result = await Todo.findAndCountAll();

    res.status(200).send({
        error: false,
        result
    });
});

//* CRUD OPERATIONS 

// Create
router.post('/todos', async (req, res) => {

    // const result = await Todo.create({
    //     title: "todo-2",
    //     description: "desc-2",
    //     priority: 0,
    //     isDone: false
    // });

    const result = await Todo.create(req.body);

    res.status(201).send({
        error: false,
        result: result
    });
});

// Read
router.get('/todos/:id', async (req, res) => {

    // const result = await Todo.findOne({ where: { id: req.params.id } });
    const result = await Todo.findByPk(req.params.id);

    res.status(200).send({
        error: false,
        result
    })
});

// Update
router.put('/todos/:id', async (req, res) => {

    // await Todo.update({...newData}, {...where})
    const result = await Todo.update(req.body, { where: { id: req.params.id } }); // returns [1] or [0]

    res.status(202).send({
        error: false,
        result,
        new: await Todo.findByPk(req.params.id)
    });
});

// Delete
router.delete('/todos/:id', async (req, res) => {

    // await Todo.destroy({...where})
    const result = await Todo.destroy({ where: { id: req.params.id } }); // returns 1 or 0

    // res.status(204).send({ // 204 No Content
    //     error: false,
    //     result,
    // });

    if (result) {
        res.sendStatus(204);
    } else {
        // res.status(404).send({
        //     error: true,
        //     message:"Data is not found or it is already deleted.",
        // });
        res.errorStatusCode = 404;
        throw new Error("Data is not found or it is already deleted.");
    };
});

module.exports = router;