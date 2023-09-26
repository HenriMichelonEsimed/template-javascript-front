class MyAPI {
    constructor() {
        this.apiServer = "https://dummyjson.com"
    }
}

class MyAPIExemple extends MyAPI {
    constructor() {
        super();
        this.apiUrl = "example"
    }

}