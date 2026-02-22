import Player from '#/engine/entity/Player.js';
import ClientGameMessageHandler from '#/network/game/client/ClientGameMessageHandler.js';
import BootHalt from '#/network/game/client/model/BootHalt.js';

export default class BootHaltHandler extends ClientGameMessageHandler<BootHalt> {
    handle(_message: BootHalt, player: Player): boolean {
        // Stop the player at the server's authoritative tile position.
        // clearInteraction cancels pending combat/NPC approach actions that would
        // otherwise re-queue waypoints on the next tick after we clear them.
        // Do NOT call unsetMapFlag — the client's minimap flag is preserved
        // for auto-resume when the player starts walking again.
        player.clearInteraction();
        player.clearWaypoints();
        return true;
    }
}
