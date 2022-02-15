type titleProps={
    title: string
}
export default function Title({title}: titleProps) {
  return (
    <div className="fs-5 fw-bolder">{title}</div>
  )
}
