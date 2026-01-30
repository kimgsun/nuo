# nuo - Spatial Design Studio

프로젝트 기획서 (포트폴리오용)

포트폴리오 프로젝트용으로 작성한 가상 브랜드 nuo의 웹사이트 기획·디자인 가이드입니다.

## 목차

- [Overview](#overview)
- [Brand Context](#brand-context)
- [Design System](#design-system)
- [Scope & Deliverables](#scope--deliverables)
- [Tech & Implementation](#tech--implementation)
- [File Structure](#file-structure)
- [Outcome](#outcome)

## Overview

| 항목           | 내용                                                                       |
| -------------- | -------------------------------------------------------------------------- |
| **프로젝트명** | nuo 공식 웹사이트                                                          |
| **성격**       | 포트폴리오용 웹사이트 (가상 브랜드)                                        |
| **한 줄 정의** | 정제된 형태와 섬세한 감각이 만나는 공간 디자인 스튜디오 웹사이트           |
| **목적**       | 기획·디자인·퍼블리싱 전 과정을 직접 수행해 보여주는 포트폴리오 결과물 제작 |
| **역할**       | 기획 100% · 디자인 100% · 퍼블리싱 100% (1인 작업)                         |
| **결과물**     | 반응형 정적 웹사이트 6페이지 (index, about, product, detail, faq, contact) |
| **기술 스택**  | HTML5, SCSS, JavaScript (ES6)                                              |
| **특징**       | Desktop First, 시맨틱 마크업, SCSS 모듈화, BEM 간소화                      |

## Brand Context

웹 톤·콘텐츠 방향을 정하기 위한 브랜드 전제입니다.

**브랜드명: nuo**  
Nuovo(이탈리아어: 새로움)·Nude(영어: 본질·순수)의 하이브리드. 공간 디자인 스튜디오(건축+인테리어 통합) 가상 브랜드.  
슬로건: _"공간에서 시작되는 새로움, nuo"_

**핵심 가치 (The NUO Standard)**

1. Solid Structural Integrity — 견고한 구조적 무결성
2. Refined Spatial Silence — 정제된 공간의 정적
3. Timeless Design Sensitivity — 변치 않는 디자인 감도

**브랜드 스토리 요약**  
Nuovo는 익숙한 일상을 새 시선으로 보는 감각, Nude는 재료 본연의 질감을 드러내는 정직함. nuo 문구는 **정제·균형·명확**을 기준으로 하고, 과장된 수식이나 투박한 표현은 쓰지 않는다.

**Strategy**  
프로젝트 정보 접근성을 높이기 위해 카테고리 필터(전체/주거/상업/공간 디자인)와 비대칭 그리드를 채택. 이미지는 기본 그레이스케일로 통일감을 두고, 호버 시 컬러 전환으로 집중을 유도.

## Design System

### 컬러 팔레트

| 구분  | 컬러명         | HEX                        | 용도          |
| ----- | -------------- | -------------------------- | ------------- |
| Main  | Charcoal       | `#1A1A1A`                  | 텍스트, 강조  |
| Sub   | Charcoal Light | `#2C2C2C`                  | 다크 배경     |
| Point | White          | `#FFFFFF`                  | 배경, 메인 톤 |
| Line  | Line           | `#EEEEEE`                  | 구분선        |
| Gray  | Gray           | `#E8E8E8`                  | 서브 배경     |
| Error | Error          | `rgba(255, 100, 100, 0.9)` | 폼 검증 에러  |

모노크롬 중심. 이미지는 기본 그레이스케일, 호버 시 컬러 전환.

### 타이포그래피

- Font: `"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
- Weights: 200 / 400 / 500 / 600 / 700 / 800

| 스타일  | Size    | Weight | 용도        |
| ------- | ------- | ------ | ----------- |
| fs-5xl  | 3rem    | 800    | 메인 타이틀 |
| fs-3xl  | 1.85rem | 700    | 섹션 타이틀 |
| fs-2xl  | 1.5rem  | 700    | 서브 타이틀 |
| fs-lg   | 1.1rem  | 200    | 강조 본문   |
| fs-base | 1rem    | 400    | 일반 본문   |
| fs-sm   | 0.85rem | 400    | 캡션        |
| fs-xs   | 0.75rem | 600    | 라벨        |
| fs-2xs  | 0.6rem  | 600    | 캡션 소     |

### 레이아웃

- Container Max Width: `1200px`
- Breakpoints(반응형 5단계): Small Mobile `< 480` / Mobile `480~767` / Tablet `768~1023` / Laptop `1024~1279` / Desktop `1280~`
- Spacing: XS 0.25rem ~ 5XL 8rem

## Scope & Deliverables

### 페이지 구성

| 페이지           | 역할           | 주요 섹션                                                             |
| ---------------- | -------------- | --------------------------------------------------------------------- |
| **index.html**   | Main           | Hero, Philosophy(Nuovo/Nude 탭), Works(주요 프로젝트 3개), Outro(CTA) |
| **about.html**   | About          | Hero, Origin, Standard(3가지 가치), Process(5단계), Service           |
| **product.html** | Portfolio      | 필터(전체/주거/상업/공간 디자인), 프로젝트 그리드                     |
| **detail.html**  | Project Detail | Hero, Story, Gallery, Highlights, 다음 프로젝트 연결                  |
| **faq.html**     | FAQ            | Q&A 아코디언, Contact 정보                                            |
| **contact.html** | Contact        | 연락처, 문의 폼(실시간 검증), 프로젝트 타입(주거/상업/공간 디자인)    |

### 콘텐츠·데이터 범위

- **카테고리**: 웹에 노출되는 프로젝트 분류는 주거 공간 / 상업 공간 / 공간 디자인 3종.
- **샘플 데이터**: 프로젝트 데이터(JSON) 기준으로 상세·필터·다음 프로젝트 링크 등 동적 렌더링.

## Tech & Implementation

### HTML / SCSS / JS 방향

- **HTML**: 시맨틱 태그 우선, 불필요한 래퍼 div 지양, alt·aria-label·aria-expanded 등 접근성 필수.
- **SCSS**: abstracts / layout / components / pages 모듈화, BEM 간소화(visual\_\_box 수준), 변수·Mixin으로 중복 최소화, 미디어 쿼리 단축(@include small-m, m, t, l), 속성 순서(레이아웃 → 박스모델 → 시각효과 → 기타).
- **JS**: ES6, Vanilla 중심. 스크롤 애니메이션만 jQuery, FAQ 아코디언·폼 검증(FormValidator) 등은 Vanilla, 페이지별 모듈 분리.

### 퍼블리싱 포인트

- **Responsive**: 반응형 5단계(Small Mobile &lt;480 / Mobile 480~767 / Tablet 768~1023 / Laptop 1024~1279 / Desktop 1280~), @include small-m, m, t, l (Desktop First).
- **Key Function**: JSON 기반 프로젝트 필터·동적 상세 렌더링, FormValidator 실시간 폼 검증·전화 포맷, Philosophy 탭 aria-selected·slideUpText 애니메이션, 이미지 grayscale 호버 전환.
- **Web Standard**: 시맨틱 태그 활용, ARIA 속성·alt 필수, Chrome/Firefox/Safari/Edge 최신 버전 대상.

### 주요 인터랙션

- 이미지: 기본 grayscale 100%, 호버 시 컬러, 트랜지션 0.3s~0.8s.
- 프로젝트 필터: 전체/주거/상업/공간 디자인, Fade in·out.
- 폼: 이메일·전화번호 실시간 검증·포맷, 에러 메시지 동적 표시.
- 반응형: Desktop First, Fluid Grid, 브레이크포인트별 최적화.

## File Structure

```
nuo/
├── index.html
├── about.html
├── product.html
├── detail.html
├── faq.html
├── contact.html
├── README.md
├── docs/
│   ├── brand-guide.md
│   ├── coding-conventions.md
│   └── accessibility-report.md
└── src/
    ├── css/
    │   └── main.css
    ├── scss/
    │   ├── abstracts/   (_vars, _mixins, _reset)
    │   ├── layout/      (_header, _footer)
    │   ├── components/  (_common, _buttons)
    │   ├── pages/       (_index, _about, _product, _detail, _contact, _faq)
    │   └── main.scss
    ├── js/
    │   ├── common.js
    │   ├── pages/       (product, detail, contact, faq)
    │   └── utils/       (form-validator.js)
    ├── data/
    │   └── projects.json
    └── image/
        └── favicon.png
```

## Outcome

- **기술**: 시맨틱 마크업·웹 표준 준수, SCSS 모듈·BEM으로 유지보수·가독성 확보, 속성 순서 표준화.
- **디자인**: 모노크롬·그레이스케일 이미지로 브랜드 정체성 표현, 비대칭 그리드·반응형으로 디바이스 대응.
- **경험**: 직관적 네비게이션, 부드러운 인터랙션, 접근성·로딩 고려.

**© 2026 nuo Studio. All rights reserved.**  
_(포트폴리오 프로젝트용 가상 브랜드)_
