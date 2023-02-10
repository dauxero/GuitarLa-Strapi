module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf9jjo9a6gdtmi6hphvg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_vfho'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '48zTyWRBJmYBmd48qnf3mTu4Vadcu5fa'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
