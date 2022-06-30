const httpProxy = require("express-http-proxy");

const courseServiceProxy = httpProxy("http://localhost:3000");
const orderServiceProxy = httpProxy("http://localhost:2000");

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.get("/", (req, res) => {
      res.json("API GATEWAY CALLED... ");
    });

    this.app.get("/course/", (req, res) => {
      courseServiceProxy(req, res);
    });

    this.app.get("/course/:courseId", (req, res) => {
      courseServiceProxy(req, res);
    });

    // TODO
    this.app.get("/order/", (req, res) => {
      orderServiceProxy(req, res);
    });

    this.app.get("/order/:orderId", (req, res) => {
      orderServiceProxy(req, res);
    });
  }
  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;
