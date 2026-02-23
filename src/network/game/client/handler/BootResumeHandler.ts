import Player from '#/engine/entity/Player.js';
import ClientGameMessageHandler from '#/network/game/client/ClientGameMessageHandler.js';
import BootResume from '#/network/game/client/model/BootResume.js';

export default class BootResumeHandler extends ClientGameMessageHandler<BootResume> {
    handle(_message: BootResume, player: Player): boolean {
        // BootScape: player started walking IRL — unfreeze movement.
        player.bootFrozen = false;
        return true;
    }
}
