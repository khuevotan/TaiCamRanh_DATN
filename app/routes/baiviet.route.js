module.exports = app => {
    const baiviet = require("../controllers/admin/baiviet.controller");
    var router = require("express").Router();

    // Retrieve all baiviet
    router.get("/", baiviet.findAll);

    // // Show form create baiviet
    // router.get("/create", baiviet.create);
    // // Store baiviet
    // router.post("/", baiviet.store);

    // // Retrieve a single baiviet with id
    // router.get("/edit/:madv", baiviet.edit);
    // // Update a baiviet with id
    // router.put("/:madv", baiviet.update);

    // // Delete a baiviet with id
    // router.get("/delete/:madv", baiviet.delete);

    // // Delete all baiviet
    // router.delete("/delete", baiviet.deleteAll);
    
    // app.use('/baiviet', router);
    // app.get('/500', (req, res) => {
    //     res.render('err')
    // });
    // app.get('/404', (req, res) => {
    //     res.render('404')
    // });
    app.use('/admin/baiviet', router);
}