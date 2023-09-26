class MyAPI {
    constructor() {
        this.apiServer = "https://dummyjson.com"
        this.myHeaders = new Headers({
            "api-key-header-example": "MYAPIKEY",
        })
    }
}

class MyAPIExemple extends MyAPI {
    constructor() {
        super();
        this.apiUrl = "example"
    }

}