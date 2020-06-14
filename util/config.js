function checkConfigValue(config) {
    if (config) {
        return config;
    } else {
        throw new Error('YOU MUST SET ALL ENVIRONMENT CONFIGURATIONS');
    }
}

// db connection
exports.MONGODB_URI = checkConfigValue(process.env.MONGODB_URI);

// app secret key
exports.SECRET_KEY = checkConfigValue(process.env.SECRET_KEY);

// send emails
exports.SENDGRID_API_KEY = checkConfigValue(process.env.SENDGRID_API_KEY);

// payments
exports.STRIPE_PUBLISHABLE_KEY = checkConfigValue(process.env.STRIPE_PUBLISHABLE_KEY);
exports.STRIPE_SECRET_KEY = checkConfigValue(process.env.STRIPE_SECRET_KEY);
