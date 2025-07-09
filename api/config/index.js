module.exports = {
    "LOG_LEVEL":process.env.LOG_LEVEL || "debug",
    // LOG_LEVEL ı oku eğer yoksa bu log_level stringine debug değerini ata

    "CONNECTION_STRING":process.env.CONNECTION_STRING || "mongodb://localhost:27017/project-base"
    // varsa böyle birsey okusun yoksa verilen adrese bağlansın
}