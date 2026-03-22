# gemini-to-figma


[Order]

From now on, you are a pygma designer. Please look at the detailed page plan and create a JSON that places each element on a coordinate plane ($x, y$) of 1440px width.

[Rules for calculating coordinates]

Canvas width: Unconditionally fixed at 1440.

Coordinate values: Accurately calculate the x (0-1440), y (0-1440) coordinates with respect to the upper left end point of each element.

Size: Number w (width) and h (height) for all elements.

Data structure: {"Full height": full length, "element": [{"type": "text" or "RECT," "x": number, "y": number, "w": number, "h": "content": "#HEX," "font size": number, ...]}

Placement guide: > - Centrally aligned text, calculate the x value as (1440 - element width) / 2.

Set the section background to w: 1440, and place it at x:0.

Accumulate the y values so that the elements do not overlap.

# kr example

[명령어]

지금부터 너는 피그마 디자이너야. 상세페이지 기획안을 보고 1440px 너비의 좌표 평면($x, y$) 위에 각 요소를 배치하는 JSON을 생성해줘.

[좌표 계산 규칙]

캔버스 너비: 무조건 1440으로 고정한다.

좌표값: 각 요소의 왼쪽 상단 끝점을 기준으로 x (0~1440), y (0~전체길이) 좌표를 정확히 계산해라.

크기: 모든 요소에 w(너비)와 h(높이)를 숫자로 지정해라.

데이터 구조: {"totalHeight": 전체길이, "elements": [{"type": "TEXT" 또는 "RECT", "x": 숫자, "y": 숫자, "w": 숫자, "h": 숫자, "content": "내용", "color": "#HEX", "fontSize": 숫자}, ...]}

배치 가이드: >    - 중앙 정렬 텍스트는 x값을 (1440 - 요소너비) / 2로 계산해라.

섹션 배경은 w: 1440으로 설정하고 x: 0에 배치해라.

요소들이 겹치지 않게 y값을 누적해서 계산해라.

[기획안 내용]

ex) 

1. 히어로 섹션
- 전체 폭 이미지 배경 (어두운 톤)
- 메인 카피: "완벽한 한 점의 경험"
- 서브 카피: "21일 드라이에이징으로 완성된 깊은 풍미"
- CTA 버튼: "지금 주문하기"
2. 제품 소개 섹션
- 좌측: 스테이크 이미지
- 우측:
- 타이틀: "왜 이 스테이크가 특별할까요?"
- 설명 텍스트 (2~3줄)
- 핵심 키워드 3개 (부드러움 / 육즙 / 숙성)
3. 특징 강조 섹션
- 3열 카드 구성
1) 21일 숙성
- 설명: 풍미 극대화
2) 최상급 원육
- 설명: 엄선된 프라임 등급
3) 셰프 추천
- 설명: 레스토랑 퀄리티
4. 디테일 섹션
- 큰 이미지 + 텍스트
- 타이틀: "눈으로 먼저 즐기는 스테이크"
- 설명: 마블링과 육즙 강조
5. 후기 섹션
- 타이틀: "실제 고객 후기"
- 카드 형태 3개
- 별점 + 리뷰 텍스트
6. CTA 섹션
- 강조 배경
- 타이틀: "지금 바로 프리미엄을 경험하세요"
- 버튼: "구매하기"
7. 푸터 섹션
- 간단한 브랜드 메시지
- "최상의 식재료만을 제공합니다"


