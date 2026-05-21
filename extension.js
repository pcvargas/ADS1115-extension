({
    name: "ADS1115 ADC",
    description: "Lectura analógica de alta precisión de 16 bits usando el chip ADS1115 e I2C.",
    author: "Pablo Cesar Vargas Diaz",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png",
    color: "#2C3E50",
    blocks: [
        {
            xml: `
                <block type="ads1115_setup">
                    <value name="sda">
                        <shadow type="math_number">
                            <field name="NUM">21</field>
                        </shadow>
                    </value>
                    <value name="scl">
                        <shadow type="math_number">
                            <field name="NUM">22</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="ads1115_read">
                    <value name="channel">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ],
    chip: [
        "ESP32"
    ]
});
