import { useForm } from "react-hook-form";
import Container from "../../components/container/Container";

function FormatFiles() {
  const { register, handleSubmit } = useForm();

  return (
    <Container pageTitle="Format Files">
      <form className="w-full flex justify-between items-center">
        <section className="w-full">
          <label className="block">Coloque o conteudo aqui</label>
          <textarea name="rawcontent" rows={25} />
        </section>
        <section className="w-full">
          <pre></pre>
        </section>
      </form>
    </Container>
  );
}

export default FormatFiles;
