

const Card = ({data}) => {
    const{title, name,videoLink }=data;
    return (
        <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
    <figure><iframe className="w-full h-[300px]"
    src={videoLink}>
    </iframe></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{name}</p>
   
  </div>
</div>
        </div>
    );
};

export default Card;