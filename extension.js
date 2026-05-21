module.exports = {
    id: "ads1115_esp32_adc",
    name: "ADS1115 ADC 16-Bit",
    description: "Lectura analógica de alta precisión (16 bits) usando el módulo ADS1115 e I2C en la ESP32.",
    version: "1.0.0",
    author: "Pablo Cesar Vargas Diaz",
    category: "Sensors",
    color: "#2C3E50",
    icon: "/static/icon.png",
    modules: [
        "modules/ads1115.py"
    ],
    blocks: [
        {
            opcode: "ads1115_init",
            blockType: "command",
            messageId: "Inicializar ADS1115 I2C SDA %1 SCL %2",
            args0: [
                {
                    type: "field_dropdown",
                    name: "SDA",
                    options: [ ["21","21"], ["22","22"], ["4","4"], ["5","5"] ]
                },
                {
                    type: "field_dropdown",
                    name: "SCL",
                    options: [ ["22","22"], ["21","21"], ["14","14"], ["15","15"] ]
                }
            ],
            previousStatement: null,
            nextStatement: null,
            color: "#2C3E50",
            tooltip: "Configura e inicializa el bus I2C para el módulo ADS1115 en la ESP32.",
            generator: function(block, python) {
                const sda = block.getFieldValue('SDA');
                const scl = block.getFieldValue('SCL');
                return `import machine\nfrom ads1115 import ADS1115\ni2c_bus = machine.I2C(0, sda=machine.Pin(${sda}), scl=machine.Pin(${scl}))\nadc_ext = ADS1115(i2c_bus)\n`;
            }
        },
        {
            opcode: "ads1115_read",
            blockType: "reporter",
            messageId: "Leer Canal %1 del ADS1115",
            args0: [
                {
                    type: "field_dropdown",
                    name: "CHANNEL",
                    options: [ ["A0","0"], ["A1","1"], ["A2","2"], ["A3","3"] ]
                }
            ],
            output: "Number",
            color: "#2C3E50",
            tooltip: "Retorna el valor analógico crudo (0 a 32767) del canal seleccionado.",
            generator: function(block, python) {
                const channel = block.getFieldValue('CHANNEL');
                return [`adc_ext.read_channel(${channel})`, 0];
            }
        }
    ]
};
