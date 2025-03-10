type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = ({ status }: StatusProps) => {
  let msg;
  if (status == "loading") {
    msg = "Loging...";
  } else if (status == "success") {
    msg = "Sucess";
  } else if (status == "error") {
    msg = "Error";
  }
  return <div>Welcome - {status}</div>;
};

export default Status;
