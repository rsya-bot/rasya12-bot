let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088213292687]
│ • Telkomsel [081319944917]
│ • Gopay [-]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281319944917
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
