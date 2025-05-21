// Greet the user with name
function sayHello(name) {
    return `🌟 Hello, ${name}!`;
}

// Greet based on time of day
function timeBasedGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = "☀️ Good morning";
    else if (hour < 18) greeting = "🌤️ Good afternoon";
    else greeting = "🌙 Good evening";

    return `${greeting}!`;
}

module.exports = {
    sayHello,
    timeBasedGreeting
};
