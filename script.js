*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Helvetica,游ゴシック体;
  -ms-scroll-snap-points-y: repeat(100vh);
  -ms-scroll-snap-type: y mandatory;
      scroll-snap-type: y mandatory;
}
header,section,footer {
  scroll-snap-align: start;
  height: 100vh;
  padding: 5rem;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
header,footer{
  justify-content: flex-end;
}
#one {
  background: #000;
  color: #FFF;
}

span {
  font-size: .3em;
  display: block;
}
h1,h2,h4 {
  line-height: 1em;
}
h1,h4 {
  font-size: 8vw;
}
h2 {
  font-size: 4vw;
}
ul {
  list-style: none;
  display: flex;
}
li {
  margin-right: 1rem;
}
p {
  opacity: .5;
}

.pen {
  height: 90vh;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999999;
}