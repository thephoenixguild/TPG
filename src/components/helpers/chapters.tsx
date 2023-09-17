export const getChapterData = (location: string) => {
    switch (location) {
        case "ahmedabad":
            return {
                name: "Ahmedabad",
                logo: "/ahmedabad/logo.svg"
            };
        case "bhopal":
            return {
                name: "Bhopal",
                logo: "/bhopal/logo.svg",
                members: [
                    {
                        name: "Shouryam Kumar",
                        position: "DIRECTOR",
                        url: '/bhopal/shouryam.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/shouryam-kumar-1109b7139/",
                            twitter: "https://twitter.com/ShouryamK"
                        }
                    },
                    {
                        name: "Ashutosh Jha",
                        position: "DIRECTOR",
                        url: '/bhopal/ashutosh.svg',
                        socialMedia: {
                            twitter: "https://twitter.com/ashutosh887_"
                        }
                    }
                ]
            };
        case "chennai":
            return {
                name: "Chennai",
                logo: "/chennai/logo.svg",
                members: [
                    {
                        name: "Ovia Seshadri",
                        position: "DIRECTOR - PARTNERSHIP",
                        url: '/chennai/ovia.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/ovia-seshadri-14b75124",
                            twitter: "https://twitter.com/ovia_seshadri"
                        }
                    },
                    {
                        name: "Vennila Seshadri",
                        position: "DIRECTOR - SOCIAL MEDIA",
                        url: '/chennai/vennila.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/vennila-seshadri-9b286b192",
                            twitter: "https://twitter.com/VennilaSeshadri"
                        }
                    },
                    {
                        name: "Vairamuthu M",
                        position: "TECH LEAD",
                        url: '/chennai/vairamuthu.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/vmmuthu31/",
                            twitter: "https://twitter.com/Barfi_31"
                        }
                    },
                    {
                        name: "Thirumurugan Sivalingam",
                        position: "TECH LEAD",
                        url: '/chennai/thirumurugan.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/thiru-murugan-935464218/",
                            twitter: "https://twitter.com/Thiru_levi"
                        }
                    }
                ]
            };
        case "delhi":
            return {
                name: "Delhi",
                logo: "/delhi/logo.svg",
                members: [
                    {
                        name: "Gagandeep kaur",
                        position: "DIRECTOR - SOCIAL MEDIA",
                        url: '/delhi/gagandeep.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/gagandeep-kaur-370669239/",
                            twitter: "https://twitter.com/Gagandeep_1523",
                            instagram: "https://www.instagram.com/gagandeepkaur_17/"
                        }
                    },
                    {
                        name: "Prabhpreet Singh",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/delhi/prabhpreet.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/prabhpreet-singh-387395191/",
                            twitter: "https://twitter.com/_PrabhpreetSing",
                            instagram: "https://www.instagram.com/prabhpreet.singh.0203/"
                        }
                    },
                    {
                        name: "Yashika Chugh",
                        position: "DIRECTOR - COMMUNITY",
                        url: '/delhi/yashika.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/yashikac/",
                            twitter: "https://twitter.com/YashikaChugh4"
                        }
                    },
                    {
                        name: "Sneha Kumari",
                        position: "DIRECTOR - TECH",
                        url: '/delhi/sneha.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/snehasharma76/",
                            twitter: "https://twitter.com/audaciousSneha"
                        }
                    }
                ]
            };

        case "hyderabad":
            return {
                name: "Hyderabad",
                logo: "/hyderabad/logo.svg",
                members: [
                    {
                        name: "Venkatesh Kanchanpally",
                        position: "DIRECTOR - TECH",
                        url: '/hyderabad/venkatesh.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/venkatesh-kanchanpally-4010b650/",
                            twitter: "https://twitter.com/thankseve"
                        }
                    }
                ]
            };

        case "jaipur":
            return {
                name: "Jaipur",
                logo: "/jaipur/logo.svg",
                members: [
                    {
                        name: "Avani Agarwal",
                        position: "DIRECTOR",
                        url: '/jaipur/avani.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/avani-agarwal-49a927226",
                            twitter: "https://twitter.com/AvaniAgarwal110",
                            instagram: "https://instagram.com/tpg_jaipur_/"
                        }
                    }
                ]
            };

        case "karnataka":
            return {
                name: "Karnataka",
                logo: "/karnataka/logo.svg",
                members: [
                    {
                        name: "Adi Bhagavath",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/karnataka/adi.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/adi-bhagavath",
                            twitter: "https://twitter.com/BhagavathAdi"
                        }
                    },
                    {
                        name: "Saurabh Shetty",
                        position: "DIRECTOR - SOCIAL MEDIA",
                        url: '/karnataka/saurabh.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/saurabh-shetty-5b9281128",
                            twitter: "https://twitter.com/Saurab9290",
                            instagram: "https://www.instagram.com/sauraj9290/"
                        }
                    }
                ]
            };

        case "kerala":
            return {
                name: "Kerala",
                logo: "/kerala/logo.svg",
                members: [
                    {
                        name: "Aswin Lal S",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/kerala/aswin.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/aswinlals/",
                            instagram: "https://instagram.com/aswinlals.lens"
                        }
                    },
                    {
                        name: "Harsha Johny",
                        position: "DIRECTOR - CONTENT",
                        url: '/kerala/harsha.svg',
                        socialMedia: {
                            linkedin: "https://linkedin.com/in/harsha-johny-5ab21b195",
                            instagram: "https://www.instagram.com/harshajny/"
                        }
                    },
                    {
                        name: "Nived Gop",
                        position: "DIRECTOR - COMMUNITY",
                        url: '/kerala/nived.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/nived-gop-b22012236",
                            instagram: "https://instagram.com/nivedgop"
                        }
                    },
                    {
                        name: "Sneha Vijayan",
                        position: "DIRECTOR - OPERATIONS",
                        url: '/kerala/sneha.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/sneha-vijayan-0a8608169",
                            twitter: "https://twitter.com/sne_vijayan",
                            instagram: "https://www.instagram.com/wirl18/"
                        }
                    },
                    {
                        name: "Divya Varalakshmi",
                        position: "TECH LEAD",
                        url: '/kerala/divya.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/v-divya-vara-lakshmi-67611624b",
                            twitter: "https://twitter.com/divya150803",
                            instagram: "https://www.instagram.com/v_divya15/"
                        }
                    },
                    {
                        name: "Diksha Srivastava",
                        position: "PARTNERSHIP LEAD",
                        url: '/kerala/diksha.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/diksha-srivastava-063730217",
                            twitter: "https://twitter.com/diksha_mess"
                        }
                    },
                    {
                        name: "Ishika Ishani",
                        position: "SOCIAL MEDIA LEAD",
                        url: '/kerala/ishika.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/ishika-ishani-105281171",
                            twitter: "https://twitter.com/ishikaishani",
                            instagram: "https://www.instagram.com/ishikaishani/"
                        }
                    }]
            };

        case "mumbai":
            return {
                name: "Mumbai",
                logo: "/mumbai/logo.svg",
                members: [
                    {
                        name: "Shweta Bhattad",
                        position: "DIRECTOR",
                        url: '/mumbai/shweta.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/shweta-bhattad-962228169/",
                            twitter: "https://twitter.com/shweta_bhattad",
                            instagram: "https://www.instagram.com/shweta_bhattad/"
                        }
                    },
                    {
                        name: "Pritish Wadhwa",
                        position: "TECH LEAD",
                        url: '/mumbai/pritish.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/pritishwadhwa/",
                            twitter: "https://twitter.com/pritishwadhwa",
                            instagram: "https://www.instagram.com/pritishwadhwa/"
                        }
                    }
                ]
            };

        case "pune":
            return {
                name: "Pune",
                logo: "/pune/logo.svg",
                members: [
                    {
                        name: "Shabbir Khan",
                        position: "DIRECTOR - PARTNERSHIP",
                        url: '/pune/shabbir.svg',
                        socialMedia: {
                            googleDrive: "https://drive.google.com/file/d/1ZkpR6Dv2rfO78rh6D8D9xRp4xDmBVm34/view?usp=drivesdk",
                            instagram: "https://www.instagram.com/shabbiryk/",
                            linkedin: "https://www.linkedin.com/in/shabbiryk/",
                            twitter: "https://twitter.com/shabbiryk"
                        }
                    }
                    ,
                    {
                        name: "Gaurav Sarage",
                        position: "CONTENT + TECH LEAD",
                        url: '/pune/gaurav.svg',
                        socialMedia: {
                            instagram: "https://instagram.com/gauravsarage_19",
                            linkedin: "https://linkedin.com/in/gaurav-sarage",
                            twitter: "https://twitter.com/gauravsarage4"
                        }
                    },
                    {
                        name: "Ishan Deshpande",
                        position: "PARTNERSHIP LEAD",
                        url: '/pune/ishan.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/ishan-deshpande-700189228",
                            twitter: "https://x.com/Ishandesh07?t=-n6oKiAP4i_Ui1hPJB2lWg&s=09"
                        }
                    }
                    ,
                    {
                        name: "Onkar Falle",
                        position: "TECH LEAD",
                        url: '/pune/onkar.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/onkarfalle/",
                            twitter: "https://twitter.com/nko_load_gheu",
                            googleDrive: "https://drive.google.com/drive/folders/1tN4SLaAGr0VQuhmkFk-E6PESu-Wl6wpO?usp=sharing",
                            telegram: "https://drive.google.com/drive/folders/1TZKgNjVA3GmTIODyXKOKcNMNn2cNodqT?usp=drive_link",
                            whatsapp: "https://chat.whatsapp.com/FszHWlMTBbF4v9Av0L8DNe"
                        }
                    }
                ]
            };

        case "kolkata":
            return {
                name: "Kolkata",
                logo: "/kolkata/logo.svg",
                members: [
                    {
                        name: "Sumita Pathak",
                        position: "DIRECTOR",
                        url: '/kolkata/sumita.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/sumita-pathak-91699a215/",
                            twitter: "https://twitter.com/SumitaPathak1",
                            instagram: "https://www.instagram.com/httpsumita/"
                        }
                    },
                    {
                        name: "Sweta Shaw",
                        position: "DIRECTOR",
                        url: '/kolkata/sweta.svg',
                        socialMedia: {
                            linkedin: "https://www.linkedin.com/in/sweta-shaw/",
                            twitter: "https://twitter.com/swetashaw_",
                            instagram: "https://www.instagram.com/sweta.shaw__/"
                        }
                    }
                ]
            };

        case "kualalumpur":
            return {
                name: "Kuala Lumpur",
                logo: "/kuala/logo.svg",
                members: [
                    {
                        name: "Yudhishthra Sugumaran",
                        position: "DIRECTOR",
                        url: '/kuala/yudhistra.svg',
                        socialMedia: {
                            twitter: "https://twitter.com/0xYudhishthra"
                        }
                    },
                    {
                        name: "YeeChian",
                        position: "DIRECTOR",
                        url: '/kuala/yeechian.svg',
                        socialMedia: {
                            twitter: "https://twitter.com/ycchian04"
                        }
                    }
                ]
            };

        default:
            return null; // Return null if the location is not found
    }
};

