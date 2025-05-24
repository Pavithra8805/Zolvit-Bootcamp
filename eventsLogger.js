
const EventEmitter = require('events');

// Custom Logger class
class UserLogger extends EventEmitter {
    constructor() {
        super();
        this.registerEvents();
    }

    // event listeners
    registerEvents() {
        this.on('signup', (user) => {
            console.log(`${this.getTime()} ✅ SIGNUP: ${user.name} (${user.email})`);
        });

        this.on('login', (user) => {
            console.log(`${this.getTime()} 🔐 LOGIN: ${user.name}`);
        });

        this.on('logout', (user) => {
            console.log(`${this.getTime()} 🚪 LOGOUT: ${user.name}`);
        });

        this.on('deleteAccount', (id) => {
            console.log(`${this.getTime()} ✅ ACCOUNT DELETED: User ID = ${id}`);
        });
    }

    // Emit custom event
    log(event, data) {
        this.emit(event, data);
    }

    // get current time
    getTime() {
        return new Date().toLocaleTimeString();
    }
}

// Create a logger instance
const logger = new UserLogger();

// Simulate events
logger.log('signup', { name: 'Pavithra', email: 'Pavithra@email.com' });
logger.log('login', { name: 'Pavithra' });
logger.log('logout', { name: 'Pavithra' });
logger.log('deleteAccount', 'user123');

module.exports = logger;
