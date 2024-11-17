

function HeaderContent (pros) {
  const data=navigator;
  
  return (
    <div className="main">
        <h1 className="titleName" align="center">{pros.name}</h1>
       
       <div className="tableName">
       <table>
         <th>DEVICE KEYS</th>
         <th>DESCRIPTION</th>
         
          <tr>
           <td>AppCodeName</td>
           <td>{data.appCodeName}</td>
         </tr> 
         
         <tr>
           <td>AppName</td>
           <td>{data.appName}</td>
         </tr>
         
          <tr>
           <td>AppVersion</td>
           <td>{data.appVersion}</td>
         </tr>
         
            <tr>
           <td>UserAgent</td>
           <td>{data.userAgent}</td>
         </tr>
         
            <tr>
           <td>Platform</td>
           <td>{data.platform}</td>
         </tr>
         
   <tr>
           <td>DeviceMemory</td>
           <td>{data.deviceMemory}</td>
         </tr>
         
         <tr>
           <td>HardwareConcurrency</td>
           <td>{data.hardwareConcurrency}</td>
         </tr>
         
         <tr>
           <td>Vendor</td>
           <td>{data.vendor}</td>
         </tr> 
         
          
         
           <tr>
           <td>Product</td>
           <td>{data.product}</td>
         </tr> 
         
           <tr>
           <td>ProductSub</td>
           <td>{data.productSub}</td>
         </tr> 
         
        
       </table>
       </div>
       
    </div>
    )
}

export default HeaderContent;