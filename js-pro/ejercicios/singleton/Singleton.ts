class Singleton {
    private static instance: Singleton

    private constructor () {
        // init
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton()
        }
        
        return this.instance
    }
}

export default Singleton