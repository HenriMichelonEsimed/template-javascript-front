import BaseController from "./basecontroller.js";
import MyExampleRoutes from "../services/myexampleroutes.js";

class IndexController extends BaseController {
    constructor() {
        super()
        this.api = new MyExampleRoutes()
    }

    sayHello() {
        this.toast("bonjourToast")
    }
}

export default () => window.indexController = new IndexController()
