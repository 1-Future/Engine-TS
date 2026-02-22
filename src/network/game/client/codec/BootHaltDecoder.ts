import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import BootHalt from '#/network/game/client/model/BootHalt.js';

export default class BootHaltDecoder extends ClientGameMessageDecoder<BootHalt> {
    prot = ClientGameProt.BOOT_HALT;

    decode() {
        return new BootHalt();
    }
}
