

const Banner = () => {
    return (
        <div className="">
           <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.postimg.cc/SxtcKzHq/image.png)'}}>
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-neutral-950">Hello there</h1>
                <p className="mb-5 text-justify text-neutral-950 font-bold ">Welcome to our boutique shop, where we curate exclusive, high-quality designed for those who value individuality. Our handpicked collections blend the latest trends with timeless elegance, offering unique and limited-edition pieces. We believe in craftsmanship and creativity, ensuring that each item tells a story. Explore our shop to find something special that speaks to your style, and let it be part of your journey!</p>
                <button className="btn btn-primary text-xl">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;