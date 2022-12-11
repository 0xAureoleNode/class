// exercise 4
let post = {
  title: 'China is unlock down',
  body: 'dont comment',
  author: 'aureole han',
  views: 656,
  comments: [
    { author: 'a', body: 'b' },
    { author: 'c', body: 'd' },
  ],
  isLive: true,
};

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
