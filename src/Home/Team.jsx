

const Team = () => {
    return (
       <div>
        <h2 className="text-center my-10 text-4xl font-bold">Meet Our Team</h2>
         <div className="grid grid-cols-6 max-w-[1300px] gap-5 mx-auto">
            
           
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src="shikha.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title ">Mst. Shikha Khatun</h2>
                <p>ID:2030668</p>
                
            </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src="shima.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shahina Akter Shima</h2>
                <p>ID:2421146</p>
              
            </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src="sarara.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sarara Akbar</h2>
                <p>ID:2020113</p>
             
            </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src="arefin.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Syed Shamsul Arefin</h2>
                <p>ID:1931335</p>
               
            </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src="Soumik.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Soumik Alam</h2>
                <p>ID:2030479</p>
               
            </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[200px] w-full" src="rafi.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Abu Ahamed Rafi</h2>
                <p>ID: 1910001</p>
              
            </div>
            </div>
            
        </div>
       </div>
    );
};

export default Team;