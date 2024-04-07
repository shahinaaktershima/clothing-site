

const Banner = () => {
    return (
        <div className="">
           <div className="hero min-h-screen " style={{backgroundImage: 'url(farm.jpg)'}}>
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-blue-300">Hello there</h1>
                <p className="mb-5 text-justify text-blue-300 font-bold ">Our website, established on principles of sustainability and ethical husbandry, specializes in the breeding and raising of premium cattle. Utilizing advanced agricultural practices within an eco-conscious framework, we are committed to producing high-quality beef. Our dedication to environmental stewardship and animal welfare underscores our mission to be at the forefront of responsible farming.</p>
                <button className="btn btn-primary text-xl">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;