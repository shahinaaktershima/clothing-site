

const Card = ({data}) => {
    const{title, name }=data;
    return (
        <div >
            <div className="card card-compact h-[400px] bg-base-100 shadow-xl">
   
    <figure><iframe width="560" height="315" src="https://www.youtube.com/embed/XPcajfG8zYY?si=gBXF-vC6hFO7yvYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{name}</p>
   
  </div>
</div>
        </div>
    );
};

export default Card;