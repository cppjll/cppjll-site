import nijika from '../images/nijika look.png'

export default function BoardMemberCard() {
    return (
        <div className="flex items-center w-full h-48 rounded-xl bg-secondary">
            <div className="grid grid-cols-2 w-full h-full items-center">
                <div className='flex align- ml-4'>
                    {/* <img className="w-24 h-24 ml-4" src="https://picsum.photos/200" alt="board member" /> */}
                    <img src={nijika.src} alt="board member" />
                </div>
                <div className="text-right mr-4" >
                    <h1 className="text-3xl text-accent font-display font-bold">Nijika Ijichi</h1>
                    <p className="text-lg text-accent">President</p>
                </div>
            </div>
        </div>
    )
}