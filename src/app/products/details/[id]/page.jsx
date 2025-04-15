function page({params}) {
  const id = params.id;
  console.log(params)
  return <div>{id}</div>;
}

export default page;
