const parse5 = require('parse5');

const document = parse5.parse(
  `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Invenstment Study</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <title>Investment Study</title>
    </head>
  
  <body>
    <!--Upper menu navigation-->
  
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainnav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/">Investment Study</a><button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
  
  <!--이거 메뉴 안으로 넣냐 -->
          <h1>Study Materials</h1>
          <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/user?id=jongwon">종원</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/user?id=jungseok">정석</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/user?id=wihak">위학</a></li>
          </ul>
      </div>
    </nav>
  
  <!-- 제목, 목차마다 하나씩 크기 다르게 하려면 How?-->
  <h2>재테크 스터디 3기 회칙</h2>
  </body>
  `
);
  

console.log(document); //> 'html'