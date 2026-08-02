function DashboardCards(){
    const data=[
        {
            title:"Students",
            value:130,
            icon:"👨‍🎓"
        },
        {
            title:"Courses",
            value:5,
            icon:"📚"
        },
        {
            title:"Active",
            value:125 ,
            icon:"🟢"
        },
        {
            title:"Average",
            value:"A+",
            icon:"⭐"
        }
    ]
    return(
        <>
        <div className="dashboard">
            {data.map((card,index)=>(
                <div className="dashboard-card" key={index}>
                    <h2>{card.icon}</h2>
                    <h3>{card.value}</h3>
                    <p>{card.title}</p>

                </div>
            ))}
            
        </div>
        </>
    )
}
export default DashboardCards