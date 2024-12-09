import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from '@formspree/react';
import * as Yup from "yup";
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Adresse email invalide.").required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

// Function to generate random line styles
const generateRandomLineStyles = () => {
  const randomTop = Math.random() * 100 + "%";
  const randomLeft = Math.random() * 70 + "%";
  const randomRotation = Math.random() * 190 + "deg";
  const randomLength = Math.random() * 70 + "px";
  const randomWidth = Math.random() * 1 + "px"; // Thin lines
  return {
    top: randomTop,
    left: randomLeft,
    transform: `rotate(${randomRotation})`,
    width: randomLength,
    height: randomWidth,
  };
};

function Contact() {
  // Handler de soumission de formulaire
  const [state, handleSubmit] = useForm("xanydyqk");
  const succededMessage = () => toast.success('Un message a été envoyé avec succès');
  const errorMessage = () => toast.error("Une erreur s'est produite.");

  // Generate 15 random lines
  const lines = Array.from({ length: 15 }).map(() => generateRandomLineStyles());

  return (
    <section id="contactez-moi" className="font-poppins relative isolate px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center justify-center">
      {/* Render random lines */}
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute bg-purple-500"
          style={line}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}
        />
      ))}

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
        onSubmit={handleSubmit}
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

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="flex justify-center text-center items-center w-full mt-6 bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-400 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={state.succeeded ? succededMessage : errorMessage}
            >
              {
                !state.submitting ? 'Envoyer' : 
                <Audio 
                  height="25"
                  width="25"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              }
            </motion.button>

            <ToastContainer position="bottom-right"/>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Contact;
