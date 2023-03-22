// module.exports = app => {
//     const dichvu = require("../controllers/admin/dichvu.controller");
//     var router = require("express").Router();

//     // Retrieve all dichvu
//     router.get("/", dichvu.findAll);

//     // Show form create dichvu
//     router.get("/create", dichvu.create);
//     // Store dichvu
//     router.post("/", dichvu.store);

//     // Retrieve a single dichvu with id
//     router.get("/edit/:madv", dichvu.edit);
//     // Update a dichvu with id
//     router.put("/:madv", dichvu.update);

//     // Delete a dichvu with id
//     router.get("/delete/:madv", dichvu.delete);

//     // Delete all dichvu
//     router.delete("/delete", dichvu.deleteAll);
    
//     app.use('/dichvu', router);
//     app.get('/500', (req, res) => {
//         res.render('err')
//     });
//     app.get('/404', (req, res) => {
//         res.render('404')
//     });
// }