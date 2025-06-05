import { Injectable } from '@nestjs/common';

@Injectable()
export default abstract class AbstractEnvSettings<T> {
  protected getFullConfig(): any {
    return {
      presentation: {
        port: parseInt(process.env.API_PORT),
      },
      persistance: {
        mongoURI: process.env.MONGO_URI ? process.env.MONGO_URI : '',
        swagger_API: process.env.SWAGGER_API
          ? process.env.SWAGGER_API
          : 'false',
        SSL: process.env.SSL ? process.env.SSL : 'false',
        nginx: process.env.nginx ? process.env.nginx : 'false',
        heroku_nginx: process.env.heroku_nginx
          ? process.env.heroku_nginx
          : 'false',
        xstorage: process.env.xstorage ? process.env.xstorage : 'false',
        turn_server: process.env.TURN_SERVER ? process.env.TURN_SERVER : 'false',
        turn_server_password: process.env.TURN_SERVER_PASSWORD ? process.env.TURN_SERVER_PASSWORD : '',
      },
    };
  }

  public abstract get(): T;
}
