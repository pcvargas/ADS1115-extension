import time

class ADS1115:
    def __init__(self, i2c, address=0x48):
        self.i2c = i2c
        self.address = address

    def read_channel(self, channel):
        # Configuración: Conversión única, Ganancia +/-4.096V, 128 muestras por segundo
        # Desplazamos el canal (0-3) para activar los multiplexores correspondientes de A0 a A3
        config = 0x8283 | ((channel + 4) << 12)
        
        data = bytearray(2)
        data[0] = (config >> 8) & 0xFF
        data[1] = config & 0xFF
        
        # Escribir en el registro de configuración (0x01)
        self.i2c.writeto_mem(self.address, 0x01, data)
        
        # Tiempo prudencial para que finalice la conversión
        time.sleep_ms(10)
        
        # Leer el registro de conversión de datos (0x00)
        res = self.i2c.readfrom_mem(self.address, 0x00, 2)
        val = (res[0] << 8) | res[1]
        
        # Manejo del complemento a dos para lecturas negativas
        if val > 32767:
            val -= 65536
        return val
