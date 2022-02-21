class IndexController extends BaseController {
    constructor() {
        super()
        this.model = new Model()
    }
}

window.indexController = new IndexController()
