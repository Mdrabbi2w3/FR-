module.exports = {
  name: 'all',
  description: 'Mention all group members',
  execute: async (client, message, groupMembers) => {
    let text = groupMembers.map(m => '@' + m.id).join(' ');
    client.sendMessage(message.from, text, { mentions: groupMembers });
  }
}
