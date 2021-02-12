import { connect } from "mongoose";
export default async () => {
    try {
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log("MongoDB Conected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
