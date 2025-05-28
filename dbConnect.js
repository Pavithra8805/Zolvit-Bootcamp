import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");

        const db = client.db("testDB");
        const collection = db.collection("users");

        const insertResult = await collection.insertOne({
            name: "Mehana",
            age: 28,
            occupation: "Ice Cream Shop Owner",
            shopName: "Frozen Delights",
            favoriteFlavors: ["Mango", "Butterscotch", "Chocolate Chip"],
            createdAt: new Date()
        });
        console.log("✅ Inserted user ID:", insertResult.insertedId);


        const users = await collection.find().toArray();
        console.log("✅ Retrieved Users:", users);
    } catch (err) {
        console.error("❌ Error:", err);
    } finally {
        await client.close();
    }
}

main();
