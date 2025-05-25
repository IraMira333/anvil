"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "./shared/Button";

const nameRegex =
  /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
const emailRegex =
  /^(?!.*\.\.)(?!.*[.-]@)(?!@.*[.-]$)([a-zA-Z0-9._%+\-'"]+@(?=[a-zA-Z0-9.-]{1,63}\.[a-zA-Z]{2,}$)(?![.-])[a-zA-Z0-9.-]+(?<![.-]))$/;

export const VacancyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const t = useTranslations("HomePage");
  const validate = () => {
    const newErrors: typeof errors = { name: "", email: "", message: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = t("nullName");
      valid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = t("errorName");
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("nullEmail");
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("errorEmail");
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t("nullMessage");
      valid = false;
    } else if (formData.message.length > 300 || formData.message.length < 20) {
      newErrors.message = t("errorMessage");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Тут встав логіку надсилання в Google Sheets (через API або webhook)
    console.log("Submitting: ", formData);
  };

  const inputClass =
    "mt-6 mb-7 block w-full bg-transparent border-0 pb-6 pl-[18px] font-exo placeholder:uppercase font-semibold text-title placeholder:text-text group-focus:outline-none focus:ring-0";

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-[684px] w-full mx-auto text-left"
    >
      <div className=" relative group">
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder={t("formName")}
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className={`${inputClass}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
        {errors.name && (
          <p className="absolute bottom-[-16px] left-0 text-error mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div className=" relative group">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder={t("formEmail")}
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className={`${inputClass}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />

        {errors.email && (
          <p className=" absolute bottom-[-16px] left-0 text-error mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div className=" relative group">
        <label htmlFor="phone"></label>
        <input
          type="tel"
          id="phone"
          placeholder={t("formPhone")}
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          className={`${inputClass}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
      </div>

      <div className=" relative group">
        <label htmlFor="message"></label>
        <textarea
          id="message"
          placeholder={t("formAboutYou")}
          maxLength={300}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />

        {errors.message && (
          <p className="absolute bottom-[-16px] left-0 text-error mt-1">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex gap-2 text-sm13 mb-10">
        <div>
          <span className="block w-2 h-2 bg-accent mt-1"></span>
        </div>
        <p>
          {t.rich("policyAccept", {
            policy: chunk => (
              <a
                href="https://www.ilovemyteam.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                {chunk}
              </a>
            ),
          })}
        </p>
      </div>

      <div className="flex justify-center">
        <Button joinUs />
      </div>
    </form>
  );
};
