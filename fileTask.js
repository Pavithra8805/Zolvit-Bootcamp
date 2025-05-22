const fs = require('fs');

const contentToWrite = `📅 Developer Notes - Hands-on Task

Today’s Goal:
- ✅ Read from a file using fs.readFileSync
- ✅ Write to a file using fs.writeFileSync
- ✅ Print content to the console

Learned Concepts:
- Node.js has a powerful 'fs' module
- Reading and writing files is super easy
- Practicing with actual tasks helps build confidence 💪

Motivation of the Day:
"Start where you are. Use what you have. Do what you can."
`;

// Write content to 'notes.txt'
fs.writeFile('notes.txt', contentToWrite, function (err) {
    if (err) {
        console.error("❌ Error writing to file:", err);
        return;
    }
    console.log("✅ notes.txt written successfully.\n");

    // Read the content from 'notes.txt'
    fs.readFile('notes.txt', 'utf8', function (err, data) {
        if (err) {
            console.error("❌ Error reading file:", err);
        } else {
            console.log("📄 Content of notes.txt:\n");
            console.log(data);
        }
    });
});

