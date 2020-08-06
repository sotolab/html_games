// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "넌센스 IQ 테스트",
        "main":    "<p>대한민국 최고의 지능을 위한 넌센스 문제입니다. 문항을 잘 보고 풀어보세요.</p>",
        "results": "<h5> 즐거운 시간 보냈어요?</h5><p>문제 풀이 하느라 고생하셨습니다.</p>",
        "level1":  "당신은 천재군요",
        "level2":  "조금만 더 공부하면 천재가 될듯",
        "level3":  "조그만 더 노력하세요",
        "level4":  "공부 좀 하세요",
        "level5":  "공부가 인생의 전부는 아니랍니다." 
    },
    "questions": [
        { // Question 1
            "q": "세상에서 가장 싸움을 잘하는 축구 선수는?",
            "a": [
                {"option": "아이돌",     "correct": false},
                {"option": "펠레",     "correct": true},
                {"option": "초등학교",     "correct": false},
                {"option": "예쁜이",     "correct": false} 
            ],
            "correct": "<p><span>참 잘했어요</span> 누구든지 때릴 것 같은 이름 '펠레'입니다.</p>",
            "incorrect": "<p><span>안타깝네요.!</span> 다음 문제는 반드시 정답을 맞춰 주세요..</p>" 
        },
        { // Question 2
            "q": "산에 불이 났다를 두 글자로 하면?",
            "a": [
                {"option": "산불 났다",    "correct": false},
                {"option": "산타",     "correct": true}
            ],
            "correct": "<p><span>역시 머리가 좋군요.!</span> 산이 탄다. 산~타~!</p>",
            "incorrect": "<p><span>안타깝네요.!</span> 다음 문제는 반드시 정답을 맞춰 주세요..</p>" 
        },
        { // Question 3
            "q": "세종대왕님이 만든 우유는?",
            "a": [
                {"option": "두유",             "correct": false},
                {"option": "흰우유",           "correct": false},
                {"option": "아야어여옹우유으이",          "correct": true},
                {"option": "주스",          "correct": false} 
            ],
            "correct": "<p><span>Nice!</span> 세종대왕이 만든 한글을 본떠서...</p>",
            "incorrect": "<p><span>안타깝네요.!</span> 다음 문제는 반드시 정답을 맞춰 주세요..</p>" 
        },
        { // Question 4
            "q": " '개가 사람을 가르친다' 를 네 글자로 하면?",
            "a": [
                {"option": "사람",    "correct": false},
                {"option": "개인지도",    "correct": true},
                {"option": "공부",    "correct": false},
                {"option": "숙제",     "correct": false} 
            ],
            "correct": "<p><span>잘했습니다.!</span> 개가 인(人)을 지도하다 !</p>",
            "incorrect": "<p><span>안타깝네요.!</span> 다음 문제는 반드시 정답을 맞춰 주세요..</p>" 
        },
        { // Question 5
            "q": "세균 중 가장 센 힘이 센 세균은?",
            "a": [
                {"option": "박테리아",   "correct": false},
                {"option": "대장균",          "correct": true},
                {"option": "강아지",  "correct": false},
                {"option": "장미",     "correct": false} 
            ],
            "correct": "<p><span>센스 좋군요!</span> 균들의 대장이죠. </p>",
            "incorrect": "<p><span>안타깝네요.!</span> 다음 문제는 반드시 정답을 맞춰 주세요..</p>" 
        } // no comma here
    ]
};