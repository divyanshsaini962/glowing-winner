import SectionShell from "../ui/SectionShell";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Image from "next/image";

export default function StoreHighlightSection() {
    const products = [
        {
            name: "Sheet Music Collection",
            price: "$9.99",
            category: "Digital",
            image: "/images/store/sheet-music.png",
        },
        {
            name: "Piano Accessories",
            price: "$24.99",
            category: "Physical",
            image: "/images/store/accessories.png",
        },
        {
            name: "Lesson Books",
            price: "$19.99",
            category: "Educational",
            image: "/images/store/lessons.png",
        },
    ];

    return (
        <SectionShell className="bg-softBg">
            {/* Heading */}
            <div className="flex flex-col items-center text-center mb-12">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-bodyText/70 mb-3">
                    Store
                </p>

                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-4">
                    Shop{" "}
                    <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
                        Piano Essentials
                    </span>
                </h2>

                <p className="text-lg text-bodyText/80 max-w-2xl leading-relaxed text-center text-balance w-full">
                    A curated collection of sheet music, learning materials, and
                    accessories to elevate your piano journey.
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {products.map((product) => (
                    <Card
                        key={product.name}
                        premium
                        className="hover-lift bg-white/90 border border-softBorder/60 shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Product Image */}
                        <div className="relative aspect-square rounded-xl mb-4 overflow-hidden shadow-sm group">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Category */}
                        <div className="text-xs font-medium tracking-wide text-bodyText/60 uppercase mb-1">
                            {product.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-heading font-semibold mt-1 mb-2 text-headingText">
                            {product.name}
                        </h3>

                        {/* Price + CTA */}
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] bg-clip-text text-transparent">
                                {product.price}
                            </span>

                            <Button
                                variant="secondary"
                                className="bg-white/80 backdrop-blur-md border border-softBorder text-headingText hover:border-lavender hover:bg-white transition-all"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Spacer to prevent margin collapse */}
            <div className="h-12 w-full" />

            {/* View All CTA */}
            <div className="text-center pt-4">
                <Button
                    variant="primary"
                    className="bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                    Browse All Products
                </Button>
            </div>

        </SectionShell>
    );
}
