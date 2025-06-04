"use client";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { IconEmpty } from "@/components/Icons/IconEmpty";
import { IconPaperclip } from "@/components/Icons/IconPaperclip";
import { FormInModalProps } from "@/types/modalProps";
import { selectedLink } from "@/utils/selectedLink";

import { Button } from "../Button";

const nameRegex =
  /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
const emailRegex =
  /^(?!.*\.\.)(?!.*[.-]@)(?!@.*[.-]$)([a-zA-Z0-9._%+\-'"]+@(?=[a-zA-Z0-9.-]{1,63}\.[a-zA-Z]{2,}$)(?![.-])[a-zA-Z0-9.-]+(?<![.-]))$/;

export const ConsultationForm = ({ notificationHandler }: FormInModalProps) => {
  const locale = useLocale();
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
    fileUrl: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const t = useTranslations("HomePage");
  const validate = () => {
    const newErrors: typeof errors = { name: "", email: "" };
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

    setErrors(newErrors);
    return valid;
  };
  const uploadFileAndGetUrl = async (file: File): Promise<string | null> => {
    const formData = new FormData();

    formData.append("file", file);

    setStatus("Завантаження...");

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success && data.viewLink) {
        setStatus("Файл завантажено");
        return data.viewLink;
      } else {
        setStatus("Помилка під час завантаження");
        console.error("Помилка при завантаженні файлу");
        return null;
      }
    } catch (err) {
      console.error("Помилка завантаження:", err);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const onSendData = async () => {
      const data = {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        comment: formData.message,
        fileUrl: formData.fileUrl,
      };
      await axios.post("/api/consultation", data, {
        headers: { "Content-Type": "application/json" },
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
        fileUrl: "",
      });
    };

    try {
      await notificationHandler(onSendData);
    } catch (error) {
      console.error("Відправка не вдалася:", error);
    }
  };

  const inputClass =
    "mt-6 tab:mt-0 mb-7 tab:mb-4 placeholder:text-sm13 placeholder:pc:text-lg13 pc:text-2xl13 block w-full bg-transparent border-0 pb-4 tab:pb-[10px] pc:pb-7 tab:pt-[15px] pc:pt-[29px] pl-[18px] pr-4 tab:pl-7 pc:pl-[52px] font-exo placeholder:uppercase font-semibold text-title placeholder:text-text group-focus:outline-none focus:ring-0";

  return (
    <>
      <h2 className="font-exo font-semibold uppercase text-2xl13 tab:text-4xl12 mb-4 text-center">
        {t("formConsTitle")}
      </h2>
      <p className="text-center tab:font-bold text-sm13 tab:text-base13 w-[288px] tab:w-[323px] mx-auto mb-4 tab:mb-10">
        {t("formConsText")}
      </p>
      <form
        onSubmit={handleSubmit}
        className=" max-w-[684px] w-full mx-auto text-left"
      >
        <div className="tab:flex tab:gap-5">
          <div className=" relative group tab:w-1/2">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder={t("formName")}
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className={`${inputClass} `}
            />
            <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
            {errors.name && (
              <p className="absolute bottom-[-16px] left-0 text-error mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div className=" relative group tab:w-1/2">
            <label htmlFor="organization"></label>
            <input
              type="text"
              id="organization"
              placeholder={t("formOrganization")}
              value={formData.organization}
              onChange={e =>
                setFormData({ ...formData, organization: e.target.value })
              }
              className={`${inputClass} `}
            />
            <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
          </div>
        </div>
        <div className="tab:flex tab:gap-5">
          <div className=" relative group tab:w-1/2">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder={t("formEmail")}
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`${inputClass}`}
            />
            <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />

            {errors.email && (
              <p className=" absolute bottom-[-16px] left-0 text-error mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div className=" relative group tab:w-1/2">
            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              placeholder={t("formPhone")}
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={`${inputClass}`}
            />
            <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
          </div>
        </div>
        <div className=" relative group mb-7">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            placeholder={t("formAboutProject")}
            maxLength={300}
            value={formData.message}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`${inputClass}`}
          />
          <div className="absolute bottom-0 left-0 w-full h-3 border border-t-0 border-text group-focus:border-title transition-all duration-500 ease-in" />
        </div>
        <div className=" flex gap-5 items-center">
          <input
            type="file"
            id="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={async e => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile) {
                setFileName(selectedFile.name);
                setStatus("Завантаження...");
                const uploadedUrl = await uploadFileAndGetUrl(selectedFile);

                if (uploadedUrl) {
                  setFormData(prev => ({ ...prev, fileUrl: uploadedUrl }));
                  setStatus("Файл завантажено");
                } else {
                  setStatus("Помилка завантаження файлу");
                }
              } else {
                setFileName(null);
                setFormData(prev => ({ ...prev, fileUrl: "" }));
              }
            }}
          />
          <label
            htmlFor="file"
            className="relative w-12 h-12 flex justify-center items-center text-accent hover:bg-radial-green-50 cursor-pointer"
            aria-label="Button pin the document"
          >
            <IconEmpty className="w-12 h-12" />
            <IconPaperclip className="absolute" />
          </label>

          <div>
            <p className="font-exo text-sm1 uppercase font-semibold">
              {fileName ? fileName : t("pinDoc")}
            </p>
            {status && <p className="text-accent">{status}</p>}
          </div>
        </div>
        <div className="tab:flex tab:gap-5 mt-4 tab:mt-[45px]">
          <div className="flex gap-2 text-sm13 mb-10 tab:mb-0 tab:w-1/2">
            <div>
              <span className="block w-2 h-2 bg-accent mt-1"></span>
            </div>
            <p>
              {t.rich("policyAccept", {
                policy: chunk => (
                  <a
                    href={selectedLink(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline inline"
                  >
                    {chunk}
                  </a>
                ),
              })}
            </p>
          </div>

          <div className="flex justify-center tab:justify-end tab:w-1/2">
            <Button disabled={status === "Завантаження..." ? true : false} />
          </div>
        </div>
      </form>
    </>
  );
};
