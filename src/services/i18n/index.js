import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import itIt from "./langs/it-IT";
import React from "react";
const Markdown = require("react-remarkable");
const resources = {
    it: itIt
};
i18n.use(initReactI18next)
    .init({
        resources,
        lng: "it",
        interpolation: {
            format: function (value, format) {
                if (format === 'capitalize') {
                    const letters = value.split("");
                    letters[0] = letters[0].toUpperCase();
                    return letters.join("");
                }
                return value;
            },
            escapeValue: false
        }
    });
export const __ = (key, replace = []) => <Translation>
    {(t) => {
        let text = t(key);
        replace.forEach(
            r => {
            text = text.replace(r.key, r.value);
        })
        return <Markdown options={{ linkTarget: "_blank" }} container={"span"}>{text}</Markdown>
    }}
</Translation>;
export default i18n;