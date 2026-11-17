# 도서관 연구지원 서비스 설문

연구지원 서비스 이용 경험과 향후 희망 서비스를 묻는 익명 설문입니다. GitHub Pages로 공개합니다. 응답은 Google 스프레드시트에 쌓입니다.

| 파일 | 설명 |
|---|---|
| `index.html` | 설문 페이지 (GitHub Pages로 공개) |
| `apps-script.gs` | 응답을 스프레드시트에 저장하는 Google Apps Script |

## 1. 응답 저장용 스프레드시트 준비
1. Google 스프레드시트를 새로 만듭니다.
2. **확장 프로그램 > Apps Script**를 열고 `apps-script.gs` 내용을 붙여 넣어 저장합니다.
3. **배포 > 새 배포 > 유형: 웹 앱**
   - 실행 사용자: **나**
   - 액세스 권한: **모든 사용자**
4. 권한 승인 후 표시되는 **웹 앱 URL**(`https://script.google.com/macros/s/.../exec`)을 복사합니다.
5. `index.html`의 `const SCRIPT_URL = "";` 따옴표 안에 붙여 넣습니다.

## 2. GitHub 저장소 만들기 및 업로드
1. github.com 우측 상단 **+ > New repository** → 이름 입력(예: `research-support-survey`) → **Public** → Create.
2. **uploading an existing file** 링크를 눌러 `index.html`, `apps-script.gs`, `README.md`를 끌어다 놓고 **Commit changes**.

## 3. GitHub Pages 켜기
1. 저장소 **Settings > Pages**
2. Source: **Deploy from a branch**, Branch: **main** / **(root)** → Save
3. 1~2분 후 `https://<계정명>.github.io/research-support-survey/` 주소로 설문이 열립니다.

## 참고
- 무료 GitHub Pages는 저장소가 **공개(Public)** 여야 하므로 설문 문항이 공개됩니다. 응답 데이터는 스프레드시트에만 저장되어 공개되지 않습니다.
- 문항을 추가·변경하면 `apps-script.gs`의 `COLUMNS`에도 같은 이름(`name` 속성)을 반영하세요.
