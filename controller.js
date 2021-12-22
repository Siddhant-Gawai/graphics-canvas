var Jimp = require("jimp");
var Canvas = require("canvas");
var path = require("path");
var fs = require("fs");

const fontURLLocal = "./fonts/poppins.ttf";

const urlp = "./poster/";

const furl = "http://localhost/graphicsAdmin/uposters/";

var mPosterFunction = {
  getMPoster800: () => {
    console.log("Hello World");
    const otp = Math.floor(100000 + Math.random() * 900000);
    imageManipulation800(
      "./images/userlogo.png",
      "Auranagbad Software Park",
      "Arkarz Internet Pvt Ltd",
      "Siddhant Gawai",
      "8766492541",
      "mesiddhantgawai@gmail.com",
      "./images/800.jpg",
      "#000000",
      "./fonts/poppins.ttf"
    );
    async function imageManipulation800(
      logoImage,
      address,
      shop,
      name,
      phone,
      email,
      poster,
      color,
      font
    ) {
      let userlogo = await Jimp.read(logoImage);
      userlogo = userlogo.resize(120, 120);
      let bgPoster = await Jimp.read(poster);
      let phonelogo = await Jimp.read("./images/phone.png");
      let emaillogo = await Jimp.read("./images/email.png");
      bgPoster = bgPoster.resize(800, 800);
      phonelogo = phonelogo.resize(20, 20);
      emaillogo = emaillogo.resize(20, 20);
      bgPoster.composite(phonelogo, 180, 760);
      bgPoster.composite(emaillogo, 370, 760);
      await bgPoster.writeAsync(urlp + otp + ".png");

      function fontFile(name) {
        // return path.join(fontURLLocal, name);
        return path.join(name);
      }
      Canvas.registerFont(fontFile(font), {
        family: "regular",
      });

      var canvas = Canvas.createCanvas(800, 800);
      var ctx = canvas.getContext("2d");

      var Image = Canvas.Image;
      var img = new Image();
      img.src = (await urlp) + otp + ".png";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.save();
      // Call US
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.textAlign = "center";
      ctx.font = "18px " + font.split(".")[0];
      ctx.translate(-220, 400);
      ctx.rotate(-0.5 * Math.PI);
      var rText = "Call US: " + phone;
      ctx.fillText(rText, 20, 260);
      ctx.restore();
      // User Name
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "28px " + font.split(".")[0];
      ctx.fillText(name, 400, 740, 460, 50, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // phone
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.font = "18px " + font.split(".")[0];
      ctx.fillText(phone, 200, 775, 200, 70, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // email
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.font = "18px " + font.split(".")[0];
      ctx.fillText(email, 390, 775, 200, 70, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // shop name
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "32px " + font.split(".")[0];
      ctx.fillText(shop, 400, 50, 520, 60);
      // address
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "18px " + font.split(".")[0];
      ctx.fillText(address, 400, 70, 520, 60);

      Canvas.loadImage(logoImage).then((image) => {
        ctx.drawImage(image, 18, 18, 120, 120);
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(urlp + otp + ".png", buffer);
        console.log("Done");
      });
    }
  },
  getMPoster600: () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    imageManipulation800(
      "./images/userlogo.png",
      "Aurangabad Software Park",
      "Arkarz Internet Pvt Ltd",
      "Siddhant Gawai",
      "8766492541",
      "mesiddhantgawai@gmail.com",
      "./images/600.jpg",
      "#000000",
      "./fonts/poppins.ttf"
    );
    async function imageManipulation800(
      logoImage,
      address,
      shop,
      name,
      phone,
      email,
      poster,
      color,
      font
    ) {
      let userlogo = await Jimp.read(logoImage);
      userlogo = userlogo.resize(120, 120);
      let bgPoster = await Jimp.read(poster);
      let phonelogo = await Jimp.read("./images/phone.png");
      let emaillogo = await Jimp.read("./images/email.png");
      bgPoster = bgPoster.resize(800, 600);
      phonelogo = phonelogo.resize(20, 20);
      emaillogo = emaillogo.resize(20, 20);
      bgPoster.composite(phonelogo, 180, 550);
      bgPoster.composite(emaillogo, 370, 550);
      await bgPoster.writeAsync(urlp + otp + ".png");
      function fontFile(name) {
        // return path.join(fontURLLocal, name);
        return path.join(name);
      }
      Canvas.registerFont(fontFile(font), {
        family: "regular",
      });

      var canvas = Canvas.createCanvas(800, 600);
      var ctx = canvas.getContext("2d");

      var Image = Canvas.Image;
      var img = new Image();
      img.src = (await urlp) + otp + ".png";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.save();
      // Call US
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.textAlign = "center";
      ctx.font = "18px " + font.split(".")[0];
      ctx.translate(-220, 300);
      ctx.rotate(-0.5 * Math.PI);
      var rText = "Call US: " + phone;
      ctx.fillText(rText, 20, 198);
      ctx.restore();
      // shop name
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "32px " + font.split(".")[0];
      ctx.fillText(shop, 400, 50, 520, 60);
      // address
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "18px " + font.split(".")[0];
      ctx.fillText(address, 400, 70, 520, 60);
      // User Name
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "28px " + font.split(".")[0];
      ctx.fillText(name, 400, 540, 460, 50, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // phone
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.font = "14px " + font.split(".")[0];
      ctx.fillText(phone, 200, 565, 200, 70, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // email
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.font = "14px " + font.split(".")[0];
      ctx.fillText(email, 390, 565, 200, 70, {
        minFontSize: 14,
        maxFontSize: 20,
      });

      Canvas.loadImage(logoImage).then((image) => {
        ctx.drawImage(image, 18, 18, 120, 120);
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(urlp + otp + ".png", buffer);
        console.log("Done");
      });
    }
  },
  getMPoster1000:() =>{
    const otp = Math.floor(100000 + Math.random() * 900000);
    imageManipulation800(
      "./images/userlogo.png",
      "Aurangabad Software Park",
      "Arkarz Internet Pvt Ltd",
      "Siddhant Gawai",
      "8766492541",
      "mesiddhantgawai@gmail.com",
      "./images/1000.png",
      "#000000",
      "./fonts/poppins.ttf"
    );
    async function imageManipulation800(
      logoImage,
      address,
      shop,
      name,
      phone,
      email,
      poster,
      color,
      font
    ) {
      let userlogo = await Jimp.read(logoImage);
      userlogo = userlogo.resize(120, 120);
      let bgPoster = await Jimp.read(poster);
      let phonelogo = await Jimp.read("./images/phone.png");
      let emaillogo = await Jimp.read("./images/email.png");
      bgPoster = bgPoster.resize(800, 1000);
      phonelogo = phonelogo.resize(20, 20);
      emaillogo = emaillogo.resize(20, 20);
      bgPoster.composite(phonelogo, 180, 950);
      bgPoster.composite(emaillogo, 370, 950);
      await bgPoster.writeAsync(urlp + otp + ".png");
      function fontFile(name) {
        // return path.join(fontURLLocal, name);
        return path.join(name);
      }
      Canvas.registerFont(fontFile(font), {
        family: "regular",
      });

      var canvas = Canvas.createCanvas(800, 1000);
      var ctx = canvas.getContext("2d");

      var Image = Canvas.Image;
      var img = new Image();
      img.src = (await urlp) + otp + ".png";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.save();
      // Call US
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.textAlign = "center";
      ctx.font = "18px " + font.split(".")[0];
      ctx.translate(-310, 500);
              ctx.rotate(-0.5 * Math.PI);
              var rText = "Call US: " + phone;
              ctx.fillText(rText, 20, 330);
              ctx.restore();
      // shop name
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "32px " + font.split(".")[0];
      ctx.fillText(shop, 400, 50, 520, 60);
      // address
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "18px " + font.split(".")[0];
      ctx.fillText(address, 400, 70, 520, 60);
      // User Name
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.font = "28px " + font.split(".")[0];
      ctx.fillText(name, 400, 940, 460, 50, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // phone
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.font = "14px " + font.split(".")[0];
      ctx.fillText(phone, 200, 965, 200, 70, {
        minFontSize: 14,
        maxFontSize: 20,
      });
      // email
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.font = "14px " + font.split(".")[0];
      ctx.fillText(email, 390, 965, 200, 70, {
        minFontSize: 14,
        maxFontSize: 20,
      });

      Canvas.loadImage(logoImage).then((image) => {
        ctx.drawImage(image, 18, 18, 120, 120);
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(urlp + otp + ".png", buffer);
        console.log("Done");
      });
    }
  }
};

module.exports = mPosterFunction;
