import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import Footer from "./Footer";


const App = () => {
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      title: "Age Calculator",
      label: "Enter your date of birth",
      button: "Calculate Age",
      result: (age) =>
        `Your age is ${age.years} ${age.years > 1 ? "years" : "year"}, ${
          age.months
        } ${age.months > 1 ? "months" : "month"}, and ${age.days} ${
          age.days > 1 ? "days" : "day"
        }`,
      alertEmpty: "Please enter your birthday",
      alertFuture: "Birthday cannot be in the future!",
    },
    bn: {
      title: "বয়স ক্যালকুলেটর",
      label: "আপনার জন্ম তারিখ দিন",
      button: "বয়স হিসাব করুন",
      result: (age) =>
        `আপনার বয়স ${age.years} বছর, ${age.months} মাস, এবং ${age.days} দিন`,
      alertEmpty: "অনুগ্রহ করে জন্ম তারিখ দিন",
      alertFuture: "জন্ম তারিখ ভবিষ্যতে হতে পারে না!",
    },
  };

  const t = translations[lang];

  const calculateAge = () => {
    if (!birthday) {
      alert(t.alertEmpty);
      return;
    }

    const selectedDate = new Date(birthday);
    const today = new Date();
    if (selectedDate > today) {
      alert(t.alertFuture);
      return;
    }

    const ageCalculated = getAge(birthday);
    setAge(ageCalculated);
  };

  const getAge = (birthdayValue) => {
    const today = new Date();
    const birthDate = new Date(birthdayValue);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-500`}>
      {/* Background */}
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100  to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center px-4 font-poppins">
       
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg border border-white/20 dark:border-gray-500/20 transition-all duration-500"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0 text-center md:text-left drop-shadow-md">
              {t.title}
            </h1>
            <div className="flex items-center gap-3">
              <motion.select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="text-sm rounded-md px-2 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <option value="en">EN</option>
                <option value="bn">BN</option>
              </motion.select>
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="text-sm px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? "Light" : "Dark"}
              </motion.button>
            </div>
          </div>

          {/* Input & Button */}
          <div className="flex flex-col items-center w-full">
            <label
              htmlFor="birthday"
              className="font-semibold text-gray-700 dark:text-gray-200 mb-2 w-full text-center md:text-left drop-shadow-sm"
            >
              {t.label}
            </label>
            <motion.input
              type="date"
              id="birthday"
              name="birthday"
              value={birthday}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white mb-4 backdrop-blur-sm transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              onClick={calculateAge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-lg"
            >
              {t.button}
            </motion.button>

            {/* Result */}
            <AnimatePresence>
              {age && (
                <motion.p
                  id="result"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-6 drop-shadow-md"
                >
                  {t.result(age)}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Footer Part */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex flex-col items-center justify-center px-4 font-poppins">
        <Footer />
      </div>
    </div>
  );
};

export default App;
