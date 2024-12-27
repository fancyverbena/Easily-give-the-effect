export async function applyEffect(player, effect) {
    const effectMap = {
      speed: 'effect @s speed 600 5 true',
      haste: 'effect @s haste 600 5 true',
      strength: 'effect @s strength 600 5 true',
      instant_health: 'effect @s instant_health 600 5 true',
      jump_boost: 'effect @s jump_boost 600 5 true',
      regeneration: 'effect @s regeneration 600 5 true',
      resistance: 'effect @s resistance 600 5 true',
      fire_resistance: 'effect @s fire_resistance 600 5 true',
      water_breathing: 'effect @s water_breathing 600 5 true',
      night_vision: 'effect @s night_vision 600 5 true',
      health_boost: 'effect @s health_boost 600 5 true',
      absorption: 'effect @s absorption 600 5 true',
      saturation: 'effect @s saturation 600 5 true',
      conduit_power: 'effect @s conduit_power 600 5 true',
      slow_falling: 'effect @s slow_falling 600 5 true',
      village_hero: 'effect @s village_hero 600 5 true',
      invisibility: 'effect @s invisibility 600 5 true',
      slowness: 'effect @s slowness 600 5 true',
      mining_fatigue: 'effect @s mining_fatigue 600 5 true',
      instant_damage: 'effect @s instant_damage 600 5 true',
      nausea: 'effect @s nausea 600 5 true',
      blindness: 'effect @s blindness 600 5 true',
      hunger: 'effect @s hunger 600 5 true',
      weakness: 'effect @s weakness 600 5 true',
      poison: 'effect @s poison 600 5 true',
      wither: 'effect @s wither 600 5 true',
      levitation: 'effect @s levitation 600 5 true',
      fatal_poison: 'effect @s fatal_poison 600 5 true',
      bad_omen: 'effect @s bad_omen 600 5 true',
      darkness: 'effect @s darkness 600 5 true'
    };
  
    if (effectMap[effect]) {
      await player.runCommandAsync(effectMap[effect]);
    }
  }
  