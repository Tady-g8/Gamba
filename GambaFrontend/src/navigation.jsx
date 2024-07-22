import './css/navigation.css'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href="/" className='navigationMain'>Games</a>
                    <ul>
                        <li><a href="/" className='navigationSub'>Roulette</a></li>
                        <li><a href="/" className='navigationSub'>Plinko</a></li>
                        <li><a href="/" className='navigationSub'>Cases</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}