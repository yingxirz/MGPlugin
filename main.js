
mg.showUI(__html__) // 用于展示插件用户界面

mg.ui.onmessage = (msg) => {
  updateGlobalStyles(msg.colors)
}

function parseRGBA(rgbaString) {
  const match = rgbaString.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(?:\.\d+)?)\)/);
  if (match) {
    // 将提取的字符串数值转换为 0 到 1 范围的浮点数
    const red = parseInt(match[1], 10) / 255;
    const green = parseInt(match[2], 10) / 255;
    const blue = parseInt(match[3], 10) / 255;
    const alpha = parseFloat(match[4]); // alpha 值本身就是在 0 到 1 的范围，因此不需要转换
    // 返回调整后的颜色对象
    return { r: red, g: green, b: blue, a: alpha };
  }
  return null;
}

function updateGlobalStyles(colors) {
  Object.entries(colors).forEach(([key, value]) => {
    // 当前文档；
    const node = mg.document;
    //创建一个 paints
    const myStyle = mg.createFillStyle({ id: node.id, name: 'paint' });
    // 设置样式的名称
    myStyle.name = key;
    // 创建一个填充
    const colorObject = parseRGBA(value)
    const paints = [{
      type: 'SOLID',
      color: {
        r: colorObject.r,
        g: colorObject.g,
        b: colorObject.b,
        a: colorObject.a,
      },
      isVisible: true,
      blendMode: "NORMAL"
    }];
    // 将该填充设置到刚刚创建的 Paint 样式上
    myStyle.paints = paints;
    console.log(`Created fill style: ${key} with color ${value}`);

  })
}
