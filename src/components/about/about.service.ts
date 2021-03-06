import { Injectable } from '@angular/core';
import { Article } from '../../core';
import { Observable }     from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AboutService {

  getArticle(): Observable<Article> {
    const article = new Article();
    article.title = '破狼简介';
    article.categories = ['破狼', '简介'];
    article.layout = 'post';
    // article.html = require('./polang.html');
    article.html = `<div class="rich_media_content">
  <p><img src="./assets/img/sun-flower.jpg" alt="破狼简介" /></p>
  <ul>
    <li>
      <p>ThoughtWorks一线码农，爱好读书和旅游，也常涂鸦些技术博文；</p>
    </li>
    <li>
      <p>国内Angular最早布道者。ngnice、ngShowCase创建人之一。Angular中文社区“<strong>狼主</strong>”；</p>
    </li>
    <li>
      <p>全栈攻城狮，涉猎有JavaScript、Nodejs、C#、Java、Python、分布式架构设计、微服务架构、大数据、函数式设计等；</p>
    </li>
    <li>
      <p>著有 <a href="http://item.jd.com/10099349781.html" target="_blank"><strong>《AngularJS深度剖析与最佳实践》</strong></a>一书；</p>
    </li>
    <li>
      <p>信条：</p>
      <ul class="list-unstyled">
        <li><strong>Talk is cheap,  show me code!</strong></li>
        <li><strong>要么读书，要么旅行，身体和心灵总有一个在路上。</strong></li>
      </ul>
    </li>
    <li>
      <p>个人独立博客：<a href="http://greengerong.com/" target="_blank">http://greengerong.com/</a>。</p>
    </li>
    <li>
      <p>博客园博客：<a href="http://www.cnblogs.com/whitewolf/" target="_blank">http://www.cnblogs.com/whitewolf/</a></p>
    </li>
  </ul>

  <p>如果觉得本公众号还不错，请你把[本订阅号]推荐给你身边的朋友，让我们一起努力、进步：</p>
  <p><img src="./assets/img/wei-xin-wolf-er-wei-ma.png" /></p>
  <p>最后奉上笔者最喜欢的“仓央嘉措”的诗词一首《那一天，那一月，那一年，那一世》，希望你也能喜欢，让你我的心灵能从这“浮躁”的俗世，得以超脱：</p>
  <pre>
      那一天，
      我闭目在经殿的香雾中，
      蓦然听见你颂经中的真言；

      那一月，
      我摇动所有的经筒，
      不为超度，
      只为触摸你的指尖；

      那一年，
      磕长头匍匐在山路，
      不为觐见，
      只为贴着你的温暖；

      那一世，
      转山转水转佛塔，
      不为修来世，
      只为途中与你相见。

      那一月，
      我轻转过所有经筒，
      不为超度，
      只为触摸你的指纹；

      那一年，
      我磕长头拥抱尘埃，
      不为朝佛，
      只为贴着你的温暖；

      那一世，
      我翻遍十万大山，
      不为修来世，
      只为路中能与你相遇；

      只是，
      就在那一夜，
      我忘却了所有，
      抛却了信仰，
      舍弃了轮回，
      只为，
      那曾在佛前哭泣的玫瑰，
      早已失去旧日的光泽
  </pre>
</div>
`;
    return fromPromise(Promise.resolve(article));
  }
}
