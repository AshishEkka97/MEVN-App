const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controllers/AuthenticationController')
const UsersController = require('./controllers/UsersController')
const RocksController = require('./controllers/RocksController')
const PlantsController = require('./controllers/PlantsController')
const FishesController = require('./controllers/FishesController')
const QueriesControllerPolicy = require('./policies/QueriesControllerPolicy')
const QueriesController = require('./controllers/QueriesController')
const ServicesController = require('./controllers/ServicesController')
const OrdersController = require('./controllers/OrdersController')
const EmailController = require('./controllers/EmailController')
const FileController = require('./controllers/FileController')
const NotificationController = require('./controllers/NotificationController')

var path = require('path');

var express = require('express');
var router  = express.Router();

router.use(express.static(path.join(__dirname,'dist')));

//Routes Start

router.get("/", function(req, res) {
	res.sendFile((path.join(__dirname,"index.html")));
})

//Authentication

router.post("/register",
  AuthenticationControllerPolicy.register,
  AuthenticationController.register
)

router.post("/login", AuthenticationController.login)

router.post("/forgot", AuthenticationController.forgot)

router.post("/reset", AuthenticationController.reset)


//Users

router.get("/users", UsersController.index)

router.get("/users/:userId", UsersController.show)

router.put("/users/:userId", UsersController.put)

router.delete("/users/:userId", UsersController.delete)


//Rocks

router.get("/rocks", RocksController.index)

router.post("/rocks", RocksController.post)

router.get("/rocks/:rockId", RocksController.show)

router.put("/rocks/:rockId", RocksController.put)

router.delete("/rocks/:rockId", RocksController.delete)


//Plants

router.get("/plants", PlantsController.index)

router.post("/plants", PlantsController.post)

router.get("/plants/:plantId", PlantsController.show)

router.put("/plants/:plantId", PlantsController.put)

router.delete("/plants/:plantId", PlantsController.delete)

//Fishes

router.get("/fishes", FishesController.index)

router.post("/fishes", FishesController.post)

router.get("/fishes/:fishId", FishesController.show)

router.put("/fishes/:fishId", FishesController.put)

router.delete("/fishes/:fishId", FishesController.delete)

//Queries

router.get("/queries", QueriesController.index)

router.post("/queries", QueriesController.post)

router.get("/queries/:queryId", QueriesController.show)

router.put("/queries/:queryId", QueriesController.put)

router.delete("/queries/:queryId", QueriesController.delete)

//Services

router.get("/services", ServicesController.index)

router.post("/services", ServicesController.post)

router.get("/services/:serviceId", ServicesController.show)

router.put("/services/:serviceId", ServicesController.put)

router.delete("/services/:serviceId", ServicesController.delete)

//Orders

router.get("/orders", OrdersController.index)

router.post("/orders", OrdersController.post)

router.get("/orders/:orderId", OrdersController.show)

router.put("/orders/:orderId", OrdersController.put)

//Email Verifiaction

router.post("/send/:uId", EmailController.send)

router.get("/verify/:uId", EmailController.verify)

//File Upload

router.post("/upload/", FileController.save)

//Notification

router.get("/updates", NotificationController.index)

/*--------------------Routing Over----------------------------*/


module.exports = router;