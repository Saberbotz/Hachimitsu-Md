<p align="center">
    <img src="https://telegra.ph/file/f0b3b869998f703ea4d1f.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Ｈａｃｈｉｍｉｔｓｕ - MULTI DEVICE</h1>

#### KELEBIHAN
| Kelebihan | Check |
|--------|--------|
| **Fast Respon** |[✔️](https://github.com/Saberbotz) |
| **No Internet** |[✔️](https://github.com/Saberbotz) |
| **Simple** |[✔️](https://github.com/Saberbotz) |
| **Button template** |[✔️](https://github.com/Saberbotz) |
| **Multi Device** |[✔️](https://github.com/Saberbotz) |

#### FITUR
| Fitur | Check |
|--------|--------|
| **Downloader** |[✔️](https://github.com/Saberbotz) |
| **Internet** |[✔️](https://github.com/Saberbotz) |
| **Game Rpg** |[✔️](https://github.com/Saberbotz) |
| **Nsfw** |[✖️](https://github.com/Saberbotz) |
| **Sticker** |[✔️](https://github.com/Saberbotz) |
| **Game** |[✔️](https://github.com/Saberbotz) |
| **Kerang Ajaib** |[✔️](https://github.com/Saberbotz) |
| **Quotes** |[✔️](https://github.com/Saberbotz) |
| **Anime** |[✔️](https://github.com/Saberbotz) |
| **Premium** |[✖️](https://github.com/Saberbotz) |
| **Tools** |[✔️](https://github.com/Saberbotz) |
| **Exec** |[✔️](https://github.com/Saberbotz) |

## Join Group Official
[![GROUP OFFICIAL](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/IYnoBaNPn4h31TC70sIeLB) 


#### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kannachann/KannaBOT-MD)

#### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

### FOR TERMUX USER
1. Type mentioned below given commands one by one in Termux.
```sh
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/BochilGaming/games-wabot -b multi-device
$ cd games-wabot
$ npm i 
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```sh
$ node .
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Join `Multi Device Beta` > Click on `link device`)
4. Now your bot is ready to rock n roll.

#### If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```
---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & GAMES-WABOT ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/BochilGaming/games-wabot -b multi-device
cd games-wabot
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/BochilGaming/games-wabot -b multi-device
cd games-wabot
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

---------

## How To Customise Message Display
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### want to contribute?
1. fork this repository
2. Change/edit/create what you want. for example you can add features, fix bug, etc
3. **test** before making a pull req!!
4. make a pull req!
5. if your pull req is already in **acc/merge**, you can delete your branch or you can create pull req again :)

---------


### Thanks To 
**Allah SWT**,

**Orang Tua**,

**Semua yang selalu mendukung**


#### Special Thanks to
[![kannachann](https://github.com/kannachann.png?size=100)](https://github.com/kannachann)
[![Adiwajshing](https://github.com/adiwajshing.png?size=100)](https://github.com/adiwajshing)
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

#### RECODER
[![Saberbotz](https://github.com/Saberbotz.png?size=100)](https://github.com/Saberbotz)

#### Contributor

[![sadboy01](https://github.com/sadboy01.png?size=100)](https://github.com/sadboy01)
[![amiruldev20](https://github.com/amiruldev20.png?size=100)](https://github.com/amiruldev20)
[![raselcomel](https://github.com/raselcomel.png?size=100)](https://github.com/raselcomel)
[![Rominaru](https://github.com/Rominaru.png?size=100)](https://github.com/Rominaru)
