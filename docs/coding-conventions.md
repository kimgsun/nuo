# 프로젝트 코딩 컨벤션

BEM, 속성 순서, SCSS, HTML 적용 규칙 — 요약 정리.

## BEM 네이밍

| 항목           | 규칙                                                                        |
| -------------- | --------------------------------------------------------------------------- |
| **Depth**      | `블록__요소` 1단계까지만                                                    |
| **예시**       | `visual__box`, `hero__grid`                                                 |
| **추가 depth** | 새 블록으로 분리 또는 공통 유틸 클래스로 처리                               |
| **수식어**     | `--active`, `--open`처럼 `--`로 상태·변형 표현                              |
| **네이밍**     | 추상명 X → `visual-list`, `project-card`, `section-header` 등 직관적 명사형 |
| **일관**       | 같은 패턴·같은 단어로 통일                                                  |

## CSS 속성 순서

**순서**: 레이아웃 → 박스모델 → 시각효과 → 기타

| 순서 | 영역     | 대표 속성                                                                  |
| :--: | -------- | -------------------------------------------------------------------------- |
|  1   | 레이아웃 | `display`, `position`, `inset`, `flex-*`, `grid-*`, `align-*`, `justify-*` |
|  2   | 박스모델 | `width`, `height`, `margin`, `padding`, `box-sizing`, `overflow`           |
|  3   | 시각효과 | `color`, `background`, `border`, `box-shadow`, `opacity`, `filter`         |
|  4   | 기타     | `font-*`, `text-*`, `cursor`, `transition`, `animation`, `transform`       |

- 동일 역할 속성: 셀렉터 쉼표로 그룹화, 한 블록 내 선언.

## 금지 사항

> **!important 금지** — 우선 적용은 셀렉터·명시도로만 조절.

- **인라인 스타일**: HTML `style=""` 금지. 색·크기·배경은 SCSS 클래스만 사용.
- **충돌 시**: BEM 수식어 또는 셀렉터 범위 조정으로 해결.

## SCSS 변수·Mixin

### 변수 (`_variables.scss`에만 정의)

- **컬러**: `$color-main`, `$color-sub`, `$white`, `$black`, `$color-border`, `$color-bg-light`, `$color-error`
- **타이포**: `$font-base`, `$fs-xs` ~ `$fs-5xl`
- **간격·브레이크**: `$sp-xs` ~ `$sp-5xl`, `$small-mobile`, `$mobile`, `$tablet`, `$laptop`, `$inner-width`
- **트랜지션**: `$trans`(0.3s ease), `$trans-slow`(1.2s cubic-bezier)
- **원칙**: 재사용 가능한 값은 변수 정의. 단 1곳 사용 특수값은 직접 기입 허용

### Mixin (반응형 5단계)

- **미디어 쿼리**: `@include small-m`(<480), `@include m`(≤767), `@include t`(≤1023), `@include l`(≤1279). 1280~ = Desktop(기본). max-width 기준 Desktop First
- **호버**: `@include hover { ... }` — `@media (hover: hover)` 대신 사용
- **레이아웃**: `flex-center`, `flex-between`
- **도메인**: `section-padding`, `section-header`, `img-grayscale`, `hover`, `bg-overlay`, `tab-panel`, `tab-panel-item`, `grid-bg`, `grid-bg-white`
- **애니메이션**: 공통 키프레임 `fadeIn`, `slideUp`(\_mixins.scss)
- **기준**: 두 번 이상 쓰는 패턴만 Mixin으로 분리

## 모듈화 구조

```
scss/
├── abstracts/   → 전역 변수, Mixin, 리셋
├── layout/      → 공통 헤더·푸터
├── components/  → 버튼, 공통 UI
├── pages/       → 페이지별 스타일 (_home, _about, _product, _detail, _contact, _faq)
└── main.scss
```

## HTML

- **구조**: `header`, `main`, `section`, `article`, `footer`, `nav` 시맨틱 태그 우선
- **래퍼**: `div.wrapper`, `div.inner` 사용 금지. 넓이 제한은 `.container`(max-width: $inner-width)만 사용
- **클래스·id·data**: **kebab-case**(소문자+하이픈) 통일. 예: `hero__grid`, `philosophy-content-nuovo`, `data-category="all"`
- **애니메이션**: `data-scroll-animate`(타입), `data-scroll-delay`(ms) 속성으로 제어. 타입: fade-up/down/left/right, zoom-in/out, fade
