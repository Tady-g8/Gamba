import './css/indexGames.css'

export default function IndexGames(){

    return (
        <div className="indexGames">
            <div className="row">
                <a href="/roulette" className="gameCardLink">
                    <div className="gameCard">
                        <img src="https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/blt949ea8e16e463049/blt62307599b42d2c3d/6404b8ee44041411eb45a38d/AJN13Y.jpg" alt="" className="gameCardImage" />
                        <h1 className="gameCardH1">Roulette</h1>
                        <p className="gameCardPlayerCount"><b>4320</b> playing</p>
                    </div>
                </a>
                <a href="/roulette" className="gameCardLink">
                    <div className="gameCard">
                        <img src="https://www.rmcr.org/wp-content/uploads/2024/plinko/images/plinkologo.jpg" alt="" className="gameCardImage" />
                        <h1 className="gameCardH1">Plinko</h1>
                        <p className="gameCardPlayerCount"><b>2030</b> playing</p>
                    </div>
                </a>
                <a href="/roulette" className="gameCardLink">
                    <div className="gameCard">
                        <img src="https://staticg.sportskeeda.com/editor/2022/04/9377e-16487527787276-1920.jpg?w=640" alt="" className="gameCardImage" />
                        <h1 className="gameCardH1">Cases</h1>
                        <p className="gameCardPlayerCount"><b>25510</b> playing</p>
                    </div>
                </a>
            </div>
        </div>
    )
}