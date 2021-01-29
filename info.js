let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT ARASYA 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec:-
╠➥ Script: @Nurotomo
║
╠➥ Github: yg saya pakai : https://github.com/Arya274/Arya-DN
╠➥ Instagram: @_lemonilo._
╠➥ YouTube: -
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ @ghaniamuhammad_syafiq
╠➥ @unknown.account.error.666
╠➥ ALLAH SWT
╠➥ Nurotomo
╠➥ @arpuncs
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-1329-2687
╠➥ Tsel: 0813-1994-4917
╠➥ Indosat: Gak punya kartu indosat:v
║
║>Request? Wa.me/6281319944917
║
╠═〘 RASYA BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

