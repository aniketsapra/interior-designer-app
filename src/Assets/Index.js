import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.jpg'
import p5 from './p5.jpg'
import p6 from './p6.jpg'
import p7 from './p7.jpg'
import p8 from './p8.png'
import aboutMe from './Aboutme.jpg'

export {
    aboutMe
}

export const slideshowpics = [
    {
        image: p1,       
    },
    {
        image: p2,       
    },
    {
        image: p3,       
    },
    {
        image: p4,        
    },
    {
        image: p5,       
    },
    {
        image: p6,       
    },
    {
        image: p7,       
    },
    {
        image: p8,       
    },
    
];

export const portfolioImages = [];
for (let i = 1; i <= 22; i++) {
    portfolioImages.push(require(`../PortfolioAssets/img${i}.jpg`));
}

