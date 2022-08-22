import pino from 'pino';

const logger = pino(
  {
    formatters: {
      level: label => {
        return { level: label };
      },
    },
  },
  pino.multistream([{ stream: process.stdout }, { stream: pino.destination(`combinedLog.log`) }]),
);

export default logger;
