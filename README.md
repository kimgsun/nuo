<div align="center">

# nuo

### Spatial Design Studio Website

공간 디자인 스튜디오 컨셉의 웹사이트

[Brand Guide](./docs/brand-guide.md) · [Live View](https://kimgsun.github.io/nuo/)

</div>

---

## 프로젝트 소개

건축/인테리어 브랜드 **nuo** 컨셉의 웹사이트 포트폴리오입니다. 기획·디자인·퍼블리싱을 1인으로 진행했습니다.

모노크롬 톤과 시맨틱 마크업을 중심으로 구성했습니다.

  


## 주요 기능

- **모노크롬 인터랙션** - 그레이스케일 기본, 호버 시 컬러 전환
- **스크롤 애니메이션** - jQuery 기반 fade-up, fade-left, fade-right, zoom-in 애니메이션
- **프로젝트 필터링** - 카테고리별 동적 필터링 및 페이드 애니메이션
- **실시간 폼 검증** - 이메일/전화번호 자동 포맷, 에러는 alert로 표시
- **동적 프로젝트 렌더링** - JSON 기반 데이터 구조
- **반응형** - Desktop First, @include small-m, m, t, l
- **웹 접근성** - ARIA 속성, 시맨틱 마크업

  


## 기술 스택

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

### Design & Tools

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

  


## 프로젝트 구조

```
nuo/
├── index.html                   # 메인 페이지
├── about.html                   # 스튜디오 소개
├── product.html                 # 프로젝트 아카이브
├── detail.html                  # 프로젝트 상세
├── faq.html                     # FAQ
├── contact.html                 # 문의 폼
├── README.md
├── docs/
│   ├── brand-guide.md           # 기획·디자인 가이드
│   ├── coding-conventions.md    # 코딩 컨벤션
│   └── accessibility-report.md  # 접근성 리포트
│
└── src/
    ├── css/
    │   └── main.css               # 컴파일된 CSS
    ├── scss/
    │   ├── abstracts/             # Variables, Mixins, Reset
    │   ├── layout/                # Header, Footer
    │   ├── components/            # Common, Buttons
    │   ├── pages/                 # 페이지별 스타일 (_index, _about, …)
    │   └── main.scss              # Entry point
    ├── js/
    │   ├── common.js              # 공통 기능 (헤더 토글, 탭 전환, 스크롤 애니메이션)
    │   ├── pages/
    │   │   ├── product.js         # 프로젝트 필터링
    │   │   ├── detail.js          # 상세 페이지 렌더링
    │   │   ├── contact.js         # 폼 검증
    │   │   └── faq.js             # 아코디언
    │   └── utils/
    │       └── form-validator.js  # 폼 검증 유틸리티
    ├── data/
    │   └── projects.json         # 프로젝트 데이터
    └── image/
        └── favicon.png            # 파비콘
```

  


## 퍼블리싱 포인트


| 항목               | 내용                                                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Responsive**   | 반응형 5단계: Small Mobile(<480) / Mobile(480-767) / Tablet(768-1023) / Laptop(1024-1279) / Desktop(1280+) · @include small-m, m, t, l |
| **Key Function** | JSON 기반 프로젝트 필터·동적 상세 렌더링, FormValidator 실시간 폼 검증, Philosophy 탭 aria-selected·slideUpText, 이미지 grayscale 호버 전환          |
| **Web Standard** | 시맨틱 태그, ARIA·alt 필수, Chrome/Firefox/Safari/Edge 최신 버전 대상                                                                |


  


## 핵심 기능 상세

### 1. 프로젝트 필터링 (product.html)

```javascript
// 카테고리별 동적 필터링
- 전체 / 주거 공간 / 상업 공간 / 공간 디자인
- Fade in/out transition
- JSON 데이터 기반 렌더링
```

### 2. 이미지 인터랙션

```scss
// @include hover 사용 (hover: hover 미디어 쿼리 통일)
@include img-grayscale;
@include hover {
  transform: scale(1.05);
}
```

### 3. 폼 검증 시스템 (contact.html)

```javascript
// FormValidator 클래스
- validateEmail() / validateRequired() / formatPhone()
- 실시간 에러 클래스 표시, 제출 시 검증 실패·성공 메시지는 alert
```

### 4. 탭 전환 (about.html, index.html)

```javascript
// common.js - Philosophy 탭 (Nuovo/Nude)
- data-tab 속성 기반 동적 전환
- aria-selected 동적 제어
- BEM 수식어 자동 토글
- CSS 애니메이션 (slideUpText)
```

### 5. 스크롤 애니메이션 (common.js)

```javascript
// jQuery 기반 스크롤 감지
- data-scroll-animate (fade-up, fade-left, fade-right, zoom-in)
- data-scroll-delay(ms), window.refreshScrollAnimations()로 동적 요소 반영
```

```html
<section data-scroll-animate="fade-up" data-scroll-delay="200">
  <!-- 스크롤 시 200ms 딜레이 후 아래에서 올라오는 애니메이션 -->
</section>
```

  


## 디자인 시스템

### 컬러 팔레트

```scss
$white: #fff; // 배경
$black: #000; // 강조
$clr-main: #1a1a1a; // 텍스트
$clr-sub: #2c2c2c; // 다크 배경
$clr-border: #eee; // 구분선
$clr-bg-light: #e8e8e8; // 서브 배경
$clr-error: rgba(255, 100, 100, 0.9); // 에러
```

### 타이포그래피

```scss
$font-base: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
$fs-display: clamp(2rem, 4vw + 1rem, 3rem);      // Hero Title
$fs-display-sm: 2.25rem;                          // Title
$fs-title-lg: clamp(1.75rem, 2.5vw + 1.25rem, 2.5rem); // Section Title
$fs-title: 1.5rem;     // Sub Title
$fs-title-sm: 1.25rem; // Emphasis
$fs-lead: 1.1rem;      // Large Body
$fs-body: clamp(0.9375rem, 0.8rem + 0.4vw, 1rem); // Body
$fs-small: 0.85rem;    // Caption
$fs-caption: 0.75rem;  // Label
$fs-tiny: 0.6rem;      // Caption 소
```

### 반응형 브레이크포인트

```scss
$bp-mobile-sm: 480px; // @include small-m (<480)
$bp-mobile: 768px; // @include m (<768)
$bp-tablet: 1024px; // @include t (<1024)
$bp-laptop: 1280px; // @include l (<1280). 1280+ = Desktop(기본)
```

  


## 프로젝트 데이터 구조

`src/data/projects.json` 수정 예시:

```json
{
  "shadow-studio": {
    "title": "Shadow Studio",
    "location": "Seoul",
    "category": "spatial",
    "year": "2025",
    "philosophy": "Refined Spatial Silence",
    "image": "https://images.unsplash.com/...",
    "images": ["이미지 URL 1", "이미지 URL 2", "이미지 URL 3"],
    "summary": "빛과 그림자를 활용한 공간 구성",
    "story": "프로젝트 스토리 전체 텍스트",
    "narrative": {
      "title": "The Play of Shadows",
      "description": ["단락1", "단락2"]
    },
    "highlights": [
      {
        "title": "Natural Light Control",
        "description": "설명..."
      }
    ],
    "nextProject": "horizon-villa",
    "nextTitle": "Horizon Residence"
  }
}
```

  


## 반응형 지원 (5단계)


| Device       | Breakpoint      |
| ------------ | --------------- |
| Small Mobile | < 480px         |
| Mobile       | 480px - 767px   |
| Tablet       | 768px - 1023px  |
| Laptop       | 1024px - 1279px |
| Desktop      | 1280px+         |


  


## 브라우저 지원


| Chrome | Firefox | Safari | Edge   |
| ------ | ------- | ------ | ------ |
| Latest | Latest  | Latest | Latest |


  


## 코딩 컨벤션

### HTML

- 시맨틱 태그 우선 (header, main, section, article, footer)
- 불필요한 래퍼 div 사용 지양
- 웹 접근성 속성 필수 (alt, aria-label, aria-expanded)
- 인라인 스타일 금지

### SCSS

- BEM 1단계 depth 준수 (`블록__요소` 형태만)
- 속성 순서: **레이아웃 → 박스모델 → 시각효과 → 기타**
- `!important` 사용하지 않고 명시도로 제어
- Mixin: 2회 이상 사용 패턴만 정의
- 재사용 가능한 값은 변수화, 특수값은 직접 기입 허용

### JavaScript

- ES6 모듈 시스템
- 간결한 변수명 (실무 중심)
- 에러는 alert로만 표시

  


## Live View / Repository


| 구분             | 링크                                                               |
| -------------- | ---------------------------------------------------------------- |
| **Live View**  | [https://kimgsun.github.io/nuo/](https://kimgsun.github.io/nuo/) |
| **Repository** | [https://github.com/kimgsun/nuo](https://github.com/kimgsun/nuo) |


  


## 라이선스

© **nuo Studio**. All rights reserved.

---

<br/>

<div align="center">

**Planning · Design · Publishing** (Portfolio)

Built with HTML5, SCSS, JavaScript

</div>
