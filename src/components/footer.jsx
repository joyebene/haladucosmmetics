import arrow2 from '../img/arrow2.svg';

const Footer = () => {
  return (
    <div className="bg-dark text-white p-4 text-center position-relative">
        <div className="container"><p className='fw-light'>Copyright &copy; 2024 Haladucosmetics </p>
        <a href="#" className="position-absolute bottom-0 end-0 mx-2"><i className="h1"><img src={arrow2} alt="img" /></i></a></div>
        
    </div>
  )
}
export default Footer;