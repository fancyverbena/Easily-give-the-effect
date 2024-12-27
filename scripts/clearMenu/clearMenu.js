import { world } from '@minecraft/server';
import { showMenu } from '../utils/menuUtils.js';

export async function showClearMenu(player) {
  const options = [
    { label: 'クリア', effect: 'clear' }
  ];

  const selectedIndex = await showMenu(player, options);

  if (selectedIndex !== null) {
    await player.runCommandAsync('effect @s clear');
    player.sendMessage('クリアしました');
  }
}
