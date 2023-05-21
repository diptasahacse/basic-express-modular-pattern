import { app } from "./app/app";
import logger from "./app/utils/logger";
const { PORT } = process.env;

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      logger.info(`Server is running on port: ${PORT}`);
    });
  } catch (error: any) {
    logger.error(error.message);
  }
};
startServer();
