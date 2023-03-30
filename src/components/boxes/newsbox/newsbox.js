import '../style.css';
import './style.css';
import WhiteBox from '../whitebox/whitebox';
import searchById from '../../../searchById';
import { Container } from 'react';

function Title() {
  return (
    <h1 className="title">News</h1>
  );
}

function Content({ game }) {
  const allNews = game.news;
  return (
    <div className="leftdiv">
      {
        allNews.map(news => {
          return (
            <div>
              <p className="news-headline">{news.headline}</p>
              <p className="news-description">{news.description}</p>
            </div>
          );
        })
      }
    </div>
  );
}

function NewsBox({ game }) {
  return (
    game && <WhiteBox Title={Title} Content={Content} contentProps={{ game: game }} />
  );
}

export default NewsBox;
