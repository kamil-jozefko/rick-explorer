type AvatarProps = {
    src: string;
    alt: string;
    size?: number;
};

export default function Avatar({ src, alt, size = 96 }: AvatarProps) {
    return (
        <div
            className="inline-block rounded-full overflow-hidden shadow-md
        ring-2 ring-indigo-500 dark:ring-indigo-400"
            style={{ width: size, height: size }}
            role="img"
            aria-label={alt}
        >
            <img
                src={src}
                alt={alt}
                width={size}
                height={size}
                className="object-cover"
            />
        </div>
    );
}
