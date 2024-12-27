import { world } from '@minecraft/server';
import { applyEffect } from '../utils/effectUtils.js';
import { showMenu } from '../utils/menuUtils.js';

export async function showDebuffMenu(player) {
  const options = [
    { label: '鈍化', effect: 'slowness' },
    { label: '疲労', effect: 'mining_fatigue' },
    { label: 'ダメージ', effect: 'instant_damage' },
    { label: '目まい', effect: 'nausea' },
    { label: '目つぶし', effect: 'blindness' },
    { label: '空腹', effect: 'hunger' },
    { label: '弱体化', effect: 'weakness' },
    { label: '毒', effect: 'poison' },
    { label: '衰弱', effect: 'wither' },
    { label: '浮遊', effect: 'levitation' },
    { label: '致死毒', effect: 'fatal_poison' },
    { label: '凶兆', effect: 'bad_omen' },
    { label: '暗闇', effect: 'darkness' },
  ];

  const selectedIndex = await showMenu(player, options);

  if (selectedIndex !== null) {
    const effect = options[selectedIndex].effect;
    await applyEffect(player, effect);
    player.sendMessage(`${options[selectedIndex].label}を10分間与えました`);
  }
}
