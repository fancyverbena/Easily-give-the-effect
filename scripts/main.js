import { world } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui'; // これを追加
import { showBuffMenu } from './buffMenu/buffMenu.js';
import { showDebuffMenu } from './debuffMenu/debuffMenu.js';
import { showClearMenu } from './clearMenu/clearMenu.js';

world.afterEvents.itemUse.subscribe(event => {
  const player = event.source;

  if (event.itemStack.typeId === 'minecraft:brewing_stand') {
    showMainMenu(player).catch(console.error);
  }
});

/** @param {Player} player */
async function showMainMenu(player) {
  const options = [
    { label: 'バフ', action: () => showBuffMenu(player) },
    { label: 'デバフ', action: () => showDebuffMenu(player) },
    { label: 'クリア', action: () => showClearMenu(player) },
  ];

  const form = new ActionFormData();
  options.forEach(option => form.button(option.label));
  const { canceled, selection } = await form.show(player);

  if (canceled) return;

  // 選択したメニューを表示
  if (selection !== null) {
    await options[selection].action();
  }
}
