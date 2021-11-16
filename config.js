const env = process.env;

export const nodeEnv = env.NODE.ENV || 'development'
export default {
    port: env.PORT || 8080
}