import Player from '#/engine/entity/Player.js';
import ClientGameMessageHandler from '#/network/game/client/ClientGameMessageHandler.js';
import BootHalt from '#/network/game/client/model/BootHalt.js';

export default class BootHaltHandler extends ClientGameMessageHandler<BootHalt> {
    handle(_message: BootHalt, player: Player): boolean {
        // BootScape: player stopped walking IRL — freeze movement only.
        // Uses bootFrozen flag so combat/interactions continue normally.
        // Do NOT use player.delayed — that blocks scripts, interactions, and combat.
        player.clearWaypoints();
        player.bootFrozen = true;
        return true;
    }
}
