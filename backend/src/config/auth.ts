export default {
  Jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};
