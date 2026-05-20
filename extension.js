module.exports = {
    id: "ads1115-extension",
    name: "ADS1115 MicroPython",
    description: "Módulo ADC de alta precisión I2C para sensores analógicos en MicroPython",
    category: "Sensores",
    author: "Pablo Vargas",
    version: "1.0.0",
    color: "#8E44AD",
    icon: "icon.png",
    blocks: [
        "ads1115_init",
        {
            xml: `<block type="ads1115_read"><field name="CHANNEL">0</field></block>`
        }
    ]
};
