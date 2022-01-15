export interface MarkerProps {
  id: string;
}

const Marker = ({ id }: MarkerProps) => {
  return (
    <div className="marker-container">
      <div className="marker" id={id}/>
    </div>
  )
}

export default Marker;
