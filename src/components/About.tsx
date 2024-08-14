type Feature = {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

const features: Feature[] = [
    {
        name: 'Our Philosophy',
        description:
            "At Ferrara Real NY Pizza, we believe that great food should be made with love, care, and attention to detail. That's why we use only the freshest ingredients, grown and harvested locally whenever possible. Our goal is to create a dining experience that is both delicious and sustainable, so you can feel good about what you're eating.",
        imageSrc: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Our Philosophy.',
    },
    {
        name: 'Our Cuisine',
        description:
            "Our menu is inspired by the rich culinary traditions of Italy, focusing on simple, flavorful dishes that showcase the best ingredients of each season. From homemade pasta to wood-fired pizza, everything on our menu is made fresh to order and cooked with care by our talented chefs.",
        imageSrc: 'https://images.unsplash.com/photo-1556910101-a533e487de15?q=80&w=600&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Our Cuisine',
    },
    {
        name: 'Our Wine',
        description:
            "At Ferrara Real NY Pizza, we believe that great food deserves great wine. That's why we offer an extensive list of carefully curated wines from Italy and beyond, selected to complement our menu and enhance your dining experience. Our knowledgeable staff can help you choose the perfect bottle to pair with your meal.",
        imageSrc: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=600&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Our Wine',
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function About() {
    return (
        <div id="about" className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-3xl font-extrabold text-red-700 sm:text-4xl">About Ferrara Real NY Pizza</h1>
                </div>

                <div className="mt-16 space-y-16">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7',
                                    'mt-6 lg:col-span-6 lg:row-start-1 lg:mt-0',
                                )}
                            >
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{feature.name}</h2>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1',
                                    'flex-auto lg:col-span-6 lg:row-start-1',
                                )}
                            >
                                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                    <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};


