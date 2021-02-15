module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3100),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b396796047d79079342c4ba9ad0c7905'),
    },
  },
});
