class BaseController {
    constructor() {
        this.setBackButtonView('index')
        this.model = new Model()
    }
    toast(msg) {
        const toast = new bootstrap.Toast(document.getElementById('globalToast'))
        document.getElementById('globalToastMessage').innerHTML = msg
        toast.show()
    }
    displayServiceError() {
        this.toast('Service injoignable ou problème réseau')
    }
    setBackButtonView(view) {
        window.onpopstate = function() {
            navigate(view)
        }; history.pushState({}, '');
    }
}
