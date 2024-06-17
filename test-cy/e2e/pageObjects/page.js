export default class Page {
    constructor() {
        this.title = 'test'
    }

    open(path) {
        browser.url(path)
    }
}