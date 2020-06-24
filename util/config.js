exports.MONGODB_URI = checkConfigValue(process.env.MONGODB_URI);
exports.APP_SECRET_KEY = checkConfigValue(process.env.APP_SECRET_KEY);
exports.SENDGRID_API_KEY = checkConfigValue(process.env.SENDGRID_API_KEY);
exports.STRIPE_PUBLISHABLE_KEY = checkConfigValue(process.env.STRIPE_PUBLISHABLE_KEY);
exports.STRIPE_SECRET_KEY = checkConfigValue(process.env.STRIPE_SECRET_KEY);

function checkConfigValue(config) {
    if (!config) {
        throw new Error('YOU MUST SET ALL ENVIRONMENT CONFIGURATIONS');
    }
    return config;
}
