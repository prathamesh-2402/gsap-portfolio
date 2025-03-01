const homeServiceData1 = {
    id: 1,
    title: "Digital Marketing",
    image: "https://images.pexels.com/photos/2097103/pexels-photo-2097103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 2023",
    location: "New York, USA",
};

const homeServiceData2 = {
    id: 2,
    title: "Film Making",
    image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Dec 2024",
    location: "Switzerland",
};

const companyLogos = [
    'pfizer',
    'social-alpha',
    'bloom',
    'sleepy-owl',
    'apca',
    'gc',
    'kukufm',
    'guru'
];

const aboutUs = [
    {
        label: 'Art Direction',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        label: 'Digital Retouching',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        label: 'Photography',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

const filmMakingDropdown = ['CORPORATE VIDEOS', 'COMMERCIAL', 'DOCUMENTARY', 'SHORT FILM', 'MUSIC VIDEO', 'EDITING AND COLOR GRADING'];

const digitalMarketingDropdown = ['REELS', 'SMM', 'SEO', 'WEBSITE UI/UX AND DEVELOPMENT'];

const allServices = [...filmMakingDropdown, ...digitalMarketingDropdown];

export { homeServiceData1, homeServiceData2, companyLogos, aboutUs, filmMakingDropdown, digitalMarketingDropdown, allServices };
