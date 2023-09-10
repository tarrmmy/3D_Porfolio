import { Html, useProgress } from '@react-three/drei'


const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
        <span className='canvas-load'></span>
        <p
        style={{ fontWeight:800,fontSize:14, marginTop:40, color:'#f1f1f1'}}
        >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader