let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โ @${nomorown.split`@`[0]} โ
------- ${nameown} -------

๐ฎ *Note:*
โข Owner tidak menerima save contact
โข Owner berhak blockir tanpa alasan
โข Berbicaralah yang sopan & tidak spam
โข Owner Hanya merespon yang berkaitan dengan BOT
โข No Telp`

//------------ BIO
let ppown = 'https://telegra.ph/file/f0b3b869998f703ea4d1f.jpg'
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *Nama RP:* Solomon
${htjava} *Nama RL:* Rahasia
${htjava} *Umur:* 14 Tahun
${htjava} *Kelas:* 8 Smp
${htjava} *Status:* -

${htjava} *Ulang Tahun:* 2 Desember 2007
${htjava} *Alamat:* Indonesia, jawa barat, Karawang
${htjava} *Skills:* 
> Node.JS [0%]
> Python [0%]
> Html [0%]

${htjava} *Instagram:* ${sig}
${htjava} *Github:* ${sgh}
โขยทโโโโโโโโโโโโโโโโโโโโโโโโโโยทโข
`
  let teks = 'P - Pilih dibawah kak ! โ(โ โโขโ-โโขโ โ)โ'
const sections = [
   {
	title: `${htjava} OWNER โโโโโโโโโยทโข`,
	rows: [
	    {title: "๐ฑ โข Nomor", rowId: ".owner nomor"},
	{title: "๐จ โข Biodata", rowId: ".owner bio"},
	{title: "๐ โข Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME โโโโโโโยทโข`,
	rows: [
	    {title: "๐น โข Donasi", rowId: ".owner nomor"},
	{title: "๐ โข Sewa", rowId: ".sewa"},
	{title: "๐ โข Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, sgh, "๐ github", nomorown, '๐ค Nomor', [[null, null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler