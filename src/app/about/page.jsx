import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>Welcome to About</Title>
            <nav className='space-x-5'>
                <Link href={"/about/blog"}>Blog</Link>
                <Link href={"/about/contact"}>Contact</Link>
            </nav>
        </div>
    );
};

export default About;