/// <reference path="./typings.d.ts" />

import {
  log,
}                  from 'wechaty-puppet-lab'
import {
  FileBox,
}                 from 'file-box-lab'
import qrcode      from 'qrcode'

import { packageJson } from './package-json.js'
import { Readable } from 'stream'

const VERSION = packageJson.version || '0.0.0'

 function qrCodeForChatie (): FileBox {
  const CHATIE_OFFICIAL_ACCOUNT_QRCODE = 'http://weixin.qq.com/r/qymXj7DEO_1ErfTs93y5'
  const name                           = 'qrcode-for-chatie.png'
  let qrStream
  qrcode.toDataURL(CHATIE_OFFICIAL_ACCOUNT_QRCODE).then(function(url){
     qrStream = Readable.from(Buffer.from(url.substring('data:image/png;base64,'.length), 'base64'));
  }).finally 
    return FileBox.fromStream(qrStream as unknown as Readable, name);
}

const MEMORY_SLOT = 'PUPPET_WECHAT'

export {
  VERSION,
  log,
  MEMORY_SLOT,
  qrCodeForChatie,
}
