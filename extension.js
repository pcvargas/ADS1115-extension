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
            text: "Inicializar ADS1115 I2C SDA [SDA] SCL [SCL]",
            arguments: {
                SDA: {
                    type: "dropdown",
                    options: {
                        "21": "21",
                        "22": "22",
                        "4": "4",
                        "5": "5"
                    },
                    default: "21"
                },
                SCL: {
                    type: "dropdown",
                    options: {
                        "22": "22",
                        "21": "21",
                        "14": "14",
                        "15": "15"
                    },
                    default: "22"
                }
            },
            generator: (args) => {
                // Genera el código MicroPython mapeando directamente los argumentos limpios
                return `import machine\nfrom ads1115 import ADS1115\ntry:\n    i2c_bus\nexcept NameError:\n    i2c_bus = machine.I2C(0, sda=machine.Pin(${args.SDA}), scl=machine.Pin(${args.SCL}))\nadc_ext = ADS1115(i2c_bus)\n`;
            }
        },
        {
            opcode: "ads1115_read",
            blockType: "reporter",
            text: "Leer Canal [CHANNEL] del ADS1115",
            arguments: {
                CHANNEL: {
                    type: "dropdown",
                    options: {
                        "A0": "0",
                        "A1": "1",
                        "A2": "2",
                        "A3": "3"
                    },
                    default: "0"
                }
            },
            generator: (args) => {
                // En microBlock v3, los reporteros devuelven simplemente el string de la expresión
                return `adc_ext.read_channel(${args.CHANNEL})`;
            }
        }
    ]
};
