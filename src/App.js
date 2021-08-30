import React from "react";
import "./App.css";
import Row from "./Component/Row";
import Requests from "./Component/Requests";
import Banner from "./Component/Banner";
import Nav from "./Component/Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={Requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={Requests.fetchDocumentaries}
			/>
		</div>
	);
}

export default App;
