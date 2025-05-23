import BussinesCardSection from "@/components/BussinesCardSection";
import LinkCardForm from "@/components/link-card-form";
import { getPeshawarEilNordPakistan, getAvventuraNelNordPakistan, getKalashFestivalPakistan } from "../../sanity/sanity/sanity-utils";








const Partnerships = async ()=> {
 

const PeshawarEilNordPakistan =await getPeshawarEilNordPakistan()
const p1 = PeshawarEilNordPakistan[0]
const name1 = p1.name
const href1 =p1.url
const cardImage1=p1.cardimage
  
const AvventuraNelNordPakistan =await getAvventuraNelNordPakistan()
const p2 = AvventuraNelNordPakistan[0]
const name2 = p2.name
const href2 =p2.url
const cardImage2=p1.cardimage

const KalashFestivalPakistan =await getKalashFestivalPakistan()
const p3 = KalashFestivalPakistan[0]
const name3 = p3.name
const href3 =p3.url
const cardImage3=p1.cardimage
  
const AventuraNelNordPakistan =await getAvventuraNelNordPakistan()
const p4 = AventuraNelNordPakistan[0]
const name4 = p4.name
const href4 =p4.url


//  the CTpartners 
  
  return (
    <div className=' self-stretch  flex flex-col mb-6'>
      {/* hero */}
      <div className=" ">
      <div className="hero min-h-[600px] sm:h-[350px] w-full bg-cover bg-center relative" style={{backgroundImage: 'url(/pBanner.JPG)'}}>
        <div className="hero-overlay  bg-opacity-60 py-5"></div>
          <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
              <div className="min-w-[400px] mx-auto  flex flex-col justify-center items-center py-16  text-center">
                <h3 className="font-poppins font-bold text-33xl">Partnerships</h3>
                
                <p className="font-poppins text-[20px]">.</p>
              </div>
                
            </div>
          </div>
        </div>
      </div>  

      {/* mid */}
  <BussinesCardSection 
  title='Explore the partnerships we offer'
  desc='Choose you travel style.'
  name1={name1}
  name2={name2}
  name3={name3}
  name4={name4}
  name5='Coming Soon.....'

  href1={href1}
  href2={href2}
  href3={href3}
  href4={href4}
  href5='#'
  img1='/card-1@3x.png '
  img2='/card-1@3x.png'
  img3='/pBanner.JPG'
  img4='/card-1@3x.png'
  img5='/card-1@3x.png'
  
  />   
    </div>
  );
};

export default Partnerships;
