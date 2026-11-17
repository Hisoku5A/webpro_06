const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];

let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"null", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

let yoyos = [
  { id:1, code:"1A01", name:"アクト3", color:"シルバー", Bearing:"ミネベアカーブベアリング", string:"Jストリング(イエロー)", long:"床からみぞおちまで", pads:"SGHG硬度70", Equipment:"-", data:"" },
  { id:2, code:"1A02", name:"プラグマ", color:"ブラック×レインボースプラッシュ", Bearing:"C3カーブベアリング", string:"Kストリング ノーマル(ホワイト)", long:"床からみぞおちまで", pads:"SGHG硬度70", Equipment:"-", data:"" },
  { id:3, code:"1A03", name:"レインフライEX", color:"マットブラック×パープルリム", Bearing:"初期搭載カーブベアリング", string:"Jストリング(イエロー)", long:"床からみぞおちまで", pads:"SGHG硬度60", Equipment:"-", data:"" },
  { id:4, code:"2A01", name:"ループ720", color:"オレンジ/グリーン", Bearing:"赤×青スペーサー", string:"22P2N(ホワイト)", long:"81cm", pads:"", Equipment:"-", data:"" },
  { id:5, code:"2A02", name:"ループ720", color:"オレンジ/グリーン", Bearing:"赤×青スペーサー", string:"22P2N(ホワイト)", long:"81cm", pads:"", Equipment:"-", data:"" },
  { id:6, code:"3A01", name:"エンタングル2", color:"raw", Bearing:"ノンブランド曲面加工ベアリング", string:"Jストリング(ホワイト)", long:"84cm", pads:"SGHG硬度40", Equipment:"-", data:"" },
  { id:7, code:"3A02", name:"エンタングル2", color:"raw", Bearing:"ノンブランド曲面加工ベアリング", string:"Jストリング(ホワイト)", long:"84cm", pads:"SGHG硬度40", Equipment:"-", data:"" },
  { id:8, code:"4A01", name:"コントレイル", color:"イエロー/ゴールドハブ", Bearing:"C3フラットベアリング", string:"22P2N(ホワイト)", long:"105cm", pads:"REWIND JAPANパッド ノーマル", Equipment:"-", data:"" },
  { id:9, code:"4A02", name:"コントレイル", color:"ミントグリーン/シルバーハブ", Bearing:"C3フラットベアリング", string:"22P2N(ホワイト)", long:"105cm", pads:"REWIND JAPANパッド ノーマル", Equipment:"-", data:"" },
  { id:10, code:"5A01", name:"アクト3", color:"ブルー", Bearing:"C3カーブベアリング", string:"22P2N(ホワイト)", long:"93cm", pads:"SGHG硬度40", Equipment:"ponウエイト", data:"" },
  { id:11, code:"5A02", name:"アクト3", color:"ブルー", Bearing:"C3カーブベアリング", string:"22P2N(ホワイト)", long:"93cm", pads:"SGHG硬度40", Equipment:"ponウエイト", data:"" },
  { id:12, code:"5A03", name:"スピーダホリックXX", color:"グロウ", Bearing:"C3カーブベアリング", string:"22P2N(ホワイト)", long:"93cm", pads:"SGHG硬度40", Equipment:"ponウエイト", data:"" },
  { id:13, code:"5A04", name:"code3", color:"ネイビー(sketch)", Bearing:"C3カーブベアリング", string:"Jストリング(イエロー)", long:"93cm", pads:"SGHG硬度40", Equipment:"ponウエイト", data:""},
]

app.get("/keiyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db2', { data: station });
});

app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', { data: station2 });
});

app.get("/keiyo2/:number",(req,res)=>{
  const number = req.params.number;
  const dettail = station2[number];
  res.render('keiyo2_detail', { data: dettail });
});

app.get("/yoyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('yoyo', { data: yoyos });
});

app.get("/yoyo/:number",(req,res)=>{
  const number = req.params.number;
  const dettail = yoyos[number];
  res.render('yoyo_detail', { data: dettail });
});

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 以下の数行は人間の勝ちの場合の処理なので，
  // 判定に沿ってあいこと負けの処理を追加する
  judgement = '勝ち';
  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
  res.redirect("/keiyo");
});

app.get("/yoyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let color = req.query.color;
  let Bearing = req.query.Bearing;
  let string = req.query.string;
  let long = req.query.long;
  let pads = req.query.pads;
  let Equipment = req.query.Equipment;
  let data = req.query.data;
  let newdata = { id: id, code: code, name: name, color: color, Bearing: Bearing, string: string, long: long, pads: pads, Equipment: Equipment, data: data };
  yoyos.push( newdata );
  res.redirect("/yoyo");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
