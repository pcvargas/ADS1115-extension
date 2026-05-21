module.exports = {
    id: "ads1115_esp32_adc",
    name: "ADS1115 ADC 16-Bit",
    description: "Extensión para leer canales analógicos de alta precisión usando el módulo ADS1115 e I2C en ESP32.",
    version: "1.0.0",
    author: "Pablo Cesar Vargas Diaz",
    category: "Sensors",
    color: "#2C3E50",
    icon: "/static/icon.png",
    blocks: [
        "ads1115_init",
        "ads1115_read"
    ],
    modules: [
        "modules/ads1115.py"
    ]
};
