import './style.css'
import './App.css'

function App() {
  let names =['john', 'Catherine','Alex']
  let age=[21,31,25]
  let height=['170cm', '165cm', '160cm']

  return (
    <>
     <div className='header'><h1>Welcome to our Modeling page!!</h1></div>

     <div className='banner'> <img width='100%' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/model-and-talent-agency-facebook-cover-photo-design-template-1a0734d537c97bdd869613feba8bd2be_screen.jpg?ts=1610082798'/></div>
     
     <h2 className='modelHeading'>List of our Top Models</h2>
     
     <div className='models'>
      
      <div className='profile'>
        <img  width ='350px' src='data:image/jpeg;base64,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'/>
       <p> Name:{names[0]}</p>
       <p> Age: {age[0]}</p>
       <p>Height:{height[0]}</p>
      </div>

      <div className='profile'>
        <img width ='350px' src='https://img.freepik.com/free-photo/portrait-pretty-blonde-model-sitting-table-white-casual-warm-knitted-sweater-black-hat_273443-2244.jpg'/>
       <p> Name:{names[1]}</p>
       <p> Age: {age[1]}</p>
       <p>Height:{height[1]}</p>
      </div>

     <div className='profile'>
        <img width ='350px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv2I8bF3PjlOKHMj4_CTM3BFzd301lV4tSQ&usqp=CAU'/>
       <p> Age: {age[2]}</p>
       <p>Height:{height[2]}</p>
      </div>


     </div>
       
    </>
  )
}

export default App