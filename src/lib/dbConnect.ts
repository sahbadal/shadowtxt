import mongoose from 'mongoose'


type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject = {}

const dbConnect = async (): Promise<void> => {
   
    if(connection.isConnected){
        console.log("Already connected to Database");
        return
    }

    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/shadowtxt`)

        connection.isConnected = db.connections[0].readyState
        
        console.log("Database connected successfully");

    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1)
    }

}

export default dbConnect;