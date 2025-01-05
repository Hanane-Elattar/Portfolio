import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from '@formspree/react';
import * as Yup from "yup";
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Schéma de validation
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Adresse email invalide.").required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

function Contact() {
  const [state, handleSubmit] = useForm("xgvvplag"); 
  const succeededMessage = () => toast.success('Un message a été envoyé avec succès');
  const errorMessage = () => toast.error("Une erreur s'est produite.");

  
  const handleFormSubmit = async (values, { resetForm }) => {
    const response = await handleSubmit({
      name: values.name,
      email: values.email,
      message: values.message,
    });

    if (response.succeeded) {
      succeededMessage();
      resetForm(); // Réinitialise le formulaire après succès
    } else {
      errorMessage();
    }
  };

  return (
    <section
      id="contactez-moi"
      className="font-poppins relative isolate px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 mt-20 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Contactez-moi
      </motion.h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit} // Fonction personnalisée
      >
        {({ touched, errors }) => (
          <Form className="w-full max-w-lg space-y-8 p-6 bg-gray-900 bg-opacity-60 rounded-lg shadow-lg">
            {/* Nom */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="name" className="text-lg text-white">Nom</label>
              <Field
                id="name"
                name="name"
                className="mt-2 p-3 rounded-md bg-gray-700 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Votre nom"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="email" className="text-lg text-white">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-2 p-3 rounded-md bg-gray-700 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Votre email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Message */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="message" className="text-lg text-white">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="mt-2 p-3 rounded-md bg-gray-700 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Votre message"
                rows="4"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Bouton d'envoi */}
            <motion.button
              type="submit"
              className="flex justify-center items-center w-full mt-6 bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-400 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {!state.submitting ? "Envoyer" : (
                <Audio
                  height="25"
                  width="25"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              )}
            </motion.button>

            <ToastContainer position="bottom-right" />
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Contact;
