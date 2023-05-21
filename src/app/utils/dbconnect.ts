import mongoose from "mongoose";
import logger from "./logger";
const { URI } = process.env;
const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      logger.error("URI is not found in ENV");
      //   we does not return anything that's way exit the process
      process.exit(1);
    }

    // Connect
    await mongoose.connect(URI);

    logger.info("Database is connected")
  } catch (error: any) {
    logger.error(error.message);
  }
};

export { dbConnect };
