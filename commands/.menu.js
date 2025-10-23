module.exports = {
  name: 'menu',
  description: 'Show bot commands',
  execute: async (client, message) => {
    let text = `Available commands:\n!all - Mention all\n.menu - Show this menu`;
    client.sendMessage(message.from, text);
  }
}
