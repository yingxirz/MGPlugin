
mg.showUI(__html__) // 用于展示插件用户界面

mg.ui.onmessage = (msg) => {
  // const colors = msg.data.colors;
  console.log(msg) // { count: 3 }，假设用户在 input 框中输入数字 3
}
//   updateGlobalStyles(colors)
// };

// function updateGlobalStyles(colors) {
//   for (const key in colors) {
//       if (colors.hasOwnProperty(key)) {
//           // 创建填充样式
//           const fillStyle = mg.createFillStyle({
//               name: key,
//               description: 'Generated from JSON input',
//               paints: [{
//                   type: 'SOLID',
//                   color: parseColor(colors[key]), // 解析颜色字符串为 MasterGo 需要的颜色对象
//                   visible: true
//               }]
//           });

//           console.log('Created fill style:', fillStyle);
//       }
//   }
// }

// function parseColor(colorStr) {
//   const div = document.createElement('div');
//   div.style.color = colorStr;
//   document.body.appendChild(div);
//   const rgb = window.getComputedStyle(div).color.match(/\d+/g).map(Number);
//   document.body.removeChild(div);
//   return {
//       r: rgb[0] / 255,
//       g: rgb[1] / 255,
//       b: rgb[2] / 255,
//       a: rgb.length > 3 ? rgb[3] / 255 : 1
//   };
// }