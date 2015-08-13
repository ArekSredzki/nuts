

module.exports = {
    port: process.env.PORT || 6000,

    github: {
        repository: process.env.GITHUB_REPO,
        token: process.env.GITHUB_TOKEN,
        username: process.env.GITHUB_USERNAME,
        password: process.env.GITHUB_PASSWORD
    }
};