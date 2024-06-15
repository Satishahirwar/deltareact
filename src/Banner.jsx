import BannerImage from'./assets/eeee.jpg';
// import BannerBackground from'./assets/e.jpg';
import BannerBackground from '../assets/ss.png';
const Banner=()=>{
    return (
     <div
      style = {{
        BackgroundImage:`url(${BannerBackground})`,
        backgroundSize:"cover",
     }}className='main-containt flex justify-center '>

      <div className=' w-full flex justify-center text-white'> 
      <div className='w-2/3 ms-10'> 
      <h3 className='text-3xl font-semibold'>Hi, I am</h3>
     <h1 className='mt-3 text-5xl font-bold'>Satish Ahirwar</h1>
     <h2  className='mt-3 text-3xl'>I am a frontend Developer</h2>
     <p  className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing pariatur placeat explicabo magni.</p>
      <button className='px-1 py-1 bg-orange-500 shadow rounded-full text-1xl text-bold'> Contact Me</button>
      </div>
      </div>
      <div className=' border w-full flex justify-center'>
     <img className='h-80 w-80 rounded-full border 'src={BannerImage}/>
      </div>
     </div>
    );
};
export default Banner;