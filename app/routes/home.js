var controller = require("../controllers/home")();

//app = instancia do express
module.exports = function(app) {
    app.get("/", controller.index);
    app.get("/index", controller.index);
};