import BaseController from "./basecontroller.js";
import MyAPIExemple from "../services/myapi.js";

class IndexController extends BaseController {
    constructor() {
        super()
        this.api = new MyAPIExemple()
    }

    sayHello() {
        this.toast("bonjourToast")
    }
}

export default () => window.indexController = new IndexController()
