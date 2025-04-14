import { useContext } from "react";
import { FeriasContext } from "../context/FeriasContext";

export const useFerias = () => useContext(FeriasContext);
