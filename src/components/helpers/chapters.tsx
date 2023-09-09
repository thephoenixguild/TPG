export const getChapterData = (location: any) => {
    switch (location) {
        case "ahmedabad":
            return {
                name: "Ahmedabad"
            }
            break;
        case "bhopal":
            return {
                name: "Bhopal",
                members: [
                    {
                        name: "Shouryam Kumar",
                        position: "DIRECTOR",
                        url: '/bhopal/shouryam.svg'
                    },
                    {
                        name: "Ashutosh Jha",
                        position: "DIRECTOR",
                        url: '/bhopal/ashutosh.svg'
                    }
                ]
            }
            break;
        case "chennai":
            return {
                name: "Chennai",
                members: [
                    {
                        name: "Ovia Seshadri",
                        position: "DIRECTOR - PARTNERSHIP",
                        url: '/chennai/ovia.svg'
                    },
                    {
                        name: "Vennila Seshadri",
                        position: "DIRECTOR - SOCIAL MEDIA",
                        url: '/chennai/vennila.svg'
                    },
                    {
                        name: "Vairamuthu M",
                        position: "TECH LEAD",
                        url: '/chennai/vairamuthu.svg'
                    },
                    {
                        name: "Thirumurugan Sivalingam",
                        position: "TECH LEAD",
                        url: '/chennai/thirumurugan.svg'
                    }
                ]
            }
            break;
        case "delhi":
            return {
                name: "Delhi",
                members: [
                    {
                        name: "Gagandeep kaur",
                        position: "DIRECTOR - social media",
                        url: '/delhi/gagandeep.svg'
                    },
                    {
                        name: "Prabhpreet Singh",
                        position: "DIRECTOR - operations",
                        url: '/delhi/prabhpreet.svg'
                    },
                    {
                        name: "Yashika Chugh",
                        position: "DIRECTOR - COMMUNITY",
                        url: '/delhi/yashika.svg'
                    },
                    {
                        name: "Sneha Kumari",
                        position: "director - tech",
                        url: '/delhi/sneha.svg'
                    }
                ]
            }
            break;
        case "hyderabad":
            return {
                name: "Hyderabad",
                members: [
                    {
                        name: "Venkatesh Kanchanpally",
                        position: "DIRECTOR - TECH",
                        url: '/hyderabad/venkatesh.svg'
                    }
                ]
            }
            break;
        case "jaipur":
            return {
                name: "Jaipur",
                members: [
                    {
                        name: "Avani Agarwal",
                        position: "DIRECTOR",
                        url: '/jaipur/avani.svg'
                    }
                ]
            }
            break;
        case "karnataka":
            return {
                name: "Karnataka",
                members: [
                    {
                        name: "Adi Bhagavath",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/karnataka/adi.svg'
                    }
                    ,
                    {
                        name: "Saurabh Shetty",
                        position: "DIRECTOR - SOCIAL MEDIA",
                        url: '/karnataka/saurabh.svg'
                    }
                ]
            }
            break;
        case "kerala":
            return {
                name: "Kerala",
                members: [
                    {
                        name: "Aswin Lal S",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/kerala/aswin.svg'
                    }
                    ,
                    {
                        name: "Harsha Johny",
                        position: "DIRECTOR - CONTENT",
                        url: '/kerala/harsha.svg'
                    },
                    {
                        name: "Nived Gop",
                        position: "DIRECTOR - COMMUNITY",
                        url: '/kerala/nived.svg'
                    },
                    {
                        name: "Sneha Vijayan",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/kerala/sneha.svg'
                    },
                    {
                        name: "Divya Varalakshmi",
                        position: "TECH LEAD",
                        url: '/kerala/divya.svg'
                    },
                    {
                        name: "Diksha Srivastava",
                        position: "PARTNERSHIP LEAD",
                        url: '/kerala/diksha.svg'
                    },
                    {
                        name: "Ishika Ishani",
                        position: "SOCIAL MEDIA LEAD",
                        url: '/kerala/ishika.svg'
                    }
                ]
            }
            break;

        case "kolkata":
            return {
                name: "Kolkata",
                members: [
                    {
                        name: "Sumita Pathak",
                        position: "DIRECTOR ",
                        url: '/kolkata/sumita.svg'
                    }
                    ,
                    {
                        name: "Sweta Shaw",
                        position: "DIRECTOR ",
                        url: '/kolkata/sweta.svg'
                    }
                ]
            }
            break;

        case "pune":
            return {
                name: "Pune",
                members: [
                    {
                        name: "Shabbir Khan",
                        position: "Director - partnership",
                        url: '/pune/shabbir.svg'
                    }
                    ,
                    {
                        name: "Gaurav Sarage",
                        position: "CONTENT + TECH LEAD",
                        url: '/pune/gaurav.svg'
                    },
                    {
                        name: "Ishan Deshpande",
                        position: "PARTNERSHIP LEAD",
                        url: '/pune/ishan.svg'
                    }
                    ,
                    {
                        name: "Onkar Falle",
                        position: "TECH LEAD",
                        url: '/pune/onkar.svg'
                    }
                ]
            }
            break;
        case "kualalumpur":
            return {
                name: "Kuala Lumpur",
                members: [
                    {
                        name: "Yudhishthra Sugumaran",
                        position: "DIRECTOR",
                        url: '/kuala/yudhistra.svg'
                    }
                    ,
                    {
                        name: "YeeChian",
                        position: "DIRECTOR",
                        url: '/kuala/yeechian.svg'
                    }
                ]
            }
            break;
        default:
            break;
    }

}