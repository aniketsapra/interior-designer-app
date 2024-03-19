import React, {useState} from 'react';
import { portfolioImages } from '../Assets/Index';
import CloseIcon from '@mui/icons-material/Close';
import SlideTransition from '../components/SlideTransition';


const Portfolio = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const handleClick = (image) => {
      setSelectedImage(image);
      setModalOpen(true);
    }

  return (
    <SlideTransition>
    <section> 
    <div>
      <div className={modalOpen ? 'model open' : 'model'}>
        <img src={selectedImage} />
        <CloseIcon onClick={() =>setModalOpen(false)} />
      </div>

      <div className='flex items-center justify-center'>
        <div className='pt-36 py-10 px-96 grid xl:grid-cols-2 grid-cols-1 gap-10 '>
          {portfolioImages.map((PortfolioItem, key) => {
            return (
              <div key={key} onClick={() => handleClick(PortfolioItem)} className='hoverzoom  w-full h-full '>
                <img src={PortfolioItem} alt={`Image ${key}`} className='hovereffect object-cover w-full h-full cursor-pointer ' />
              </div>
              );
            })}
        </div>
      </div>
    </div>

    </section>
    </SlideTransition>
  );
};

export default Portfolio;
