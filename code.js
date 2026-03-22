figma.showUI(__html__, { width: 450, height: 600 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'render-design') {
    const data = msg.data.elements || msg.data;

    // 폰트 로드
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });

    const parseColor = (hex) => {
      const cleanHex = (hex || "#CCCCCC").replace('#', '');
      return {
        r: parseInt(cleanHex.substring(0, 2), 16) / 255,
        g: parseInt(cleanHex.substring(2, 4), 16) / 255,
        b: parseInt(cleanHex.substring(4, 6), 16) / 255
      };
    };

    // 메인 프레임 생성 (도화지)
    const canvasHeight = msg.data.totalHeight || 3000;
    const container = figma.createFrame();
    container.name = "Gemini Precision Design";
    container.resize(1440, canvasHeight);
    container.x = figma.viewport.center.x - 720;
    container.y = figma.viewport.center.y - (canvasHeight / 2);

    for (const el of data) {
      try {
        let node;
        if (el.type === 'TEXT') {
          node = figma.createText();
          node.fontName = { family: "Inter", style: "Bold" };
          node.characters = String(el.content || "");
          node.fontSize = el.fontSize || 16;
          node.fills = [{ type: 'SOLID', color: parseColor(el.color) }];
          
          // 텍스트 너비가 정해져 있으면 영역 고정
          if (el.w) {
            node.resize(el.w, node.height);
            node.textAutoResize = "HEIGHT";
          }
        } else {
          node = figma.createRectangle();
          node.resize(el.w || 100, el.h || 100);
          node.fills = [{ type: 'SOLID', color: parseColor(el.color || el.backgroundColor) }];
          if (el.cornerRadius) node.cornerRadius = el.cornerRadius;
        }

        // 좌표 평면 배치 (절대 위치)
        node.x = el.x || 0;
        node.y = el.y || 0;
        
        container.appendChild(node);
      } catch (e) {
        console.error("Element Error:", e);
      }
    }

    figma.viewport.scrollAndZoomIntoView([container]);
    figma.notify("좌표 기반 정밀 생성 완료!");
  }
};