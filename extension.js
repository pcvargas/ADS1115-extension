module.exports = {
    id: "ads1115-extension", // ¡Obligatorio! Define el nombre de la carpeta de instalación
    name: "ADS1115 Pro",
    description: "Módulo ADC de alta precisión I2C para sensores analógicos",
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
