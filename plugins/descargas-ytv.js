import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππππππ½π ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\nπππππ πππ ππππππ½π ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ππ ππππΌ πΏπππΎπΌπππΌππΏπ ππ πππΏππ, ππππππ ππ πππππππ πππ ππΌπππ\n\nππππ πππΏππ ππ πΏππππππΌπΏπππ, ππΌππ πΌ ππππππ ππππΌππ`, fkontak, m)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `β­ββ°  ${wm}  β±ββ¬£
β π ππππππ | πππππ
β ${ttl}
ββββββββββββββ
β π ππππ | ππππ
β ${size}
β°ββββββ° *π  ${vs}* β±βββββ¬£`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `β­ββ°  ${wm}  β±ββ¬£
β π€ ππππππ | πππππ
β ${n}
ββββββββββββββ
β π§‘ ππππ | ππππ
β ${n3}
β°ββββββ° *π  ${vs}* β±βββββ¬£`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}ππ πππππ½ππ πππ ππ πΌππΎππππ πππΌ πππ ππππΌπΏπ. πππππππ πΎππ ππππΌ πππΎπππ πΏπ πΏπππΎπΌπππΌ\n\nππ ππ ππππππ½ππ πππΌπ πππ ππππ ππ ππππ πππΌππ. πππ πΌππππππ`, m)}
}}
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i
export default handler
