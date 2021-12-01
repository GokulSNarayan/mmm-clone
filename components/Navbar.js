import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <ul className="fixed top-0 flex items-center h-18 w-74 pt-4">
            <span className='mr-8'>
                <Image src='/images/mmm_new_logo.png' alt='mmm-new-logo' width={250} height={60} />
            </span>
            <li className='mr-8'>
                <Link href='/' ><a>Home</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/about' ><a>About</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/our-instructors' ><a>Our Instructors</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/gallery' ><a>Gallery</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/contact' ><a>Contact</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/faq' ><a>FAQ</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/mmm-calender' ><a>MMM Calender</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/view-classes' ><a>View Classes</a></Link>
            </li>
            <li className='mr-8'>
                <Link href='/profile' ><a>Profile icon</a></Link>
            </li>
        </ul>
    )
}