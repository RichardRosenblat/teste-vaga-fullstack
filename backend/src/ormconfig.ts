import { MongooseModuleOptions } from '@nestjs/mongoose';

const databaseConfig: { uri: string; options?: MongooseModuleOptions } = {
  uri:
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/teste-vaga-fullstack',
  options: {
    retryAttempts: 1,
  },
};

export default databaseConfig;
