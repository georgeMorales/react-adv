import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components'
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shoping Page</h1>
            <hr />
            
            <ProductCard 
                key={product.id} 
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({reset, count, increaseBy, isMaxCountReached}) => (
                        <>
                            <ProductImage className="custom-img" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                            <ProductTitle title={product.title} className="text-white text-bold"  />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>reset</button>
                            {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
                            {count >= 2 && <button onClick={() => increaseBy(-2)}>-2</button>}
                            <pre>{count}</pre>
                        </>
                    )
                }
            </ProductCard>
            

        </div>
    )
}
