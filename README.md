# 술술술 프로젝트🍾🥂
### _술을 사랑하는 사람들 모여라! 본격 음주권장 프로젝트!_  
  
술을 사랑하는 분들을 위한 술술술 프로젝트! 나의 술을 자유롭게 소개하고, 평점을 매겨보세요. 
좋아요, 팔로우로 나의 술 취향을 공유할 수 있어요. :)

- _내 몸에는 피 대신 알코올이 흐른다   - 서경 태_
- _음주 후 안전귀가 - 지수 나_
- _취중 코딩은 깃헙에 해롭습니다..   - 세만 김_
- _홈브루(맥주 아님)는 코딩에 해롭습니다..   - 혁준 김_
- _알콜 중독 상담은 국번없이 129   - 지현 백_


## 1. 프로젝트 보고

 ![rest](https://github.com/taeseokyoung/drinkdrinkdrink/assets/105770887/b766f01a-c8d4-47eb-9678-8add16f26b2a)

- 1-1. 프로젝트 소개 : 술에 대한 모든 이야기를 나누는 커뮤니티 페이지이자 나만의 일기장
- 1-2. 기능구현
     - 일반 회원용
        - 이메일 인증 회원가입과 로그인
        - 로그인 사용자만 게시글 작성
        - 게시글 좋아요(북마크), 댓글 작성, 수정, 삭제
        - 게시글 작성자 팔로우
        - 비로그인 사용자 게시글 리스트, 게시글 상세 페이지 및 댓글 열람
     - 관리자용
        - 주류 카테고리 (추가중)
- 1-3. 사용스킬
  - 백 : django, python, restframework-simplejwt
  - 프론트 : html, css, javascript
- 1-4. 역할분담 : 백엔드와 프론트엔드 모두 기능별로 나누어 한 사람이 전부 담당하였습니다.
  - 김세만 : 회원가입 B#2 F#3
  - 김혁준 : 홈페이지, 댓글 B#1 #5
  - 나지수 : 게시글 작성 B#3 F#4
  - 백지현 : 게시글 상세페이지, 수정 B#4  F#5 #7 | 좋아요와 팔로우 B#7
  - 태서경 : 로그인 B#2 F#2|  회원정보 B#6 F#6

### 2. 팀 소개
- 2-1. 팀명 : A5A조
- 2-2. 팀원 : 김세만, 김혁준, 나지수, 백지현, 태서경(바지팀장)
- 2-3. 팀 규칙
  - 작업 관련
    - 마스터 브랜치(master) : 배포용
    - 디벨롭 브랜치(dev)
    - Feature/기능 : 개별 기능 개발용
    - 작업 전 dev→ fetch,merge → pull request
    - 기준을 잘 지키는 pull request
  - 서로의 약속
    - 주변 상황에 휘둘리지 말고 우리의 할 일을 하자.
    - 무슨 일이 생기면 바로바로 이야기하자.
    - 문제가 생기면 그 자리에서 바로 팀과 공유하자. (끙끙도 최대 1시간만)
    - 컨디션 관리를 잘하자.
    - pull request 할 때 다같이 하자. (코드리뷰)

### 3. 기준 📂 
- 3-1. 코드 컨벤션
<pre><code>* vscode extention - black

백
  - class : 파스칼 케이스
  - 함수 및 변수 : 카멜 케이스
  
프론트
  - container : 1200px
  -  주색 : #000

2. 깃허브 커밋 컨벤션 : Gitmoji, commit message, Issues 작성
3. 브랜치 컨벤션 : master < main < develop < feature/서비스명
</code></pre>

- 3-2. 와이어프레임
![wireframe](https://github.com/taeseokyoung/drinkdrinkdrink/assets/105770887/97e5cf5a-3872-4b47-97a6-2950972b087d)

- 3-3. ERD
![erd](https://github.com/taeseokyoung/drinkdrinkdrink/assets/105770887/88495217-d8e1-4a7b-a463-87ee29f58f71)  
  
- 3-4. [API 명세](https://www.notion.so/ad5901e2231d4a558a2ae5c93215af55)  
  
### 4. 이슈❓❗️
- 5-1. 배포 : 혁준님이 render로 배포했던 서버가 통째로 날아가버린 이슈가 있었다.
- 5-2. 테스트코드 : 세만님의 User 테스트코드가 작동을 잘 하고 있지만, 서경과 지수님의 Article에 대한 테스트 진행하지 못함.
- 5-3. 주류 카테고리 : 현재 admin 에서만 활용이 가능하다.
- 5-4. 마이페이지 기능 : 백엔드는 대부분 구현되었는데 프론트 구현을 하지 못한 부분이 있다.
- 5-5. 게시글 삭제 기능 : 백엔드에서 구현 완료 후 프론트에 적용시키지 못함

### 5. 각자 마음에 드는 코드
- 나지수 : dotenv모듈 설치없이 간단히 시크릿키를 보호하는 방법을 배워 좋았습니다! + 태서경 : 🤞
<pre><code>import os
import json
from django.core.exceptions import ImproperlyConfigured

secret_file = os.path.join(BASE_DIR, "secrets.json")  # secrets.json 파일 위치

with open(secret_file) as f:
    secrets = json.loads(f.read())


def get_secret(setting, secrets=secrets):
    try:
        return secrets[setting]
    except KeyError:
        error_msg = "Set the {} environment variable".format(setting)
        raise ImproperlyConfigured(error_msg)


SECRET_KEY = get_secret("SECRET_KEY")  
</code></pre>
- 김세만 : postman도 테스트하기 좋다고 생각했는데 테스트 코드는 터미널에서 모두 확인할 수 있어서 시간이 매우 절약되는 점이 좋았습니다. + 태서경 : 🤞
<pre><code>class UserViewTest(APITestCase):
    def test_registration_success(self):
        url = reverse("sign_up_view")
        user_data = {
            "identify": "success_test",
            "password": "1234",
            "password_check": "1234",
            "email": "test@test.com",
            "age": "20",
        }
        response = self.client.post(url, user_data)
        self.assertEqual(response.status_code, 201)
        </code></pre>

- 백지현 : articles/views.py의 HomeView에서 게시글을 일정 기준에 따라 정렬할 수 있는 코드. 쿼리문의 활용법을 배울 수 있어 좋았습니다. + 태서경 : 🤞
<pre><code>articles = Article.objects.all()
order_condition = request.query_params.get("order", None)
if order_condition == "recent":
    articles = Article.objects.order_by("created_at")
if order_condition == 'likes':
    articles = Article.objects.annotate(likes_count=Count('likes')).order_by('-likes_count')
if order_condition == "stars":
    articles = Article.objects.order_by("-stars")
       </code></pre>
