export default function(error = {}) {
  if(error.status === 500)
   {
    return {
      status: 500,
      message: "Ops, algo inesperado ocorreu. Tente novamente!",
    };
  }


  const { status, data: message } = error;

  return { status, message };
}