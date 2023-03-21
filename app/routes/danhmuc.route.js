module.exports = app => {
    const danhmuc = require("../controllers/admin/danhmuc.controller");
    var router = require("express").Router();

    // Retrieve all danhmuc
    router.get("/", danhmuc.findAll);

    // Show form create danhmuc
    router.get("/create", danhmuc.create);
    // Store danhmuc
    router.post("/", danhmuc.store);

    // Retrieve a single danhmuc with id
    router.get("/edit/:madm", danhmuc.edit);
    // Update a danhmuc with id
    router.put("/:madm", danhmuc.update);

    // Delete a danhmuc with id
    router.get("/delete/:madm", danhmuc.delete);

    // Delete all danhmuc
    router.delete("/delete", danhmuc.deleteAll);
    
    app.use('/danhmuc', router);
    app.get('/500', (req, res) => {
        res.render('err')
    });
    app.get('/404', (req, res) => {
        res.render('404')
    });
}