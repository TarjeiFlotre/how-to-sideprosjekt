

export function ProjectList() {
    return (    
        <div className="text-center"> 
            <h1 className="text-2xl">Prosjektliste</h1>
            <ul className="pl-4 list-disc space-y-4" style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                <li>
                    <h2>Tetris</h2>
                    <p>Semesteroppgave 1 fra INF101</p>
                </li>
                <li>
                    <h2>Breakout</h2>
                    <p>Semesteroppgave 2 fra INF101</p>
                </li>
                <li>
                    <h2>Obama gaming TD</h2>
                    <p>Semesteroppgave fra INF112</p>
                </li>
            </ul>
        </div>
    )
    }