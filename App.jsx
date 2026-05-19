export default function App() {
  const products = [
    { name: "Hennah Design", price: "₦5,000" },
    { name: "Beauty Products", price: "₦8,000" },
    { name: "Fashion Footwear", price: "₦12,000" },
    { name: "Custom Stickers", price: "₦3,500" }
  ];

  return (
    <div style={{
      background:"#000",
      color:"#d4af37",
      minHeight:"100vh",
      fontFamily:"Arial",
      padding:"20px"
    }}>
      <div style={{
        maxWidth:"900px",
        margin:"auto",
        textAlign:"center"
      }}>
        <img
          src="/logo.png"
          alt="logo"
          style={{
            width:"180px",
            borderRadius:"20px",
            border:"4px solid gold"
          }}
        />

        <h1 style={{fontSize:"50px"}}>HAJJAJU'S</h1>

        <p style={{fontSize:"22px"}}>
          Hennah, Stickers, Beauty Products,
          Footwear and Fashion
        </p>

        <a
          href="https://wa.me/2349033062922"
          style={{
            display:"inline-block",
            background:"gold",
            color:"#000",
            padding:"15px 30px",
            borderRadius:"15px",
            textDecoration:"none",
            fontWeight:"bold",
            marginBottom:"30px"
          }}
        >
          WhatsApp Order
        </a>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px"
        }}>
          {products.map((item,index)=>(
            <div key={index} style={{
              background:"#111",
              padding:"20px",
              borderRadius:"20px",
              border:"2px solid gold"
            }}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>

              <a
                href={`https://wa.me/2349033062922?text=Hello I want to order ${item.name}`}
                style={{
                  display:"block",
                  background:"gold",
                  color:"#000",
                  padding:"12px",
                  borderRadius:"12px",
                  textDecoration:"none",
                  fontWeight:"bold"
                }}
              >
                Order Now
              </a>
            </div>
          ))}
        </div>

        <div style={{
          marginTop:"40px",
          padding:"20px",
          border:"2px solid gold",
          borderRadius:"20px"
        }}>
          <h2>Location</h2>
          <p>Kofar Dumi Opposite Baba Ma'aji House, Bauchi State</p>
          <p>Phone: 09033062922</p>
        </div>
      </div>
    </div>
  )
}
