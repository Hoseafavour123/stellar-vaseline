import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-xl font-montserrat text-coral-red">
          our summer collection
        </h2>
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide You <span className="text-coral-red">Super Quality </span>
          <span className="text-coral-red">Vaseline </span>
          
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Not only is our product known all over the School, it is guaranteed to transform your skin within 7 days. You'll be glowing with the sunlight when you use our product!
          It is super quality
        </p>
        <p className="mt-6 mb-6 lg:max-w-lg info-text">
          No other place can you get such quality skin care products.
        </p>
        <Button label="view details" iconURL={arrowRight} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} width={570} height={522} className="obj"/>
      </div>
    </section>
  )
}

export default SuperQuality