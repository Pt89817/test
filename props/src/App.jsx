import Card from './components/Card'


const data = [
  {
    "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "followers": 12540,
    "following": 542,
    "username": "sophia_writes",
    "caption": "Morning coffee and fresh ideas ☕✨",
    "content": "Started the day with a strong coffee and a notebook full of plans. Sometimes the smallest routines create the biggest impact."
  },
  {
    "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "followers": 8970,
    "following": 312,
    "username": "travelwithalex",
    "caption": "Lost in the mountains 🏔️",
    "content": "Spent the weekend hiking through breathtaking mountain trails. The views were incredible and the fresh air was exactly what I needed."
  },
  {
    "img": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "followers": 21450,
    "following": 785,
    "username": "fitness_jane",
    "caption": "Consistency beats motivation 💪",
    "content": "A good workout doesn't require perfect conditions. Show up, do the work, and let consistency create the results."
  },
  {
    "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "followers": 15680,
    "following": 468,
    "username": "tech_raj",
    "caption": "Building something exciting 🚀",
    "content": "Working on a new web application using modern technologies. Every bug solved feels like a small victory."
  },
  {
    "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    "followers": 18420,
    "following": 623,
    "username": "foodie_emma",
    "caption": "Homemade pasta night 🍝",
    "content": "Tried a new pasta recipe today and it turned out amazing. Fresh ingredients and simple techniques make all the difference."
  }
]
const App = () => {
  return (
    <div className='parent'>
      {
        data.map((ele, idx) => {
          return <Card name={ele.username} myimg={ele.img} caption={ele.caption} content={ele.content} follower={ele.followers} following={ele.following} />
        })
      }
    </div>
  )
}


export default App