# 카트라이더 캐릭터로 알아보는 성격 테스트

<img src="./docs/images/readme-banner.jpg"/>

기존 성격 유형 테스트를 카트라이더라는 주제에 맞게 재구성해보았습니다.

## 사용 기술

- Astro v5
- Vue3
- tailwind css v4
- supabase

## 개발 서버 명령어

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 프로젝트 흐름

### 0. 초기화면

- 사용자가 input을 통해 테스트에 쓰일 이름을 직접 설정할 수 있습니다.
  - 이름을 말도 안되는 길이로 설정할 수 있기 때문에, input maxlength를 통해 `길이 제한 (최대 10자)` 을 추가하였습니다.

- 이름 설정 후 테스트 시작하기 버튼을 통해 테스트를 시작할 수 있습니다.
  - 만약 이름을 설정하지 않고, `테스트 시작하기 버튼을 누른경우` 이름을 먼저 입력해달라는 alert창을 띄웁니다.

- 이름 설정 후 `테스트 시작하기 버튼을 눌렀을 때` supabase에 viewcount (조회수) 수치가 1 증가됩니다.
  - `테스트 시작하기 버튼을 눌렀을 때` 라는 조건을 추가하지 않고, 첫 화면에 진입했다고 viewcount를 1 늘려버리면 첫 화면에서 **새로고침 시, 수치가 계속 늘어나기 때문에** 이를 방지하기 위해 조건을 추가했습니다.

### 1.
