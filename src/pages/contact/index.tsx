import * as yup from "yup";
import { useMemo } from "react";
import { Formik, Form, Field } from "formik";
import Container from "../../components/container/Container";

const Contact = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required(),
      }),
    []
  );

  const handleSubmit = (values, helpers): void => {
    fetch("/api/email", {
      method: "POST",
      body: values,
    })
      .then((response) => response.json())
      .then(console.log)
      .catch(console.log);
  };

  return (
    <Container pageTitle="pm.me@" className="justify-self-center">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className=" bg-white px-5 py-5 md:mx-20 shadow-lg rounded-lg">
            <section className="flex flex-col justify-center">
              <label className="p-1">seu.nome</label>
              <Field
                name="name"
                required
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <label>seu@email.com</label>
              <Field
                type="email"
                name="email"
                required
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <label>message...</label>
              <textarea
                required
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 px-3 py-2 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button type="submit" className="btn btn-warning">
                Enviar
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Contact;

async function getStaticProps() {
  return {
    props: {
      emailUserId: process.env.NEXT_PUBLIC_EMAILJS_ID,
      emailTemplate: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      emailServiceId: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    },
  };
}
