import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Ashutosh Jaiswal. All Rights Reserved.`,
    author: {
        name: 'Ashutosh Jaiswal',
        accounts: [
            {
                url: 'https://github.com/jaiswalashutosh',
                label: 'Github Account',
                type: 'gray',
                icon: <FaGithub />
            },
            {
                url: 'https://twitter.com/ashuu_jaiswal',
                label: 'Twitter Account',
                type: 'twitter',
                icon: <FaTwitter />
            },
            // {
            //     url: 'https://dev.to/m_ahmad',
            //     label: 'Dev Account',
            //     type: 'gray',
            //     icon: <FaDev />
            // },
            {
                url: 'https://www.linkedin.com/in/ashutosh~jaiswal/',
                label: 'LinkedIn Account',
                type: 'linkedin',
                icon: <FaLinkedin />
            },
            {
                url: 'https://www.instagram.com/ashuu_jaiswal/',
                label: 'Instagram Account', 
                type: 'red',
                // type: 'instagram',
                icon: <FaInstagram />
            },
            {
                url: 'mailto:contact.ashutoshj@gmail.com',
                label: 'Mail',
                type: 'gray',
                icon: <FiMail />
            }
        ]
    }
};

export default siteConfig;