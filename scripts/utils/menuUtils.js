import { ActionFormData } from '@minecraft/server-ui';

export async function showMenu(player, options) {
  const form = new ActionFormData();
  options.forEach(option => form.button(option.label));
  const { canceled, selection } = await form.show(player);
  return canceled ? null : selection;
}
