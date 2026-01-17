import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";
import { Audio } from "react-loader-spinner";

// Schéma de validation
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Adresse email invalide.").required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

// Composant pour l'alerte stylisée
const CustomAlert = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // tatmsah automatically 4s
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`p-4 rounded-lg shadow-lg max-w-xs w-full flex items-center ${
              type === 'success' ? 'bg-green-600' : 'bg-red-600'
            } text-white`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon succès ou erreur */}
            <div className="mr-3">
              {type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-md font-semibold mb-1">
                {type === 'success' ? 'Succès' : 'Erreur'}
              </h3>
              <p className="text-sm">{message}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function Contact() {
  const [state, handleSubmit] = useForm("xgvvplag"); 
  const [alert, setAlert] = useState({ message: '', type: '' });

  const closeAlert = () => setAlert({ message: '', type: '' });

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      await handleSubmit(values);
      if (!state.submitting) {
        setAlert({ message: "Le message a été envoyé avec succès !", type: "success" });
        resetForm();
      }
    } catch (error) {
      setAlert({ message: "Une erreur s'est produite lors de l'envoi du message.", type: "error" });
    }
  };

  return (
    <section 
    id="contact"
    className="font-poppins relative isolate px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-purple-500 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-12 mt-20">
        Contactez-moi
      </h2>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {() => (
          <Form className="w-full max-w-lg space-y-8 p-6 bg-gray-900 bg-opacity-60 rounded-lg shadow-lg">
            {/* Nom */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-white">Nom</label>
              <Field
                id="name"
                name="name"
                className="mt-2 p-3 rounded-md bg-gray-700 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Votre nom"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-white">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-2 p-3 rounded-md bg-gray-700 text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Votre email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Message */}
            <div className="flex flex-col">
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
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={state.submitting}
              className="flex justify-center items-center w-full mt-6 bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-400 transition-all duration-300 disabled:opacity-50"
            >
              {!state.submitting ? "Envoyer" : (
                <Audio height="25" width="25" radius="9" color="green" ariaLabel="loading" />
              )}
            </button>
          </Form>
        )}
      </Formik>

      {/* Alert */}
      <CustomAlert
        message={alert.message}
        type={alert.type}
        onClose={closeAlert}
      />
    </section>
  );
}

export default Contact;