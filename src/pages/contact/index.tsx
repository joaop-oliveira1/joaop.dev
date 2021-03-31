import { useForm } from "react-hook-form";
import Container from "../../components/container/Container";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(values) {
    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => alert("Thanks, assim que possivel darei o retorno!"))
      .catch(() => alert("Algo deu errado..."));
  }

  return (
    <Container pageTitle="PM.me">
      <form
        className=" bg-white px-5 py-5 md:mx-20 shadow-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex flex-col justify-center">
          <label>name</label>
          <input name="name" type="text" ref={register} required />
          <label>email</label>
          <input name="email" type="email" ref={register} required />
          <label>message</label>
          <textarea name="message" ref={register} required />
          <button type="submit" className="btn btn-warning">
            pm.me
          </button>
        </section>
      </form>
    </Container>
  );
};

export default ContactPage;
