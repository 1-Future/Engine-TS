import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import BootResume from '#/network/game/client/model/BootResume.js';

export default class BootResumeDecoder extends ClientGameMessageDecoder<BootResume> {
    prot = ClientGameProt.BOOT_RESUME;

    decode() {
        return new BootResume();
    }
}
