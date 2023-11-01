import nijika from '../images/nijika look.png'

interface Props {
    name: string;
    position: string;
    image: string;
}

export default function BoardMemberCard({name, position, image}: Props) {
    return (
        <div className="flex items-center w-full h-48 rounded-xl bg-secondary mb-4">
            <div className="grid grid-cols-2 w-full h-full items-center">
                <div className='flex align- ml-6 w-36'>
                    <img src={image} alt="board member" className='rounded-full' />
                </div>
                <div className="text-right mr-6" >
                    <h1 className="text-3xl text-accent font-display font-bold">{name}</h1>
                    <p className="text-lg text-accent">{position}</p>
                </div>
            </div>
        </div>
    )
}