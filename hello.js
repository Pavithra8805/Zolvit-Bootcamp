// Greet the user with name
function sayHello(name) {
    return `🌟 Hello, ${name}!`;
}

// Greet based on time of day
function timeBasedGreeting() {
    const hour = new Date().getHours(); 
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "☀️ Good morning";       
    } else if (hour >= 12 && hour < 16) {
        greeting = "🌤️ Good afternoon";     
    } else if (hour >= 16 && hour < 19) {
        greeting = "🌇 Good evening";        
    } else {
        greeting = "🌙 Good night";          
    }

    return `${greeting}!`;
}

module.exports = {
    sayHello,
    timeBasedGreeting
};
