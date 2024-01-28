import image from '../assets/profile-1.png'
import experience from '../assets/experience.png'
import education from '../assets/education.png'
const aboutData = {
    Imageurl: image,
    titleSmall: "Get to Know more",
    title: "About Me",
    aboutText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet optio nobis suscipit cupiditate, laudantium culpa earum repellendus  provident dolorem maiores officiis hic! Repellendus eligendi neque ad  voluptate iste eveniet. Sed quaerat iste maiores minima similique mollitia consequatur alias repellat atque ex, explicabo tenetur delectus error  consectetur porro ab molestias cum!",
    about: [
        { 
            Image : experience,
            label: 'Experience',
            year: '2+ years',
            work: 'Frontend Development' 

        },
        {   Image: education,
            label: 'Education',
            year: 'B.Sc Computer Science',
            work: 'Maseno University' 
        },
    
    ]
};

export default aboutData;
