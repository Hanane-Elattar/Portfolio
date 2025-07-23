import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from '@formspree/react';
import * as Yup from "yup";
import { Audio } from "react-loader-spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Schéma de validation
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Adresse email invalide.").required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

// Composant pour l'alerte stylisée
const CustomAlert = ({ message, type, onClose }) => {
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
            className={`p-4 rounded-lg shadow-lg max-w-xs w-full ${
              type === 'success' ? 'bg-green-600' : 'bg-red-600'
            } text-white`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-md font-semibold mb-1">
              {type === 'success' ? 'Succès' : 'Erreur'}
            </h3>
            <p className="text-sm">{message}</p>
            <button
              onClick={onClose}
              className="mt-3 bg-white text-gray-900 px-3 py-1 text-sm rounded-md hover:bg-gray-200 transition-all duration-200"
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function Contact() {
  const [state, handleSubmit] = useForm("xgvvplag"); 
  const [alert, setAlert] = useState({ message: '', type: '' });

  const succeededMessage = () => {
    setAlert({
      message: "Le message a été envoyé avec succès !",
      type: 'success',
    });
  };

  const errorMessage = () => {
    setAlert({
      message: "Une erreur s'est produite lors de l'envoi du message.",
      type: 'error',
    });
  };

  const closeAlert = () => {
    setAlert({ message: '', type: '' });
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      await handleSubmit(values); // Formspree handleSubmit accepte directement les valeurs

      if (state.succeeded) {
        succeededMessage();
        resetForm(); // Vide le formulaire
      } else {
        // Vérifie si state.errors est un tableau et non null/undefined
        if (Array.isArray(state.errors) && state.errors.length > 0) {
          errorMessage();
        } else {
          // Gestion d'erreur générique si state.errors n'est pas défini
          errorMessage();
        }
      }
    } catch (error) {
      // Capture les erreurs réseau ou autres exceptions
      console.error("Erreur lors de l'envoi du formulaire:", error);
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
        onSubmit={handleFormSubmit}
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
              disabled={state.submitting}
              className="flex justify-center items-center w-full mt-6 bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-purple-400 transition-all duration-300 disabled:opacity-50"
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
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )}
            </motion.button>

            <ToastContainer position="bottom-right" />
          </Form>
        )}
      </Formik>

      <CustomAlert
        message={alert.message}
        type={alert.type}
        onClose={closeAlert}
      />
    </section>
  );
}

export default Contact;