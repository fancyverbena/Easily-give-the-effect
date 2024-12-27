import { world } from '@minecraft/server';
import { applyEffect } from '../utils/effectUtils.js';
import { showMenu } from '../utils/menuUtils.js';

export async function showBuffMenu(player) {
  const options = [
    { label: 'スピード', effect: 'speed' },
    { label: '勤勉', effect: 'haste' },
    { label: '力', effect: 'strength' },
    { label: '回復', effect: 'instant_health' },
    { label: '跳躍', effect: 'jump_boost' },
    { label: '再生', effect: 'regeneration' },
    { label: '耐性', effect: 'resistance' },
    { label: '耐火', effect: 'fire_resistance' },
    { label: '水中呼吸', effect: 'water_breathing' },
    { label: '暗視', effect: 'night_vision' },
    { label: 'HPブースト', effect: 'health_boost' },
    { label: '吸収', effect: 'absorption' },
    { label: '満腹度', effect: 'saturation' },
    { label: 'コンジットパワー', effect: 'conduit_power' },
    { label: '低速落下', effect: 'slow_falling' },
    { label: '村の英雄', effect: 'village_hero' },
    { label: '透明', effect: 'invisibility' },
  ];

  const selectedIndex = await showMenu(player, options);

  if (selectedIndex !== null) {
    const effect = options[selectedIndex].effect;
    await applyEffect(player, effect);
    player.sendMessage(`${options[selectedIndex].label}を10分間与えました`);
  }
}
