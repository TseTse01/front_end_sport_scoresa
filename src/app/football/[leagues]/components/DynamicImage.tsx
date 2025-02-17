import Image from "next/image";
interface DynamicImageProps {
    src: string;
    alt: string;
    className?: string;
}
const DynamicImage: React.FC<DynamicImageProps> = ({ src, alt, className }) => {
    return <Image src={src} alt={alt} className={className} />;
};

export default DynamicImage;