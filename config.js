const fs = require("fs")
const chalk = require("chalk")

// Setting Owner
global.author = "Kanzz"
global.owner = ['6283104268179', '12894309810', '6282322695602']
global.nomersaya = '6283104268179@s.whatsapp.net'
global.ig = "https://instagram.com/kanzgt"
global.region = 'DUNIA ISEKAI'

// Setting Bot
global.namabot = "KanzzBot"
global.sessionName = "session"
global.keyopenai = "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" // ganti dengan apikey openai
global.mongoDB = "mongodb+srv://mykanz:A01LqhzTU4u1KsOR@cluster0.ggpas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" // ganti dengan url mongo
global.limitDL = 209715200// 200 MB
global.max_limit = 4

// Setting Limit
global.limit = {
    prem: "unlimited",
    free: 0
}

// Setting Limit
global.balance = {
    prem: 0,
    free: 0
}

// Setting Packname Stiker 
global.packname = "©κᴀɴᴢʙᴏт"
global.packname2 = "s.id/kanzz"
global.isAvatar = 0

// REGEXX //
global.YtIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/
global.IgIdRegex = /((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))/
global.FbIdRegex = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/
global.TwitIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|mobile\.|))(?:twitter\.com)\/([a-zA-Z0-9-_\.]{3,20})\/(?:status)\/([?=0-9a-z]{15,25})([a-zA-Z=0-9]{3,6})/
global.TtIdRegex = /(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
