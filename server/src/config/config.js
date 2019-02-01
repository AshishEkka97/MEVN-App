module.exports = {
	port: 8081,
	db: {
    database: process.env.DB_NAME || 'wooscape',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      timezone: '+05:30'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  email: {
    user: "s.kumawat9907@gmail.com",
    password: "ILOVEMYMOM&DAD8982"
  }
}