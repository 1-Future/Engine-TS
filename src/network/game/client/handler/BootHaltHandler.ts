import Player from '#/engine/entity/Player.js';
import ClientGameMessageHandler from '#/network/game/client/ClientGameMessageHandler.js';
import BootHalt from '#/network/game/client/model/BootHalt.js';

export default class BootHaltHandler extends ClientGameMessageHandler<BootHalt> {
    handle(_message: BootHalt, player: Player): boolean {
        // Stop the player at the server's authoritative tile position.
        // Only clearWaypoints — do NOT call unsetMapFlag() so the client's
        // minimap flag is preserved for auto-resume when the player walks again.
        player.clearWaypoints();
        return true;
    }
}
