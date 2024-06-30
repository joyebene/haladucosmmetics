// import
import img6 from '../img/img6.jpg'


import '../App.css'


const Mission = () => {
  return (
    <div id="mission" className='img2 my-1 bg-secondary'>
        <div className="container">
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div className='text-center'>
            <h3 className='pt-3'>HC'S MISSION</h3>
            <p className='lead px-2'> Our mission is to provide our customers with the highest-quality product that enhance beauty.</p></div><div>
            <img src={img6} alt={img6} className='img-fluid br my-3' /></div>
        </div></div>

    </div>
  )
}

export default Mission