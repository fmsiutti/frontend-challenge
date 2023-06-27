import BouncingAnimation from '../modules/offline/BouncingAnimation';
export default function Offline() {

  return (
    <>
      <div className="container">
        <h2 className="text-2xl lg:text-4xl">Oops! You are offline</h2>
        <p className="lg:mt-2">You can connect to the internet or hope that the icon will touch te corner:</p>
        <BouncingAnimation />
      </div>
    </>
  )
}
