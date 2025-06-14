// importing multiple images from a directory dynamically
const nameFile = (r) => {  // r is object Datatype with key being file name in './name.jpg' format and value being reference to that image
  let images = {}; // creating empty images object Datatype
  r.keys().forEach((key) => {
    const name = key.replace('./', '').split('.')[0]; // removes './' and file extension
    images[name] = r(key); // r(key) returns actual reference to the image
  });
  return images;
};
const images = nameFile(require.context('../images/members', false, /\.(png|jpe?g|svg)$/));

const CurrentTeam = [
    {
        Image: images['Ishwor'],
        Name: "Ishwor Raj Pokharel",
        Role: "Co-ordinator"
    },
    {
        Image: images['Prabesh'],
        Name: "Prabesh Babu Adhikari",
        Role: "Secretary"
    },
    {
        Image: images['Nirika'],
        Name: "Nirika Lamichhane",
        Role: "Joint Secretary"
    },
    {
        Image: images['Sujal'],
        Name: "Sujal Mainali",
        Role: "Lead Research Advocate"
    },
    {
        Image: images['Yugal'],
        Name: "Yugal Nyoupane",
        Role: "Lead Software Coordinator"
    },
    {
        Image: images['Shreya'],
        Name: "Shreya Adhikari",
        Role: "Marketing Director"
    },
    {
        Image: images['Samiksha'],
        Name: "Samiksha Dhakal",
        Role: "Marketing Associate"
    },
    {
        Image: images['Shreeichchha'],
        Name: "Shreeichchha K.C.",
        Role: "Social Media Manager"
    },
    {
        Image: images['Pankaj'],
        Name: "Pankaj Kumar Mehta",
        Role: "Research Advocate"
    },
    {
        Image: images['Avignya'],
        Name: "Avignya Gautam",
        Role: "Research Advocate"
    },
    {
        Image: images['Biraj'],
        Name: "Biraj Rijal",
        Role: "Junior Research Advocate"
    },
    {
        Image: images['Dhiraj'],
        Name: "Dhiraj Jung Pandey",
        Role: "Junior Research Advocate"
    },
    {
        Image: images['Sandesh'],
        Name: "Sandesh Kandel",
        Role: "Junior Research Advocate"
    },
    {
        Image: images['Ruby'],
        Name: "Ruby Kumari Sah",
        Role: "Graphics Designer"
    },
    {
        Image: images['Balram'],
        Name: "Balram Sharma Kandel",
        Role: "Graphics Designer"
    },
    {
        Image: images['Kashmir'],
        Name: "Kashmir Shrestha",
        Role: "Software Coordinator"
    }
]

export default CurrentTeam;