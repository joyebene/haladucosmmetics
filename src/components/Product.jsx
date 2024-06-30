import img4 from '../img/img4.jpg';
import img2 from '../img/img2.jpg';
import img5 from '../img/img5.jpeg';
import img3 from '../img/img3.jpg';
import hero from '../img/hero.jpg';


function Product() {


 const images = [{
        id: '1',
        img: {hero},
    },{
        id: '2',
        img: {img2},
    },{
        id: '3',
        img: {img3},
    },{
        id: '4',
        img: {img4},
    },{
        id: '5',
        img: {img5},
    }];


  return (
    <div className='color2' id='product'>
    <div className="container">
        <div className="fw-bold fs-5 text-center pt-5 px-3 py-2 fs-3">OUR PRODUCTS</div>
        
        <div className="d-sm-none py-3">
       {
        images.map((image)=>
            <div className="card my-2 br"><div className="card-body shadow-lg br">
                <img src={image.img.hero} alt={image.img.img9} className='img-fluid'/>
                <img src={image.img.img2} alt={image.img.img9} className='img-fluid'/>
                
                <img src={image.img.img3} alt={image.img.img9} className='img-fluid'/>
                
                <img src={image.img.img4} alt={image.img.img9} className='img-fluid'/>
               <img src={image.img.img5} alt={image.img.img9} className='img-fluid'/>
                <p className='lead mt-4 shadow-sm color2'>Mark-up Set</p>
               
                </div></div>
        )
       }
         
       </div> 

          <div className="d-none d-sm-block">
             <div className='p-3'>
                <div className="row">
                    <div className="col-md">
                             <div className="card br shadow-lg">
                                <div className="card-body">
                                     <img src={hero} alt={hero} className='img-fluid br'/>
                <div className='p-2'><h5>Mark-up Set</h5></div>
                                    </div></div>               
               
                    </div>
                    <div className="col-md">
                        <div className="card br shadow-lg">
                            <div className="card-body">
                                <img src={img2} alt={img2} className='img-fluid size br'/>
                                <div className='p-2'><h5>Mark-up Set</h5></div>
                                                </div>
                            </div>
                        </div>
            
                </div>

                <div className="row my-4">
                    <div className="col">
                        <div className="card br shadow-lg">
                            <div className="card-body">
                                <img src={img5} alt={img5} className='img-fluid br md-img'/>
                                <div className='p-2'><h5>Gorgeous</h5></div></div>
                        </div>
                    </div>

                </div>

                
            
                
                <div className="row my-3">
                    <div className="col-md">
                             <div className="card br shadow-lg">
                                <div className="card-body">
                                     <img src={img4} alt={img4} className='img-fluid size2 br'/>
                <div className='p-2'><h5>Mark-up Set</h5></div>
                                    </div></div>               
               
                    </div>
                    <div className="col-md">
                        <div className="card br shadow-lg">
                            <div className="card-body">
                                <img src={img3} alt={img3} className='img-fluid br'/>
                                <div className='p-2'><h5>Mark-up Set</h5></div>
                                                </div>
                            </div>
                        </div>
            
                
                </div>
               
                </div> 
        
         
       </div> 
       
       
       
       
       
        </div></div>
  )  
}

export default Product