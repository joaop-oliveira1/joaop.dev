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
      .then(console.log)
      .catch(console.log);
  }

  return (
    <Container pageTitle="PM.me">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>name</label>
        <input name="name" ref={register} />
        <label>email</label>
        <input name="email" ref={register} />
        <textarea name="message" ref={register} />

        <button type="submit">pm.me</button>
      </form>
    </Container>
  );
};

export default ContactPage;
