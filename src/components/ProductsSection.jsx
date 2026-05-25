import { R } from './Furigana.jsx'
import { T } from './T.jsx'

export function ProductsSection({title, products}){
  return (
    <div className="products-section">
      <div className="products-inner">
        <div className="products-header">
          <div className="products-label">
            <T jp={<><R k="製品例" r="せいひんれい" dark/> · Product Examples</>} en="Product Examples"/>
          </div>
          <h2 className="products-title">{title}</h2>
          <p className="products-sub">
            <T jp={<><R k="実際" r="じっさい"/>に<R k="バングラデシュ" r="バングラデシュ"/>で<R k="作" r="つく"/>られている<R k="製品" r="せいひん"/>の<R k="例" r="れい"/></>}
               en="Examples of products actually made in Bangladesh"/>
          </p>
        </div>
        <div className="products-grid">
          {products.map((p,i)=>(
            <div key={i} className="pcard">
              <div className="pcard-bg" style={{backgroundImage:`url(${p.img})`}}/>
              <div className="pcard-overlay"/>
              <div className="pcard-content">
                <div className="pcard-cat">{p.cat}</div>
                <div className="pcard-name">{p.name}</div>
                <div className="pcard-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

