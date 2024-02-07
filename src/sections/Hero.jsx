import { codingBro } from '../assets/images';

const Hero = () => {
  return (
    <div className="flex h-[500px] items-center text-zinc-300">
      <div className="me-auto">
        <h1>
          <span class="text-[50px]">Hi</span>
          <br />
          My Name is ISAAC
        </h1>
      </div>
      <div>
        <img
        className='flip-horizontal'
          src={codingBro}
          height={500}
          width={500}
          alt="" />
      </div>

    </div>
  )
}

export default Hero