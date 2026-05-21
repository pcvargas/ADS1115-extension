import time

class ADS1115:
    def __init__(self, i2c, address=0x48):
        self.i2c = i2c
        self.address = address

    def read_channel(self, channel):
        # Configuración: Conversión única, Ganancia +/-4.096V, 128 SPS
        config = 0x8283 | ((channel + 4) << 12)
        
        data = bytearray(2)
        data[0] = (config >> 8) & 0xFF
        data[1] = config & 0xFF
        
        self.i2c.writeto_mem(self.address, 0x01, data)
        time.sleep_ms(10)
        
        res = self.i2c.readfrom_mem(self.address, 0x00, 2)
        val = (res[0] << 8) | res[1]
        
        if val > 32767:
            val -= 65536
        return val
