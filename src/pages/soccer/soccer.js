import './style.css';
import WhiteBox from '../../components/boxes/whitebox/whitebox';
import FixtureBox from '../../components/boxes/fixturebox/fixturebox';
import MatchBox from '../../components/boxes/matchbox/matchbox';
import NewsBox from '../../components/boxes/newsbox/newsbox';
import RosterBox from '../../components/boxes/rosterbox/rosterbox';
import searchById from '../../searchById';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Soccer({ games }) {
  let params = useParams();
  const game = searchById(params.id, games);

  return (
    params.id === undefined ?
      <div className="content-boxes">
        <FixtureBox games={games} />
        <div className="middle-boxes">
          <WhiteBox width={700} hidden={true} />
        </div>
        <WhiteBox hidden={true} />
      </div> :
      (game === undefined ?
        // TODO: Make it non-flashy (if the display time is short, lengthen it purposefully)
        <center><h1 className="loading">Loading...</h1></center> :
        <div className="content-boxes">
          <FixtureBox games={games} />
          <div className="middle-boxes">
            <MatchBox game={game} />
            <RosterBox game={game} />
          </div>
          <NewsBox game={game} />
        </div>)
  );
}

/*
 <BrowserRouter>
      <div className="App">
        <Menu />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/articles/:id' exact element={<Article />} />
            <Route path='/articles' exact element={<Articles />} />
            <Route path='/videos/:id' exact element={<Video />} />
            <Route path='/videos' exact element={<Videos />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/profile/:id' exact element={<Profile />} />
          </Routes>
        </div>
        <FooterBar />
      </div>
    </BrowserRouter>
*/

export default Soccer;
