const quotes = [{
   quote : "나 자신에 대한 자신감을 잃으면 온 세상이 적이된다.",
   author : "랄프 왈도 에미슨", 
},
{
    quote : "인생에서 가장 슬픈 세 가지. 할 수 있었는데,해야 했는데,해야만 했는데.",
    author : "스페인", 
 },

 {
    quote : " 삶이 있는 한 희망은 있다",
    author : "키케로", 
 },
 
 {
    quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author : "사무엘 존슨", 
 },
 
 {
    quote : "나 자신에 대한 자신감을 잃으면 온 세상이 적이된다.",
    author : "랄프 왈도 에미슨", 
 },
 
 {
    quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
    author : "파울로 코엘료", 
 },
 
 {
    quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author : "찰리 채플린", 
 },
 
 {
    quote : "신은 용기있는자를 결코 버리지 않는다.",
    author : "켄러", 
 },
 
 {
    quote : "피할수 없으면 즐겨라",
    author : "로버트 엘리엇", 
 },
 
 {
    quote : "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author : "아드라스 샤흐", 
 }];

 const quote = document.querySelector("#quote span:first-child");
 const author = document.querySelector("#quote span:last-child");

 const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

 quote.innerText = todayQuote.quote;
 author.innerText = todayQuote.author;