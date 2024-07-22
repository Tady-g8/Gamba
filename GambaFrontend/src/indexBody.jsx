import './css/indexBody.css'
import Navigation from './navigation'
import IndexGames from './indexGames'

export default function IndexBody() {

    return (
        <div className="indexBody">
            <Navigation />
            <IndexGames />
        </div>
    )
}