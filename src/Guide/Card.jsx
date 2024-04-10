

const Card = ({data}) => {
    const{title, name }=data;
    return (
        <div >
            <div className="card card-compact h-[400px] bg-base-100 shadow-xl">
   
    <figure><iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/s04CwCvPV8k?si=MkGa1ecGkGDqoX3M" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{name}</p>
   
  </div>
</div>
        </div>
    );
};

export default Card;