export interface PersistanceSettingsProps {
  mongoURI: string;
  swagger_API: string;
  SSL: string;
  nginx: string;
  heroku_nginx: string;
  xstorage: string;
  turn_server: string;
  turn_server_password: string;
}

export default interface IPersistanceSettings {
  get(): PersistanceSettingsProps;
}
